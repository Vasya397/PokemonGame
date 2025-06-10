import styled from "./MyPokemons.module.css"

export function MyPokemons() {
  return (
    <div className={styled.container}> 
        <div className={styled.slotText}> 
            My Pokemons
        </div>
        <div className={styled.line}> 
            <img src="./image5.png" alt='5' ></img>
        </div>
    </div> 
  )
}
