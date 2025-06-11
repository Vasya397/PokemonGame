import styled from "../MyPokemons/MyPokemons.module.css"
import myImage5 from "../img/image5.png"

export function Garden() {
  return (
    <div className={styled.container}> 
        <div className={styled.slotText}> 
            Garden
        </div>
        <div className={styled.line}> 
            <img src={myImage5} alt='5' ></img>
        </div>
    </div> 
  )
}

