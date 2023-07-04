import { db } from "./config";
import { collection, getDocs } from "firebase/firestore";

export async function get() {
  const querySnapshot = await getDocs(collection(db, "Ads"));
  let ads = [];
  querySnapshot.forEach((doc) => {
    let ad = {id : doc.id, title: doc.data().title, description: doc.data().description, price: doc.data().price}
    ads.push(ad);
  });

  return ads;
}
