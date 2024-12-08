import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProdList } from '../App';
import { CartItemsContext } from '../App';

function ProductPage() {
  const [item, setItem] = useState();
  const listOfProducts = useContext(ProdList);
  const cartItemsC = useContext(CartItemsContext);
  const param = useParams();

  useEffect(() => {
    setItem(() => listOfProducts.find((p) => p.id === param.id));
  }, []);

  let [count, setCount] = useState(1);

  function handleIncrementClick(e) {
    e.preventDefault();
    setCount((prev) => prev + 1);
  }

  function handleDecrementClick(e) {
    e.preventDefault();
    if (count === 0) {
      setCount(0);
    } else {
      setCount((prev) => prev - 1);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (count > 0) {
      cartItemsC.name.push(item.name);
      cartItemsC.price.push(
        count === 1 ? item.price : (item.price * count).toFixed(2)
      );
      cartItemsC.quantity.push(count);
      cartItemsC.submited = true;
    }

    console.log(
      `submited ${cartItemsC.submited} Name: ${cartItemsC.name} Price: ${cartItemsC.price}`
    );

    console.log(cartItemsC);
    return cartItemsC;
  }

  return (
    <div>
      {item && (
        <div className="text-center text-2xl">
          <h1 className="text-4xl p-4">{item.name}</h1>
          <img
            src={item.img}
            className="w-[300px] h-[300px] ml-auto mr-auto product-page-img"
          />
          <p className="p-4">{item.description}</p>
          <div className="flex justify-center ">
            <p className="p-3">
              Price:{' '}
              {count === 1 ? item.price : (item.price * count).toFixed(2)}$
            </p>
            <p className="p-3 border border-count">{count}</p>
            <button
              className="p-3 border border-count"
              onClick={handleIncrementClick}
            >
              +
            </button>
            <button
              className="p-3 border border-count"
              onClick={handleDecrementClick}
            >
              -
            </button>
          </div>
          <button
            className="mt-2 mb-2 p-2 border border-button"
            type="submit"
            onClick={handleSubmit}
          >
            Add to Cart
          </button>
          <div>
            <h2 className="text-3xl nutrition-heading">
              Nutrition per serving
            </h2>
            <table className="ml-auto mr-auto product-page-table">
              <tr className="border">
                <td className="border p-3">
                  <strong>
                    Fatty Calories: {item.nutrition.fattyCalories}
                  </strong>
                </td>
                <td className="p-3">
                  <strong>
                    Saturated Fatty Acids: {item.nutrition.saturatedFatAcids}
                  </strong>
                </td>
              </tr>
              <tr className="border">
                <td className="border p-3">
                  <strong>Carbohydrate: {item.nutrition.carbohydrates}</strong>
                </td>
                <td className="p-3">
                  <strong>Sugars: {item.nutrition.sugars}</strong>
                </td>
              </tr>
              <tr className="border">
                <td className="border p-3">
                  <strong>Protein: {item.nutrition.proteins}</strong>
                </td>
                <td className="p-3">
                  <strong>Salts: {item.nutrition.salts}</strong>
                </td>
              </tr>
            </table>
          </div>
          <div className="flex p-2 items-center justify-center text-2xl product-page-allg">
            Allergens:{' '}
            {item.allergens.map((allg, i) => {
              for (let i = 0; i <= item.allergens.length; i++) {
                return (
                  <p className="p-1" key={i}>
                    {allg}
                  </p>
                );
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
