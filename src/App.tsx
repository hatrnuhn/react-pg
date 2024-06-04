import { useState } from 'react';
import './App.css'
import SearchInput from './components/SearchInput'
import Catalog from './components/Catalog';
import AddProduct from './components/AddProduct';
import ColorPicker from './components/ColorPicker';
import InDecrement from './components/InDecrement';
import FavoriteCar from './components/FavoriteCar';

function App() {
  const data = [
    {name: 'Reebok Nano X3 Adventure'},
    {name: 'Reebok Nano X2 Adventure'}, 
    {name: 'Hoka Speedgoat 5'},
    {name: 'Hoka Torrent 3'},
    {name: 'Saucony Peregrine 13'},
    {name: 'Adidas Terrex Soulstride'}
  ]

  const [searchInputValue, setSearchInputValue] = useState('');
  const [products, setNewProduct] = useState(data);
  const [bgColor, setBgColor] = useState('#ffffff')

  return (
    <div>
      <SearchInput setSearchInputValue={setSearchInputValue}/>
      <br/>
      <AddProduct setNewProduct={setNewProduct}/>   
      <Catalog bgColor={bgColor} products={products} searchFor={searchInputValue}/>
      <ColorPicker setBgColor={setBgColor}/>
      <InDecrement/>
      <FavoriteCar/>
    </div>
  )
}

export default App
