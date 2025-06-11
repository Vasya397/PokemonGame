import styled2 from "../MyPokemons/MyPokemons.module.css"
import styled from "./Hunt.module.css"
import myImage5 from "../img/image5.png"

export function Hunt() {
  return (
    <div className={styled.container}> 
        <div className={styled2.slotText}> 
            Hunt
        </div>
        <div className={styled2.line}> 
            <img src={myImage5} alt='5' ></img>
        </div>
    </div> 
  )
}