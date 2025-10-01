import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items) || []; // ensure array
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="max-w-4xl mx-auto my-8 p-6 bg-gray-50 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>
            <div className="flex flex-col items-center">
                <button 
                    className="px-6 py-2 mb-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                {cartItems?.length === 0 && (
                    <h2 className="text-lg text-gray-600 mb-4">
                        Cart is empty. Add items to your cart!
                    </h2>
                )}
                <div className="w-full">
                    <ItemList items={cartItems} />
                </div>
            </div>
        </div>
    );
};

export default Cart;
