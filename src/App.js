import logo from "./logo.svg";
import styles from "./App.module.css";
import Ad from "./components/Ad/Ad";
import Search from "./components/Search/Search";

function App() {
  const Ads = [
    { title: "Test 1", description: "Some description", price: 12.0 },
    { title: "Test 2", description: "Some description", price: 2.0 },
    { title: "Test 3", description: "Some description", price: 1.0 },
    { title: "Test 4", description: "Some description", price: 32.0 },
    { title: "Test 5", description: "Some description", price: 1.0 },
    { title: "Test 6", description: "Some description", price: 0.5 },
  ];
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
