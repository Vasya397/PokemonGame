import styled from "./Inventory.module.css";
import { AddNewSlot } from "./AddNewSlot";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const arrPokemons = ["", "", "", ""];

export function Inventory() {
  const dispatch = useDispatch();

  const [arr, setArr] = useState([...arrPokemons]);

  const addSlot = () => {
    setArr([...arr, ""]);

    dispatch({ type: "MINUS_BALANCE", payload: 1000 });
  };

  return (
    <div className={styled.container}>
      <div className={styled.slotText}> Inventory </div>
      <div className={styled.slots}>
        {arr.map((slot, index) => (
          <div key={index} className={styled.slot1X1}>
            {slot}
          </div>
        ))}
      </div>
      <AddNewSlot addSlot={addSlot} />
    </div>
  );
}
