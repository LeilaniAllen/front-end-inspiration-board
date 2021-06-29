import logo from "./logo.svg";
import "./Styles/App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import NewBoardForm from "./Component/NewBoardForm";
import Board from "./Component/Board"

function App() {
  const [results, setResults] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {})
      .then((requestResult) => {
        setResults(requestResult);
      })
      .catch((err) => {
        setResults(JSON.stringify(err));
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {results}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NewBoardForm></NewBoardForm>
        <Board></Board>
      </header>
    </div>
  );
}

export default App;
