import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);


  const dispath = useDispatch();
  function clearCartHandler() {
    dispath(clearCart());
  }
  return (
    <div className="text-center m-6 p-6">
      <h1 className="font-bold">Welcome to the cart page</h1>
      <button
        onClick={() => {
          clearCartHandler();
        }}
        className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer"
      >
        Clear Cart
      </button>
      <div>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
