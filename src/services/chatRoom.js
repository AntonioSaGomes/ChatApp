import { firestore } from "../firebase";
import { collection, query, orderBy,onSnapshot, getCountFromServer, limit, getDocs, startAt,where } from "firebase/firestore";  


export const getChatRooms = () => {
        const items = collection(firestore, "ChatRoom");
        return getDocs(items);
};

