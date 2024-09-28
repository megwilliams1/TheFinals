// import Header from "./components/Header";

import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GetProductsList from "./components/ProductList";



function App() {

  return(
    <GetProductsList/>

    // <BrowserRouter>
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element= {<Home></Home>} />
    //     <Route path="/ products" element= {<Products/>} />
    //     <Route path="/ products/:id "element= {<productDetails/>} />
    //     <Route path="/about" element= {<About />} />
    //   </Routes>
    // </Router>
    // </BrowserRouter>
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

