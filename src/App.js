
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from './containers/Header';
import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
import Dashboard from './containers/Dashboard';

function App() {
  return (

    <div className="App">

    <Router>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route  path="/product/:productId" element={<ProductDetail />} />
        <Route path="/productComponent" element={<ProductComponent />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>


    </div>
  );
}

export default App;
