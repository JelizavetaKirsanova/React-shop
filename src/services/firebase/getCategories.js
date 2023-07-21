import { db } from "./config";
import { collection, getDocs } from "firebase/firestore";

export async function getCategories() {
  const querySnapshot = await getDocs(collection(db, "Categories"));
  let categories = [];
  querySnapshot.forEach((doc) => {
    let ad = {
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
    };
    categories.push(ad);
  });

  return categories;
}
