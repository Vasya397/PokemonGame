import styled from "./App.module.css";
import { Header } from "../src/Components/Header/Header";
import { Inventory } from "../src/Components/Inventory/Inventory";
import { PageSpace } from "../src/Components/PageSpace/PageSpace";
import { Shop } from "../src/Components/Shop/Shop";

function App() {
  return (
    <div className={styled.App}>
      <Header />
      <div className={styled.container}>
        <Inventory />
        <PageSpace />
        <Shop />
      </div>
    </div>
  );
}

export default App;
