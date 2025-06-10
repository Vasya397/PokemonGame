import styled from './App.module.css';
import { Header } from './Header/Header';
import { Inventory } from './Inventory/Inventory';
import { PageSpace } from './PageSpace/PageSpace';
import { Shop } from './Shop/Shop';

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
