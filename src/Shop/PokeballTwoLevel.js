import styled from "./Berry.module.css"
import { ButtonShop } from "./ButtonShop"

export function PokeballTwoLevel() {
  return (
    <div>
      <div className={styled.container}>
          <img src="./image7.png" className={styled.img}></img>
          <div className={styled.text}>
              <div className={styled.h2}> 
                  Покеболл 2 уровня
              </div>
              <div> 
                  Во время охоты ловит покемона с шансом 15%
              </div>
          </div>
      </div>
      <div> 
        <ButtonShop />
      </div>
    </div>
  )
}