
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from './containers/Header';
import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';

function App() {
  return (

    <div className="App">


       <Header />

    <Router>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route  path="/product/:productId" element={<ProductDetail />} />
        <Route path="/productComponent" element={<ProductComponent />} />
      </Routes>
    </Router>


    </div>
  );
}

export default App;
