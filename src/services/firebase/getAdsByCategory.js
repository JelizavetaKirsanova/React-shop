import { db } from "./config";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function getAdsByCategory(category) {
  const q = query(collection(db, "Ads"), where("category", "==", category));
  const querySnapshot = await getDocs(q);
  let ads = [];
  querySnapshot.forEach((doc) => {
    let ad = {
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      price: doc.data().price,
    };
    ads.push(ad);
  });

  return ads;
}
