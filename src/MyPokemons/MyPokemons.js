import { useState } from "react"
import styled from "./MyPokemons.module.css"
import myImage5 from "../img/image5.png"
import myImage8 from "../img/image8.png"
import { SlotPokemons } from "./SlotPokemons.js"

export function MyPokemons() {

  const [isOpen, setOpen] = useState(true);

  return (
    <div className={styled.baseContainer}> 
      <div className={styled.container}> 
          <div className={styled.slotText}> 
              My Pokemons
          </div>
          <div className={styled.line}>
            <button className={styled.buttonDropdown} onClick={() => setOpen(!isOpen)}>
              <img src={isOpen ? myImage5 : myImage8} alt='5' ></img>
            </button>
          </div>
      </div>
      <div className={isOpen ? styled.dropDown : ""}> 
        <SlotPokemons /> 
      </div>
    </div>
  )
}
