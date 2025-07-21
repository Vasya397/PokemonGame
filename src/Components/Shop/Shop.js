import styled from "./Shop.module.css";
import styled2 from "../Inventory/Inventory.module.css";
import { InputField } from "./InputField";
import { Thing } from "./Thing";
import Berry from "../../img/Berry.png";
import PokeballOneLevel from "../../img/PokeballOneLevel.png";
import PokeballTwoLevel from "../../img/PokeballTwoLevel.png";

export function Shop() {
  return (
    <div className={styled.container}>
      <div className={styled2.slotText}>Shop</div>
      <InputField />
      <Thing
        header="Ягода 1 уровня"
        text="Накорми ей покемона для увеличения веса на 0.1 кг"
        price="1000"
        img={Berry}
      />
      <Thing
        header="Покеболл 1 уровня"
        text="Во время охоты ловит покемона с шансом 7%"
        price="5000"
        img={PokeballOneLevel}
      />
      <Thing
        header="Покеболл 2 уровня"
        text="Во время охоты ловит покемона с шансом 15%"
        price="10000"
        img={PokeballTwoLevel}
      />
    </div>
  );
}
