import { useDispatch, useSelector } from "react-redux";
import styled from "./Header.module.css";
import PokemonLogo from "../../img/PokemonLogo.png";
import Clicker from "../../img/Clicker.png";
import Coin from "../../img/Coin.png";
import { CoinBalance } from "../../Store/CoinBalance.js";

export const reducerLogo = (state = CoinBalance, action) => {
  switch (action.type) {
    case "PLUS_BALANCE":
      return { ...state, cash: state.cash + action.payload };
    case "MINUS_BALANCE":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

export function Header() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);

  const plusCash = () => {
    dispatch({ type: "PLUS_BALANCE", payload: 1000 });
  };

  const minusCash = () => {
    dispatch({ type: "MINUS_BALANCE", payload: 1000 });
  };

  return (
    <div className={styled.container}>
      <div>
        <img src={PokemonLogo} alt="1" />
      </div>
      <div>
        <img src={Clicker} alt="2" />
      </div>
      <div className={styled.logoMoney}>
        <img src={Coin} alt="3" />
      </div>
      <div className={styled.money}>{cash}</div>
      <div>
        <div className={styled.plusBalance}>
          <button onClick={() => plusCash()}>+</button>
        </div>
        <div className={styled.plusBalance}>
          <button onClick={() => minusCash()}>-</button>
        </div>
      </div>
    </div>
  );
}
