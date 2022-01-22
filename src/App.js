
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from './components/Header';
import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
import Dashboard from './containers/Dashboard';
import AllProduct from './containers/AllProduct';
import CreateProdut from './containers/CreateProduct';

function App() {
  return (

    <div className="App">

    <Router>
      <Routes>

  <Route path="/" element={<Dashboard />} />
        <Route path="/all-product" element={<AllProduct />} />
        <Route path="/create-product" element={<CreateProdut />} />
        <Route path="/store" element={<ProductListing />} />
        <Route  path="/product/:productId" element={<ProductDetail />} />
        <Route path="/productComponent" element={<ProductComponent />} />
      </Routes>
    </Router>


    </div>
  );
}

export default App;
