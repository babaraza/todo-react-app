import "./App.css";
import InputArea from "./InputArea";
import List from "./List";
import Button from "@material-ui/core/Button";
import { useRecoilState } from "recoil";
import { listState } from "./atoms";

function App() {
  const [list, setList] = useRecoilState(listState);

  return (
    <div className="app">
      <h1>working on todo list 🔥</h1>
      <div className="app__body">
        <InputArea />
        {list.length > 0 && (
          <div className="app__bodyListContainer">
            <List />
            <div className="app__bodyListContainerResetBtn">
              <Button
                className="app__bodyListContainerResetBtn"
                onClick={() => setList([])}
              >
                Clear All Items
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
