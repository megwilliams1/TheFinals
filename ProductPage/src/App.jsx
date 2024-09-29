import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import GetProductList from "./components/ProductList";
// import ProductCard from "./components/ProductCard"
import ProductDetails from "./components/ProductDetail";
import "./App.css";
import "./styles.css";




function App() {

  return(
    <BrowserRouter>
    <Routes>
      <Route element={<GetProductList />} path="/" />
      <Route element={<ProductDetails />} path="details/:id" />
      </Routes>
      </BrowserRouter>
  
  );
}


// function App() {
  
//   return(
//     <>
//         <Header />
//         <ProductCard />
//         <Footer />
//     </>
//   );
// }

export default App

