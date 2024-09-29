import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../utils/api";
import "../styles.css";

const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState({});
     const { id } = useParams();

  useEffect(() => {
    getProductDetail(id).then((data) => {
      console.log(data);
      setProductDetails(data);
    });
  }, []);

  return (
    <div>
      <h1>{productDetails.title}</h1>
      { <img src={productDetails.image} alt="product-image" width={200} />}
      <h2>
        <p>{productDetails.description}</p>
      </h2>
      
    </div>
  );
};

export default ProductDetails;