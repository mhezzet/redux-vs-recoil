import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";
import { items } from "./data";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items,
  },
  reducers: {
    toggleItemByID: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload ? { ...item, state: !item.state } : item
      );
    },
  },
});

const { toggleItemByID } = itemsSlice.actions;

const store = configureStore({
  reducer: itemsSlice.reducer,
});

const ListItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li
      onClick={() => dispatch(toggleItemByID(item.id))}
      style={{
        textDecoration: item.state ? "none" : "line-through",
        cursor: "pointer",
      }}
    >
      {item.name}
    </li>
  );
};

const List = () => {
  const itemList = useSelector((state) => state.items);

  return (
    <div>
      <h1>Redux</h1>
      <ul>
        {itemList.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export const Redux = () => {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
};
