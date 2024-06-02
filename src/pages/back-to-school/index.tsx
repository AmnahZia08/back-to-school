import React, { useState } from "react";
import { useRouter } from "next/router";

import Button from "@/components/Button";
import Tag from "@/components/Tag";
import { Item, ItemName } from "@/types/items";

import {
  BagPack,
  Book,
  Bottle,
  NoteBook,
  Pencil,
  Sandwich,
  Sport,
} from "../../components/svgs";

import s from "./style.module.css";

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
  const router = useRouter();
  const [itemDetails, setItemDetails] = useState(DEFAULT_ITEM_DETAILS);
  const [allMoved, setAllMoved] = useState(false);
  const [bagPackSize, setBagPackSize] = useState(18);

  const handleOnButtonClick = () => {
    router.push("/hyper-space");
  };

  const updateItemState = (item: ItemName, key: string) => {
    const itemName = item as ItemName;
    const itemDetailsCopy = { ...itemDetails };
    const itemCopy = itemDetailsCopy[itemName];
    //@ts-expect-error
    itemCopy[key] = true;
    itemDetailsCopy[itemName] = itemCopy;
    setItemDetails(itemDetailsCopy);
    const allMoved = Object.values(itemDetailsCopy).every((item) => item.moved);
    if (allMoved) {
      // Wait for the last transition to end
      setTimeout(() => setAllMoved(true), 800);
    }
  };

  const onHandleClick = (item: ItemName) => {
    updateItemState(item, "moved");
    setTimeout(() => {
      setBagPackSize(bagPackSize + 1);
      updateItemState(item, "hidden");
    }, 600);
  };

  if (allMoved)
    return (
      <div className="w-screen h-dvh bg-doodle flex justify-center items-center">
        <Button onClick={handleOnButtonClick} className="mx-8">
          You are all set! Click here for some more fun!
        </Button>
      </div>
    );

  return (
    <div className="w-screen h-dvh bg-doodle relative flex justify-end items-end">
      <Tag>CLICK ON THE ITEMS TO PUT THEM IN YOUR BAG</Tag>
      <div
        className={`${s.bagPack} h-dvh w-screen flex justify-center items-center`}
      >
        <BagPack
          height={bagPackSize}
          width={bagPackSize}
          className={`${s.hover}`}
        />
      </div>
      {Object.keys(DEFAULT_ITEM_DETAILS).map((key: string) => {
        const name = key as ItemName;
        return (
          <div
            key={name}
            className={`${itemDetails[name].moved ? s.moved : s[name]} ${
              itemDetails[name].hidden ? s.noDisplay : ""
            }`}
            onClick={() => onHandleClick(name)}
          >
            <div className={s.hover}>
              {DEFAULT_ITEM_DETAILS[name].component}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BackToSchool;
