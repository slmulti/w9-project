import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [cards, setCards] = useState([])

  async function fetchItems () {
    const response = await fetch('http://localhost:5000/items')
    const data = await response.json()
    setCards(data)
  }

  // useEffect(() => {
  //   fetchItems()
  // }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
