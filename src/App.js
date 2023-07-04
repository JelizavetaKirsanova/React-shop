import logo from "./logo.svg";
import styles from "./App.module.css";
import Ad from "./components/Ad/Ad";
import Search from "./components/Search/Search";
import { upload } from "./services/firebase/upload";
import { useEffect, useState } from "react";
import { get } from "./services/firebase/get";

function App() {
  const [Ads,setAds] = useState([])
  useEffect( ()=>{
   getData()
  },[])
  async function getData(){
    setAds(await get())

  }
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <button>Login or registration</button>
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
            <Ad ad={ad} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
