import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [cards, setCards] = useState([])

  useEffect(() => {
    async function fetchItems () {
      const response = await fetch('http://localhost:5000/items')
      const data = await response.json()
      setCards(data)
    }
    fetchItems()
  }, [])

  return (
    <div className="App">
      <ul>
      {
        cards.map((card) => {
          return (<li key={card.id}>{ card.title }</li>)
        })
      }
      </ul>
    </div>
  );
}

export default App;
