import { useRecoilState } from "recoil";
import { RecoilRoot, atom, atomFamily, useRecoilValue } from "recoil";
import { items } from "./data";

const itemListState = atom({
  key: "items",
  default: items.map((item) => item.id),
});

const itemState = atomFamily({
  key: "item",
  default: (id) => items.find((item) => item.id === id),
});

const ListItem = ({ id }) => {
  const [item, setItem] = useRecoilState(itemState(id));

  return (
    <li
      onClick={() =>
        setItem((prevItem) => ({ ...prevItem, state: !prevItem.state }))
      }
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
  const itemList = useRecoilValue(itemListState);

  return (
    <div>
      <h1>Recoil</h1>
      <ul>
        {itemList.map((id) => (
          <ListItem key={id} id={id} />
        ))}
      </ul>
    </div>
  );
};

export const Recoil = () => {
  return (
    <RecoilRoot>
      <List />
    </RecoilRoot>
  );
};
