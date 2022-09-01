import './App.css';
import { useState, useEffect } from 'react'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

function App() {

  const [cards, setCards] = useState([])
  const [isClicked, setIsClicked] = useState(false)

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
          <Grid  container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md:3, gap: 2}}>
            <Grid item xs={6}>
            <Card sx={{ maxWidth: 345, m: 2 }}>
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
          £{ card.price }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
      <Button size="small" color="primary" onClick={() => setIsClicked(!isClicked)}>
      {isClicked ? "Close Description" : "Show Description"}
      </Button>
        {isClicked && <Typography variant="body2" color="grey" key={card.id}>
        { card.description }
        </Typography>
        }
    </Card>
    </Grid>
    </Grid>
          </>
        })}
      </div>
    </div>
  );
}

export default App;
