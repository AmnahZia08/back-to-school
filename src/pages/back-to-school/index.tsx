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

const DEFAULT_DETAILS = {
  moved: false,
  hidden: false,
};

const DEFAULT_ITEM_DETAILS: { [key in ItemName]: Item } = {
  [ItemName.PENCIL]: {
    ...DEFAULT_DETAILS,
    component: <Pencil />,
  },
  [ItemName.NOTEBOOK]: {
    ...DEFAULT_DETAILS,
    component: <NoteBook />,
  },
  [ItemName.BOOK]: {
    ...DEFAULT_DETAILS,
    component: <Book />,
  },
  [ItemName.BOTTLE]: {
    ...DEFAULT_DETAILS,
    component: <Bottle />,
  },
  [ItemName.SANDWICH]: {
    ...DEFAULT_DETAILS,
    component: <Sandwich />,
  },
  [ItemName.SPORT]: {
    ...DEFAULT_DETAILS,
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
    setItemDetails((prevState) => {
      const updatedState = {
        ...prevState,
        [item]: { ...prevState[item], [key]: true },
      };
      if (Object.values(updatedState).every((item) => item.moved)) {
        // Wait for the last transition to end
        setTimeout(() => setAllMoved(true), 800);
      }
      return updatedState;
    });
  };

  const onHandleClick = (item: ItemName) => {
    updateItemState(item, "moved");
    // Wait for the transition to end
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
