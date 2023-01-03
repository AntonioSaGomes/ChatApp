import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { firestore } from "../firebase";


export const streamChatMessages = (chatId, snapshot, error) =>{
        console.log(chatId,'chatId');
        const itemsColRef = collection(firestore, 'chatMessages')
        const itemsQuery = query(itemsColRef, orderBy('date'))
        return onSnapshot(itemsQuery, snapshot, error);
};
