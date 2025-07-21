import styled from "./Inventory.module.css";
import Coin from "../../img/Coin.png";

export function AddNewSlot({ addSlot }) {
  return (
    <div className={styled.slotText}>
      <button name="button" className={styled.buttonMoney} onClick={addSlot}>
        <img src={Coin} className={styled.img}></img>
        <div className={styled.slotText}> 1000 </div>
      </button>
    </div>
  );
}
