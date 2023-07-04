import { doc, deleteDoc } from "firebase/firestore";
import {db} from "./config"

export async function deleteAd(id){
    await deleteDoc(doc(db, "Ads", id));
} 