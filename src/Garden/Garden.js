import styledGarden from "./Garden.module.css"
import styledPokemons from "../MyPokemons/MyPokemons.module.css"
import myImage5 from "../img/image5.png"
import myImage8 from "../img/image8.png"
import { useState } from "react"

export function Garden() {

  const [isOpen, setOpen] = useState(true);

  return (
    <div className={styledPokemons.baseContainer}>
      <div className={styledPokemons.container}> 
          <div className={styledPokemons.slotText}> 
              Garden
          </div>
          <div className={styledPokemons.line}> 
              <button className={styledPokemons.buttonDropdown} onClick={() => setOpen(!isOpen)}>
                   <img src={isOpen ? myImage5 : myImage8} alt='5' ></img>
              </button>
          </div>
      </div>
      <div className={isOpen ? styledPokemons.dropDown : ""}> 
        Тут тоже скоро будет контент
      </div>
    </div> 
  )
}

