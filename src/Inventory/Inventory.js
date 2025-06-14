import styled from "./Inventory.module.css"
import { ButtonMoney } from "./ButtonMoney";

export function Inventory() {
  return ( 
    <div className={styled.container}>
      <div className={styled.slotText}> Inventory </div>
        <div className={styled.slots}> 
          <div className={styled.slot1X1}></div>
          <div className={styled.slot1X1}></div>
          <div className={styled.slot1X1}></div>
          <div className={styled.slot1X1}></div>
          <div className={styled.slot1X1}></div>
          <div className={styled.slot1X1}> </div>
          <div className={styled.slot1X1}> </div>
          <div className={styled.slot1X1}> </div>
          <div className={styled.slot2X2}> </div>
          <div className={styled.slot1X1}> </div>
          <div className={styled.slot1X1}> </div>
          <div className={styled.slot1X1}> </div>
        </div>
      <ButtonMoney /> 
    </div>
  )
}

