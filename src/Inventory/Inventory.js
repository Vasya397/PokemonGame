import { Slots } from "./Slots";
import styled from "./Inventory.module.css"
import { ButtonMoney } from "./ButtonMoney";

export function Inventory() {
  return ( 
    <div className={styled.frame1}>
      <div className={styled.slotText}> Inventory </div>
      <Slots />
      <Slots /> 
      <Slots /> 
      <ButtonMoney /> 
    </div>
  )
}

