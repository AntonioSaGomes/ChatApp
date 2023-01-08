import { collection, onSnapshot, query, orderBy,where, addDoc } from "firebase/firestore";
import { firestore } from "../firebase";


export const streamChatMessages = (chatRoomId, snapshot, error) =>{
        const itemsColRef = collection(firestore, 'chatMessages')
        const itemsQuery = query(itemsColRef, where("chatRoomId", "==", chatRoomId),  orderBy('date'))
        return onSnapshot(itemsQuery, snapshot, error);
};

export const sendMessage = (message) => {
        return addDoc(collection(firestore, "chatMessages"),message);
}