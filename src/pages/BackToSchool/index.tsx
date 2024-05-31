import React, { useState } from "react";
import "./style.module.css";
import BagPack from "@/components/svgs/BagPack";
import Pencil from "@/components/svgs/Pencil";
import s from "./style.module.css";
import { Item, ItemName } from "@/types/items";
import NoteBook from "@/components/svgs/Notebook";
import Book from "@/components/svgs/Book";
import Bottle from "@/components/svgs/Bottle";
import Sandwich from "@/components/svgs/Sandwich";
import Sport from "@/components/svgs/Sport";

const DEFAULT_ITEM_DETAILS: { [key in ItemName]: Item } = {
  [ItemName.PENCIL]: {
    moved: false,
    hidden: false,
    component: <Pencil />,
  },
  [ItemName.NOTEBOOK]: {
    moved: false,
    hidden: false,
    component: <NoteBook />,
  },
  [ItemName.BOOK]: {
    moved: false,
    hidden: false,
    component: <Book />,
  },
  [ItemName.BOTTLE]: {
    moved: false,
    hidden: false,
    component: <Bottle />,
  },
  [ItemName.SANDWICH]: {
    moved: false,
    hidden: false,
    component: <Sandwich />,
  },
  [ItemName.SPORT]: {
    moved: false,
    hidden: false,
    component: <Sport />,
  },
};

const BackToSchool = () => {
  const [itemDetails, setItemDetails] = useState(DEFAULT_ITEM_DETAILS);

  const onHandleClick = (item: ItemName) => {
    const itemDetailsCopy = { ...itemDetails[item] };
    setTimeout(() => {
      setItemDetails({
        ...itemDetails,
        [item]: { ...itemDetailsCopy, moved: true },
      });
    }, 300);
  };

  const onHandleTransitionEnd = (item: ItemName) => {
    const itemDetailsCopy = { ...itemDetails[item] };
    setItemDetails({
      ...itemDetails,
      [item]: { ...itemDetailsCopy, hidden: true },
    });
  };

  return (
    <div className="w-screen h-screen bg-doodle relative">
      <div className={s.bagPack}>
        <BagPack />
      </div>
      {Object.keys(DEFAULT_ITEM_DETAILS).map((key: string) => {
        const name = key as ItemName;
        return (
          <div
            className={`${itemDetails[name].moved ? s.moved : s[name]} ${
              itemDetails[name].hidden ? s.noDisplay : ""
            }`}
            onClick={() => onHandleClick(name)}
            onTransitionEnd={() => onHandleTransitionEnd(name)}
          >
            {DEFAULT_ITEM_DETAILS[name].component}
          </div>
        );
      })}
    </div>
  );
};

export default BackToSchool;
