import styled from "./SlotPokemons.module.css";
import { Pokemon } from "./Pokemon";

export function SlotPokemons() {
  return (
    <div className={styled.container}>
      <Pokemon name="clefairy" weight="12" money="1.5" />

      <Pokemon name="clefairy" weight="12" money="1.5" />

      <Pokemon name="clefairy" weight="12" money="1.5" />

      <Pokemon name="Кузя" weight="15" money="2" />
    </div>
  );
}
