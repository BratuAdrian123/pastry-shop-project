import { OrderItemsContext } from '../App';
import { useContext, useEffect, useState } from 'react';

function Account() {
  const orderItemsC = useContext(OrderItemsContext);
  console.log(orderItemsC);

  const countdownTotalAmount = Number(orderItemsC.orderItems.deliveryTime) * 60;

  const [seconds, setSeconds] = useState(countdownTotalAmount);

  const displaySeconds = seconds % 60;
  const displayMinutes = Math.floor(seconds / 60);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (seconds > 0) {
        setSeconds((prevState) => prevState - 1);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [seconds]);

  return (
    <div className="text-center">
      <h1 className="m-5 text-4xl">Hello Acc-name</h1>

      <div className="ml-auto mr-auto w-[80%] account-details-container mb-5">
        <h2 className="mb-4 text-2xl">Active Deliverys</h2>
        <div className="flex justify-between items-center mb-4 ">
          <div className="flex delivery-stats ml-auto mr-auto">
            <div className="p-3">
              <p>Name</p>

              <p>
                {displaySeconds === 0 ? (
                  ''
                ) : (
                  <div>
                    {orderItemsC.orderItems.name === undefined
                      ? orderItemsC.orderItems.name
                      : orderItemsC.orderItems.name.map((product) => (
                          <p>{product}</p>
                        ))}
                  </div>
                )}
              </p>
            </div>
            <div className="p-3">
              <p>Price</p>
              <p>
                {displaySeconds === 0 ? (
                  ''
                ) : (
                  <div>
                    {orderItemsC.orderItems.price === undefined
                      ? orderItemsC.orderItems.price
                      : orderItemsC.orderItems.price.map((product) => (
                          <p>{product}</p>
                        ))}
                  </div>
                )}
              </p>
            </div>
            <div className="p-3">
              <p>Quantity</p>
              <p>
                {displaySeconds === 0 ? (
                  ''
                ) : (
                  <div>
                    {orderItemsC.orderItems.quantity === undefined
                      ? orderItemsC.orderItems.quantity
                      : orderItemsC.orderItems.quantity.map((product) => (
                          <p>{product}</p>
                        ))}
                  </div>
                )}
              </p>
            </div>
            <div className="p-3">
              <p>Total Price</p>
              <p>
                {displaySeconds === 0 ? (
                  ''
                ) : (
                  <div>
                    {orderItemsC.orderItems.totalPrice
                      ? orderItemsC.orderItems.totalPrice + '$'
                      : ''}
                  </div>
                )}
              </p>
            </div>
            <div className="p-3">
              <p>Delivery status</p>
              <p>
                {orderItemsC.orderItems.name ? (
                  <div>
                    {displaySeconds === 0 ? (
                      'No active order'
                    ) : (
                      <div>
                        Waiting: {displayMinutes}:
                        {displaySeconds < 10
                          ? `0${displaySeconds}`
                          : displaySeconds}
                      </div>
                    )}
                  </div>
                ) : (
                  'No order active'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" ml-auto mb-[37%] mr-auto w-[80%] account-details-container ">
        <h2 className="mb-4 text-2xl">History</h2>
        <div className=" mb-8 history-content mr-10 ml-10">
          {orderItemsC.orderItems.name ? (
            <div className="flex">
              <p className="ml-auto mr-auto">
                Products:{' '}
                {orderItemsC.orderItems.name === undefined
                  ? orderItemsC.orderItems.name
                  : orderItemsC.orderItems.name.map((product) => (
                      <p>{product}</p>
                    ))}
              </p>
              <p className="ml-auto mr-auto">
                Price:{' '}
                {orderItemsC.orderItems.price === undefined
                  ? orderItemsC.orderItems.price
                  : orderItemsC.orderItems.price.map((product) => (
                      <p>{product}</p>
                    ))}
              </p>
              <div className="">
                <p className="ml-auto mr-auto mb-4">
                  Total Price:{' '}
                  {orderItemsC.orderItems.totalPrice
                    ? orderItemsC.orderItems.totalPrice + '$'
                    : ''}
                </p>
                <p className="ml-auto mr-auto">
                  Delivery Status:{' '}
                  {displaySeconds === 0 ? 'Delivered' : 'In Progress'}
                </p>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default Account;
