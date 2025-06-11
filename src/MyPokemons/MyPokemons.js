import styled from "./MyPokemons.module.css"
import myImage5 from "../img/image5.png"

export function MyPokemons() {
  return (
    <div className={styled.container}> 
        <div className={styled.slotText}> 
            My Pokemons
        </div>
        <div className={styled.line}> 
            <img src={myImage5} alt='5' ></img>
        </div>
    </div> 
  )
}
