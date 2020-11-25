import "./App.css";
import InputArea from "./InputArea";
import List from "./List";
import Button from "@material-ui/core/Button";
import { useRecoilState } from "recoil";
import { listState, alertState } from "./atoms";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function App() {
  const [list, setList] = useRecoilState(listState);
  const [alert, setAlert] = useRecoilState(alertState);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert({ show: false });
  };

  return (
    <div className="app">
      <div className="app__body">
        <InputArea />
        {list.length > 0 && (
          <div className="app__bodyListContainer">
            <List />
            <div className="app__bodyListContainerResetBtn">
              <Button onClick={() => setList([])}>Clear All Items</Button>
            </div>
          </div>
        )}
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={alert.show}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <MuiAlert severity={alert.type}>{alert.msg}</MuiAlert>
      </Snackbar>
    </div>
  );
}

export default App;
