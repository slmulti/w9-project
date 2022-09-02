import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

function Item({cards}) {
  const [current, setCurrent] = useState();
  

  return (
    <>
    {!current ? <Grid container direction="row"
            justifyContent="center"
            alignItems="center"
            wrap="wrap"
          > {cards.map((item, i) => {
      return (
        <div key={i}>
          <Card sx={{ maxWidth: 345, m: 2 }}>
          <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt="green iguana"
        />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            { item.title }
            </Typography>
            <Typography variant="body2" color="grey">
            £{ item.price }
            </Typography>
          </CardContent>
          </CardActionArea>
          <button onClick={() => setCurrent(cards[i])}>Find out more</button>
          </Card>
        </div>
      );
    })} </Grid>
    :
    <>
        <Grid  container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md:3, gap: 2}}>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345, m: 2 }}>
          <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={current.image}
            alt="green iguana"
        />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            { current.title }
            </Typography>
            <Typography variant="body2" color="grey">
            £{ current.price }
            </Typography>
            <Typography variant="body2" color="grey">
            { current.description }
            </Typography>
          </CardContent>
          </CardActionArea>
          <button onClick={() => setCurrent()}>Go back</button>
          </Card>
        </Grid>
        </Grid>
    </>}
    </>
  )
}

export default Item;