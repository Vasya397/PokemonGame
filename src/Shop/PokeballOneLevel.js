import styled from "./Berry.module.css"
import { ButtonShop } from "./ButtonShop"

export function PokeballOneLevel() {
  return (
    <div>
      <div className={styled.container}>
          <img src="./image4.png" className={styled.img}></img>
          <div className={styled.text}>
              <div className={styled.h2}> 
                  Покеболл 1 уровня
              </div>
              <div> 
                  Во время охоты ловит покемона с шансом 7%
              </div>
          </div>
      </div>
      <div> 
        <ButtonShop />
      </div>
    </div>
  )
}