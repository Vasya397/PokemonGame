import styled from "../MyPokemons/MyPokemons.module.css"

export function Garden() {
  return (
    <div className={styled.container}> 
        <div className={styled.slotText}> 
            Garden
        </div>
        <div className={styled.line}> 
            <img src="./image5.png" alt='5' ></img>
        </div>
    </div> 
  )
}