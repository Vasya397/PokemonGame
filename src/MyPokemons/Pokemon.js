import styled from "./Pokemon.module.css";
import myImage9 from "../img/image9.png";
import myImage10 from "../img/image10.png";
import { useState } from "react";
import { ModalPokemon } from "./ModalPokemon";

export function Pokemon(props) {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className={styled.container}>
        <div className={styled.headerPokemon}>
          <div className={styled.text}>{props.name}</div>
          <div className={styled.settings}>
            <button
              className={styled.buttonSettings}
              onClick={() => setActive(!active)}
            >
              <img src={myImage9}></img>
            </button>
          </div>
        </div>
        <div className={styled.pokemonImg}>
          <img src={myImage10}></img>
        </div>
        <div className={styled.specifications}>
          <div className={styled.textPokemon}>Вес:</div>
          <div>{props.weight}кг</div>
        </div>
        <div className={styled.specifications}>
          <div className={styled.textPokemon}>Денег/сек:</div>
          <div>{props.money}</div>
        </div>
      </div>
      <ModalPokemon
        active={active}
        setActive={setActive}
        data={{
          name: props.name,
          weight: props.weight,
          money: props.money,
        }}
      ></ModalPokemon>
    </div>
  );
}
