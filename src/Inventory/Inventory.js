import styled from "./Inventory.module.css"
import { ButtonMoney } from "./ButtonMoney";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

const arrPokemons = ["", "", "", ""]

export function Inventory() {

  const dispatch = useDispatch();


  const [arr, setArr] = useState([...arrPokemons]); 
  
  const buySlot = () => {
    setArr([...arr, ""]);

    dispatch({type: "MINUS_BALANCE", payload: 1000})
  };

  return ( 
    <div className={styled.container}>
      <div className={styled.slotText}> Inventory </div>
            <div className={styled.slots}>
              {arr.map((slot, index) => (
                <div key={index} className={styled.slot1X1}> {slot} </div> 
            ))}
          </div>
      <ButtonMoney buySlot={buySlot}/>  
    </div>
  )
}

