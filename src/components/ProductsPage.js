import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div>
        <SearchBar />
        <h1>IronStore</h1>
        <ProductTable products={products}/>
      </div>    
  )
}

export default ProductsPage