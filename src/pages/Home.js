import styles from "../App.module.css";
import Ad from "../components/Ad/Ad";
import Search from "../components/Search/Search";
import { useEffect, useState } from "react";
import { getAdsByCategory } from "../services/firebase/getAdsByCategory";
import { deleteAd } from "../services/firebase/delete";
import { Link } from "react-router-dom";
import userStore from "../store/store.js";
import { observer } from "mobx-react";
import { getCategories } from "../services/firebase/getCategories";

function Home() {
  const [Ads, setAds] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const categories = await getCategories();
    const adsPromises = categories.map(async (category) => {
      return {
        category,
        ads: await getAdsByCategory(category),
      };
    });
    const ads = await Promise.all(adsPromises);
    setAds(ads);
    console.log(ads);
  }
  console.log(userStore.user);
  async function deleteData(id) {
    await deleteAd(id);
    setAds((prevstate) => prevstate.filter((item) => item.id !== id));
  }
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        {userStore.user ? (
          ""
        ) : (
          <>
            <Link to="/login" className={styles.link}>
              Login
            </Link>
            <Link to="/reg" className={styles.link}>
              Registration
            </Link>
          </>
        )}

        <select>
          <option>ENG</option>
          <option>RUS</option>
          <option>EST</option>
        </select>
      </header>
      <Search />
      <main className={styles.main}>
        <div className={styles.AdContainer}>
          {Ads.map((ad) => (
            <div>
              <h2>{ad.category.title}</h2>
              {ad.ads.map((el) => (
                <Ad ad={el} delete={deleteData} />
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default observer(Home);
