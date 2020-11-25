import { atom } from "recoil";

const listState = atom({
  key: "listState",
  default: [],
});

const alertState = atom({
  key: "alertState",
  default: { show: false },
});

const editState = atom({
  key: "editState",
  default: { editing: false, targetItem: {} },
});

export { listState, alertState, editState };
