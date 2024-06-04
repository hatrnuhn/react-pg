import { useState } from 'react';
import './App.css'
import SearchInput from './components/SearchInput'
import Catalog from './components/Catalog';

function App() {
  const products = [
    {name: 'Reebok Nano X3 Adventure'},
    {name: 'Reebok Nano X2 Adventure'}, 
    {name: 'Hoka Speedgoat 5'},
    {name: 'Hoka Torrent 3'},
    {name: 'Saucony Peregrine 13'},
    {name: 'Adidas Terrex Soulstride'}
  ]

  const [searchInputValue, setSearchInputValue] = useState('');

  return (
    <div>
      <SearchInput setSearchInputValue={setSearchInputValue}/>
      <Catalog products={products} searchFor={searchInputValue} />
    </div>
  )
}

export default App
