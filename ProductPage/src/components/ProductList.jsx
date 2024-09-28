import { getProducts } from '../utils/api';
import { useState, useEffect } from 'react';

function GetProductsList() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        
        getProducts()
          .then((data) => {
           
            setProducts(data);
            console.log(data);
          })
          .catch((error) => {
            
            console.error(error);
          });
      }, []); 
    
      return (
        <div>

            <h1>Product List</h1>
         
          {products.map((item) => {
            
            return <p key={item.id}>{item.title}</p>;
          })}
        </div>
      );
    }

    export default GetProductsList; 
    
    
