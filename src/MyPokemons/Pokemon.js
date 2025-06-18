import styled from "./Pokemon.module.css"
import myImage9 from "../img/image9.png"
import myImage10 from "../img/image10.png"

export function Pokemon(props) {
  return (
    <div className={styled.container}> 
      <div className={styled.headerPokemon}> 
          <div className={styled.text}> 
              {props.name} 
          </div>
          <div className={styled.settings}> 
            <img src={myImage9}></img>
          </div>
      </div>
      <div className={styled.pokemonImg}> 
        <img src={myImage10}></img>
      </div>
      <div className={styled.specifications}>
        <div> 
          Вес:
        </div>
        <div> 
          {props.weight}кг
        </div>
      </div>
      <div className={styled.specifications}>
        <div> 
          Денег/сек:
        </div>
        <div> 
          {props.money}
        </div>
      </div>
    </div> 
  )
}
