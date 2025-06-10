import styled from "./Shop.module.css"
import styled2 from "../Inventory/Inventory.module.css"
import { InputField } from "./InputField"
import { Berry } from "./Berry"
import { Pokeball, PokeballOneLevel } from "./PokeballOneLevel"
import { PokeballTwoLevel } from "./PokeballTwoLevel"

export function Shop() {
  return (
    <div className={styled.container}>
        <div className={styled2.slotText}>
            Shop
        </div>
        <InputField />
        <Berry />
        <PokeballOneLevel />
        <PokeballTwoLevel /> 
    </div>
  )
}
