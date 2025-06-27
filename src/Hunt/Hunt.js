import styledSecondary from "../MyPokemons/MyPokemons.module.css";
import styledBase from "./Hunt.module.css";
import myImage5 from "../img/image5.png";
import myImage8 from "../img/image8.png";
import { useState } from "react";

export function Hunt() {
  const [isOpen, setOpen] = useState(true);

  return (
    <div className={styledSecondary.baseContainer}>
      <div className={styledSecondary.container}>
        <div className={styledSecondary.slotText}>Hunt</div>
        <div className={styledSecondary.line}>
          <button
            className={styledSecondary.buttonDropdown}
            onClick={() => setOpen(!isOpen)}
          >
            <img src={isOpen ? myImage5 : myImage8} alt="5"></img>
          </button>
        </div>
      </div>
      <div className={isOpen ? styledSecondary.dropDown : ""}>
        Скоро контент
      </div>
    </div>
  );
}
