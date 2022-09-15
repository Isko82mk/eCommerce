import axios from 'axios';
import { useState, useEffect } from 'react';
import { Product } from '../../app/models/interfaces/product';
import ProductList from './ProductList';

const Catalog = () => {
  const productsUrl = 'http://localhost:5000/api/products/products';

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get(productsUrl).then((x) => setProducts(x.data));
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Catalog;
