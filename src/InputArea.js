import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { listState, alertState, editState } from "./atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import "./InputArea.css";

function InputArea() {
  const [item, setItem] = useState("");
  const [list, setList] = useRecoilState(listState);
  const [edit, setEdit] = useRecoilState(editState);
  const setAlert = useSetRecoilState(alertState);

  useEffect(() => {
    if (edit.editing) {
      setItem(edit.targetItem.title);
    }
  }, [edit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit.editing) {
      setList(
        list.map((listItem) => {
          if (listItem.id === edit.targetItem.id) {
            return { ...listItem, title: item };
          }
          return listItem;
        })
      );
      setAlert({ show: true, msg: "Item edited", type: "info" });
      setEdit({ editing: false, id: "" });
    } else {
      setAlert({ show: true, msg: "New item added", type: "success" });
      const newItem = { id: new Date().getTime().toString(), title: item };
      setList([newItem, ...list]);
    }
    setItem("");
  };

  return (
    <div className="inputArea">
      <form className="inputArea__form" onSubmit={handleSubmit}>
        <TextField
          label={edit.editing ? "Edit todo item" : "Enter todo item"}
          variant="filled"
          size="small"
          value={item}
          style={{ width: 450 }}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <Button
          disabled={!item}
          type="submit"
          variant="contained"
          color="primary"
          style={{ height: 48, width: 100, marginLeft: 10 }}
        >
          {edit.editing ? "Edit" : "Add Item"}
        </Button>
      </form>
    </div>
  );
}

export default InputArea;
