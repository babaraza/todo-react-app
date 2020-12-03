import { useRecoilState, useSetRecoilState } from "recoil";
import { alertState, listState, editState } from "./atoms";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "./List.css";

function List() {
  const [list, setList] = useRecoilState(listState);
  const setAlert = useSetRecoilState(alertState);
  const setEdit = useSetRecoilState(editState);

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    setAlert({ show: true, msg: "Item Deleted", type: "error" });
  };

  const editItem = (id) => {
    const findItem = list.find((item) => item.id === id);
    setEdit({ editing: true, targetItem: findItem });
  };

  return (
    <div className="list">
      {list.map((item) => (
        <div key={item.id} className="list__item">
          <p className="list__itemTitle">{item.title}</p>
          <div className="list__itemButtons">
            <IconButton onClick={() => editItem(item.id)}>
              <EditIcon style={{ color: "#77DD77", fontSize: 16 }} />
            </IconButton>
            <IconButton onClick={() => removeItem(item.id)}>
              <DeleteIcon style={{ color: "#ff6961", fontSize: 16 }} />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
