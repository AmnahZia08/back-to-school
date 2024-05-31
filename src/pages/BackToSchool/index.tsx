import React, { useState } from "react";
import "./style.module.css";
import BagPack from "@/components/svgs/BagPack";
import Pencil from "@/components/svgs/Pencil";
import s from "./style.module.css";

type Item = {
  moved: boolean;
  hidden: boolean;
};

enum ItemName {
  PENCIL = "pencil",
  NOTEBOOK = "notebook",
}

const DEFAULT_STATE: { [key in ItemName]: Item } = {
  [ItemName.PENCIL]: {
    moved: false,
    hidden: false,
  },
  [ItemName.NOTEBOOK]: {
    moved: false,
    hidden: false,
  },
};

const BackToSchool = () => {
  const [pencilMoved, setPencilMoved] = useState(false);
  const [hidePencil, setHidePencil] = useState(false);
  const [itemDetails, setItemDetails] = useState(DEFAULT_STATE);

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
      <div
        className={`${
          itemDetails[ItemName.PENCIL].moved ? s.moved : s.pencil
        } ${itemDetails[ItemName.PENCIL].hidden ? s.noDisplay : ""}`}
        onClick={() => onHandleClick(ItemName.PENCIL)}
        onTransitionEnd={() => onHandleTransitionEnd(ItemName.PENCIL)}
      >
        <Pencil />
      </div>
    </div>
  );
};

export default BackToSchool;
