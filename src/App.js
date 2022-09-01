import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';



function App() {

const [cards, setCards] = useState("")

async function getCards() {
const res = await fetch('http://localhost:3000/api')
const cardData = await res.json()
setCards(cardData)
}

useEffect(() => {
getCards();
}, []);

console.log(cards)

return (
  <main >
  <h1>The Engineering org</h1>
  <h2>Inventory Items</h2>
  {cards.map((item, i) =>{
    return( 
      <Item key={i} title={item.title} /> 
    )
  })}
    {/* <div className = "card">
      <div className = "card-header">This Could be the Name of the item</div>
      <div className = "card-body">Maybe a description of the item</div>
        <div className = "card-footer">
          <button className = "btn">one or 2 buttons?</button>
          <button className = "btn2">one or 2 buttons?</button>
        </div>
    </div> */}

  </main>
);
}

export default App;
