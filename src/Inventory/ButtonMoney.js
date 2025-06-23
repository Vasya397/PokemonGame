import styled from "./Inventory.module.css"
import myImage3 from "../img/image3.png"



export function ButtonMoney({buySlot}) {
  return ( 
    <div className={styled.slotText}>
        <button name="button" className={styled.buttonMoney} onClick={buySlot}>
            <img src={myImage3} className={styled.img}></img>
        <div className={styled.slotText}> 1000 </div>
        </button>
    </div>
    )
}
