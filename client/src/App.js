import './App.css';
import { useState, useEffect } from 'react'
import * as React from 'react';
import Item from './Item'

function App() {
  const [cards, setCards] = useState([])
  const [current, setCurrent] = useState()

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch('http://localhost:5000/items')
      const data = await response.json()
      setCards(data)
    }
    fetchItems()
  }, [])
  return (
    <div>
      <Item cards={cards} setCurrent={setCurrent}/>
    </div>
  );
}
export default App;









