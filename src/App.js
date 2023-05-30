import logo from './logo.svg';
import './App.css';
import Search from "./components/Search/Search"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>Login or registration</button>
        <select>
          <option>ENG</option>
          <option>RUS</option>
          <option>EST</option>
        </select>
      </header>
      <Search/>
    </div>
  );
}

export default App;
