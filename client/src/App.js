import './App.css';
import { useState, useEffect } from 'react'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

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
      <div className='card'> {
        cards.map((card) => {
          return <>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={card.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" key={card.id}>
          { card.title }
          </Typography>
          <Typography variant="body2" color="grey" key={card.id}>
          { card.description }
          </Typography>
          <Typography variant="body2" color="grey" key={card.id}>
          £{ card.price }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
          </>
        })}
      </div>
    </div>
  );
}

export default App;
