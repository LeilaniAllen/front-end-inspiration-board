import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CardsList from "./components/CardList";
import NewBoardForm from "./components/NewBoardForm";
import Board from "./components/Board";


function App() {
  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    title: "",
    owner: "",
    board_id: null,
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {})
      .then((response) => {
        setBoardsData(response.data);
      });
  }, []);

  const selectBoard = (board) => {
    setSelectedBoard(board);
  };

  const boardsElements = boardsData.map((board) => {
    console.log(board.title);
    return (
      <li>
        <Board board={board} onBoardSelect={selectBoard}></Board>
      </li>
    );
  });

  const createNewBoard = (newBoard) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoard)
      .then((response) => {
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {})
          .then((response) => {
            setBoardsData(response.data);
          });
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  const toggleNewBoardForm = () => {
    setIsBoardFormVisible(!isBoardFormVisible);
  };

  const deleteAll = () => {
    if (
      window.confirm("Are you really sure? Please be gentle with this demo.")
    ) {
      axios
        .delete(`${process.env.REACT_APP_BACKEND_URL}/destroy_all`)
        .then((response) => {
          console.log("response", response.data);
          setBoardsData([response.data.default_board]);
          setSelectedBoard({
            title: "",
            owner: "",
            board_id: null,
          });
        })
        .catch((error) => {
          console.log("Error:", error);
          alert("Something went wrong! :(");
        });
    }
  };

  return (
    <div className="page__container">
      <div className="content__container">
        <h1 className="inspiration-board">
          Inspiration Board
          <span className="team-header">Ice-Ice-Baby </span>
        </h1>

        <section></section>
        {/* This section holds the boards cards on header. */}
        <section className="boards-container">
          {/* Boards box element */}
          <section>
            <h2>Boards</h2>
            <ol className="boards__list">{boardsElements}</ol>
          </section>
          {/* Selected Board box element */}
          <section>
            <h2>Selected Board</h2>
            <p>
              {selectedBoard.board_id
                ? `${selectedBoard.title} - ${selectedBoard.owner}`
                : "Select a Board from the Board List!"}
            </p>
          </section>
          {/* Create A New Board box element */}
          <section className="new-board-form__container">
            <h2 class="resize-font" >Create a New Board</h2>
            {isBoardFormVisible ? (
              <NewBoardForm createNewBoard={createNewBoard}></NewBoardForm>
            ) : (
              ""
            )}
            <span
              onClick={toggleNewBoardForm}
              className="new-board-form__toggle-btn"
            >
              {isBoardFormVisible
                ? "Hide New Board Form"
                : "Show New Board Form"}
            </span>
          </section>
        </section>
        {selectedBoard.board_id ? (
          <CardsList board={selectedBoard}></CardsList>
        ) : (
          ""
        )}
      </div>
      <footer>
        <span>We Got This!</span>
      </footer>
    </div>
  );
}

export default App;