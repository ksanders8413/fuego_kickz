import { useState, useEffect } from "react";
import { products } from "../products";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../store/cart";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetail);
  }, [productId]);

  console.log(detail);

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };

  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5">
      <img src={detail.image} alt="" className="w-12" />
      <h3>{detail.name}</h3>
      <p>{detail.price * quantity}</p>
      <div className="w-20 flex justify-between gap-2">
        <button
          onClick={handleMinusQuantity}
          className="bg-gray-200 rounded-full w-6 h-6"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={handlePlusQuantity}
          className="bg-gray-200 rounded-full w-6 h-6"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;