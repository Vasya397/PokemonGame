import styled from "./Pokemon.module.css";
import SettingsPokemon from "../../img/SettingsPokemon.png";
import PokemonPictures from "../../img/PokemonPictures.png";
import CloseModal from "../../img/CloseModal.svg";
import Berry from "../../img/Berry.png";
import { useState } from "react";
import { ModalPokemon } from "../../Shared/ModalPokemon.js";

export function Pokemon(props) {
  const [buttonFeed, setButtonFeed] = useState(true);
  const [buttonStatistics, setButtonStatistics] = useState(false);

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
              <img src={SettingsPokemon}></img>
            </button>
          </div>
        </div>
        <div className={styled.pokemonImg}>
          <img src={PokemonPictures}></img>
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
      <ModalPokemon active={active} setActive={setActive}>
        <div>
          <div className={styled.header}>
            <div className={styled.textHeader}>
              Управление покемоном {props.name}
            </div>
            <button
              className={styled.closeModalCross}
              onClick={() => setActive(!active)}
            >
              <img src={CloseModal}></img>
            </button>
          </div>
          <div className={styled.headerButton}>
            <div>
              <button
                className={
                  buttonFeed ? styled.controlButtonActive : styled.controlButton
                }
                onClick={() => {
                  setButtonFeed(!buttonFeed);
                  setButtonStatistics(false);
                }}
              >
                Накормить
              </button>
            </div>
            <div>
              <button
                className={
                  buttonStatistics
                    ? styled.controlButtonActive
                    : styled.controlButton
                }
                onClick={() => {
                  setButtonStatistics(!buttonStatistics);
                  setButtonFeed(false);
                }}
              >
                Статистика
              </button>
            </div>
          </div>
          <div
            className={
              buttonStatistics
                ? styled.screenCharacteristic
                : styled.displayNone
            }
          >
            <div className={styled.buttonImg}>
              <div className={styled.imgPokemon}>
                <img src={PokemonPictures}></img>
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
                <div>{props.name}</div>
              </div>
              <div className={styled.characteristic}>
                <div className={styled.textCharacteristic}>Вec</div>
                <div>{props.weight}</div>
              </div>
              <div className={styled.characteristic}>
                <div className={styled.textCharacteristic}>
                  Суммарно заработано
                </div>
                <div>Допишу</div>
              </div>
              <div className={styled.characteristic}>
                <div className={styled.textCharacteristic}>Денег/сек</div>
                <div>{props.money}</div>
              </div>
              <div className={styled.characteristic}>
                <div className={styled.textCharacteristic}>Возраст</div>
                <div>Допишу</div>
              </div>
              <div className={styled.input}>
                <input className={styled.inputField}></input>
                <button className={styled.buttonSaveName}> Сохранить </button>
              </div>
            </div>
          </div>
          <div className={buttonFeed ? styled.screenFeed : styled.displayNone}>
            <div className={styled.headerPokemon}>
              <div className={styled.containerBerry}>
                <div className={styled.contentBerry}>
                  <img src={Berry}></img>
                  <div>
                    <div className={styled.text}> Ягода 1 уровня </div>
                    <div>Накорми ей покемона для увеличения веса на 0.1кг</div>
                  </div>
                </div>
                <button className={styled.buttonBerry}>Накормить</button>
              </div>
              <div className={styled.containerBerry}>
                <div className={styled.contentBerry}>
                  <img src={Berry}></img>
                  <div>
                    <div className={styled.text}> Ягода 1 уровня </div>
                    <div>Накорми ей покемона для увеличения веса на 0.1кг</div>
                  </div>
                </div>
                <button className={styled.buttonBerry}>Накормить</button>
              </div>
            </div>
          </div>
          <button
            className={styled.closeModal}
            onClick={() => setActive(!active)}
          >
            Закрыть
          </button>
        </div>
      </ModalPokemon>
    </div>
  );
}
