import styled from "./Inventory.module.css"

export function ButtonMoney() {
  return ( 
    <div className={styled.slotText}>
        <button name="button" className={styled.buttonMoney}>
            <img src="./image3.png" className={styled.img}></img>
        <div className={styled.slotText}> 1000 </div>
        </button>
    </div>
    )
}
