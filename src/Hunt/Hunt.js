import styled2 from "../MyPokemons/MyPokemons.module.css"
import styled from "./Hunt.module.css"

export function Hunt() {
  return (
    <div className={styled.container}> 
        <div className={styled2.slotText}> 
            Hunt
        </div>
        <div className={styled2.line}> 
            <img src="./image5.png" alt='5' ></img>
        </div>
    </div> 
  )
}