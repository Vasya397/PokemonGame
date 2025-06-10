import styled from "./Berry.module.css"
import { ButtonShop } from "./ButtonShop"

export function Berry() {
  return (
    <div>
      <div className={styled.container}>
          <img src="./image6.png" className={styled.img}></img>
          <div className={styled.text}>
              <div className={styled.h2}> 
                  Ягода 1 уровня
              </div>
              <div> 
                  Накорми ей покемона для увеличения веса на 0.1 кг
              </div>
          </div>
      </div>
      <div> 
        <ButtonShop />
      </div>
    </div>
  )
}



