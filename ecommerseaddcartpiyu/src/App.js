import Item from './component/Item';
import Cart from './component/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Item name="MacBook" price={100000}/>
      <Item name="Pendrive" price={40000}/>
      <Item name="Mobile" price={35000}/> 
      <Cart />
    </div>
  );
}

export default App;
