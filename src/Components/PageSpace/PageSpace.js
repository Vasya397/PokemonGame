import { Garden } from "../Garden/Garden";
import { Hunt } from "../Hunt/Hunt";
import { MyPokemons } from "../MyPokemons/MyPokemons";
import styled from "./PageSpace.module.css";

export function PageSpace() {
  return (
    <div className={styled.container}>
      <MyPokemons />
      <Garden />
      <Hunt />
    </div>
  );
}
