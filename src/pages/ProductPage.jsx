import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProdList } from '../App';

function ProductPage() {
  const [item, setItem] = useState();
  const listOfProducts = useContext(ProdList);
  const param = useParams();

  useEffect(() => {
    setItem(() => listOfProducts.find((p) => p.id === param.id));
  }, []);

  return (
    <div>
      {item && (
        <div>
          <h1>Hello</h1>
          <p>{param.id}</p>
          <p>{item.name}</p>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
