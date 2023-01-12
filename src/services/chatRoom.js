import { firestore } from "../firebase";
import { collection, getDocs, } from "firebase/firestore";  


export const getChatRooms = () => {
        const items = collection(firestore, "ChatRoom");
        return getDocs(items);
};

export const getChatRoom = (chatRoomId) => {
        return db?.collection('ChatRoom')?.doc(chatRoomId)?.get();
}

