import styled from "./Inventory.module.css"
import { ButtonMoney } from "./ButtonMoney";
import { useState } from "react";

const arrPokemons = ["", "", "", ""]

export function Inventory() {

  const [arr, setArr] = useState([...arrPokemons]); 

  const buySlot = () => {
    setArr([...arr, ""]);
  };

  return ( 
    <div className={styled.container}>
      <div className={styled.slotText}> Inventory </div>
            <div className={styled.slots}>
              {arr.map((slot, index) => (
                <div key={index} className={styled.slot1X1}> {slot} </div> 
            ))}
          </div>
      <ButtonMoney onBuySlot={buySlot}/>  
    </div>
  )
}

