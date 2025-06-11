import styled from "./Shop.module.css"
import styled2 from "../Inventory/Inventory.module.css"
import { InputField } from "./InputField"
import { Thing } from "./Thing"
import myImage4 from "../img/image4.png"
import myImage6 from "../img/image6.png"
import myImage7 from "../img/image7.png"


export function Shop() {
  return (
    <div className={styled.container}>
        <div className={styled2.slotText}>
            Shop
        </div>
        <InputField />
        <Thing 
        header="Ягода 1 уровня" 
        text="Накорми ей покемона для увеличения веса на 0.1 кг" 
        price="1000"
        img={myImage4}/>
        <Thing 
        header="Покеболл 1 уровня" 
        text="Во время охоты ловит покемона с шансом 7%" 
        price="5000"
        img={myImage6}/>
        <Thing 
        header="Покеболл 2 уровня"
        text="Во время охоты ловит покемона с шансом 15%" 
        price="10000"
        img={myImage7}
        />
    </div>
  )
}
