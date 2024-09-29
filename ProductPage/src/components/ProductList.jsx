import { useState, useEffect } from "react";
import { getProducts } from "../utils/api";
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import '../styles.css'
import Header from "../components/header";
import Footer from "../components/footer";



function GetProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
      }, []);
  return (
    <>
    
    <div> 
        {/* <Header /> */}
     <h1>Product Items</h1>   
    </div>
      <div className="product-container">
      {products.map((item) => {
        return (
            <Card key={item.id} className="cards" onClick={() =>{navigate("details/" + item.id)}}
            >
            <CardActionArea>
              <CardMedia className="product-image"
                component="img"
                image={item.image}
                alt="item images"
              />
              <CardContent>
                <Typography className="title">
                  <b>{item.title}</b>
                </Typography>
                <Typography className="description">
                  {item.description}
                </Typography>
              </CardContent>
            <CardContent>
                <Typography className="price">
                    <b>Price: $
                    {item.price}</b>
                </Typography>
            </CardContent>
            <CardContent>
              <Typography className="content">
                Rating: 
                    {item.rating.rate} *
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>
          
        )
        
      })}
    </div>
    <>
    {/* <Footer /> */}
    </>
    </>
  );
}

export default GetProductList;
