import { useState } from "react";
import styled from "./MyPokemons.module.css";
import PatchDown from "../../img/PatchDown.png";
import PatchUp from "../../img/PatchUp.png";
import { SlotPokemons } from "./SlotPokemons.js";

export function MyPokemons() {
  const [isOpen, setOpen] = useState(true);

  return (
    <div className={styled.baseContainer}>
      <div className={styled.container}>
        <div className={styled.slotText}>My Pokemons</div>
        <div className={styled.line}>
          <button
            className={styled.buttonDropdown}
            onClick={() => setOpen(!isOpen)}
          >
            <img src={isOpen ? PatchDown : PatchUp} alt="5"></img>
          </button>
        </div>
      </div>
      <div className={isOpen ? styled.dropDown : ""}>
        <SlotPokemons />
      </div>
    </div>
  );
}
