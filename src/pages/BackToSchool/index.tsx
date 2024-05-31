import React, { useState } from "react";
import "./style.module.css";
import BagPack from "@/components/svgs/BagPack";
import Pencil from "@/components/svgs/Pencil";
import s from "./style.module.css";

const BackToSchool = () => {
  const [pencilMoved, setPencilMoved] = useState(false);
  const [hidePencil, setHidePencil] = useState(false);

  const onClick = () => {
    setTimeout(() => setPencilMoved(true), 300);
  };

  return (
    <div className="w-screen h-screen bg-doodle relative">
      <div className={s.bagPack}>
        <BagPack />
      </div>
      <div
        className={`${pencilMoved ? s.moved : s.pencil} ${
          hidePencil ? s.noDisplay : ""
        }`}
        onClick={onClick}
        onTransitionEnd={() => setHidePencil(true)}
      >
        <Pencil />
      </div>
    </div>
  );
};

export default BackToSchool;
