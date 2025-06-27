import ReactDOM from "react-dom";
import styled from "./ModalPokemon.module.css";
import myImage10 from "../img/image10.png";

export const ModalPokemon = ({ active, setActive, data }) => {
  if (!active) return null;

  const { name, weight, money } = data;

  return ReactDOM.createPortal(
    <div className={styled.modal} onClick={() => setActive(!active)}>
      <div className={styled.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styled.textHeader}>Управление покемоном {name} </div>
        <div className={styled.headerButton}>
          <div>
            <button className={styled.buttonCharacteristic}>Накормить</button>
          </div>
          <div>
            <button className={styled.buttonCharacteristic}>Статистика</button>
          </div>
        </div>
        <div className={styled.screenCharacteristic}>
          <div className={styled.buttonImg}>
            <div className={styled.imgPokemon}>
              <img src={myImage10}></img>
            </div>
            <div>
              <button className={styled.buttonDelPokemon}>
                Удалить покемона
              </button>
            </div>
          </div>
          <div className={styled.onlyCharacteristics}>
            <div className={styled.characteristic}>
              <div className={styled.textCharacteristic}>Вид</div>
              <div>{name}</div>
            </div>
            <div className={styled.characteristic}>
              <div className={styled.textCharacteristic}>Вec</div>
              <div>{weight}</div>
            </div>
            <div className={styled.characteristic}>
              <div className={styled.textCharacteristic}>
                Суммарно заработано
              </div>
              <div>Допишу</div>
            </div>
            <div className={styled.characteristic}>
              <div className={styled.textCharacteristic}>Денег/сек</div>
              <div>{money}</div>
            </div>
            <div className={styled.characteristic}>
              <div className={styled.textCharacteristic}>Возраст</div>
              <div>Допишу</div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
