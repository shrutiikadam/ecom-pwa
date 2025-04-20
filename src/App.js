import React from 'react';
import {
  AppBar, Toolbar, Typography, Container, Grid, Card,
  CardContent, CardMedia, CardActions, Button
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const products = [
  {
    id: 1,
    name: 'Smartphone',
    price: '₹15,999',
    image: 'https://source.unsplash.com/random/300x200?mobile',
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    price: '₹2,499',
    image: 'https://source.unsplash.com/random/300x200?headphones',
  },
  {
    id: 3,
    name: 'Smartwatch',
    price: '₹3,299',
    image: 'https://source.unsplash.com/random/300x200?watch',
  },
];

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <ShoppingCartIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SFIT E-Commerce Store
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Add to Cart</Button>
                  <Button size="small">View</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
