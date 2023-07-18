import styles from "../App.module.css";
import Ad from "../components/Ad/Ad";
import Search from "../components/Search/Search";
import { useEffect, useState } from "react";
import { get } from "../services/firebase/get";
import { deleteAd } from "../services/firebase/delete";
import { Link } from "react-router-dom";
import userStore from "../store/store.js";
import {observer} from "mobx-react"

function Home() {
  const [Ads, setAds] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    setAds(await get());
  }
console.log(userStore.user)
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
            <Ad ad={ad} delete={deleteData} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default observer(Home) ;
