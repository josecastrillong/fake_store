import './App.css';
import { Routes, Route } from 'react-router-dom';
import CardContainer from './components/CardsContainer/CardsContainer';
import Card from './components/ProductCard/Card';
import ProductReview from './components/ProductReview/ProductReview';

function App() {
  return (

    <Routes>
      <Route path="/" element={<CardContainer />} />
      <Route path="card" element={<Card />} />
      <Route path="/products/:id" element={<ProductReview />} />
    </Routes>
  );
}

export default App;
