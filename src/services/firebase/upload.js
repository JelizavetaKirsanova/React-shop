import {addDoc, collection } from "firebase/firestore"; 
import {db} from "./config"

// Add a new document in collection "cities"
export async function upload(ad){
    await addDoc(collection(db, "Ads"), ad);
}
