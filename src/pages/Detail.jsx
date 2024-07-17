import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../products";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";

const Detail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.filter((product) => product.slug === slug);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  }, [slug]);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: detail.id,
        quantity: quantity,
      })
    );
  };
  return (
    <div>
      <h2 className="text-3xl text-center pb-20">Product Details</h2>
      <div className="grid grid-cols-2 gap-5 mt-5 ">
        <div className="">
          <img src={detail.image} alt="" className="w-full h-full" />
        </div>

        <div className="flex flex-col gap-5 items-center mr-6">
          <h1 className="text-4xl uppercase font-bold">{detail.name}</h1>
          <p className="font-bold text-3xl">${detail.price}</p>
          <div className="flex gap-5">
            <div className="flex gap-2 justify-center items-center">
              <button
                onClick={handleMinusQuantity}
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
              >
                -
              </button>
              <span className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">
                {quantity}
              </span>
              <button
                onClick={handlePlusQuantity}
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
              >
                +
              </button>
            </div>
            <button
              className="bg-yellow-500 rounded-md p-2"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
          <p>{detail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
