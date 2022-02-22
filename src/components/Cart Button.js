import './Cart Button.css';
import { Link } from "react-router-dom"
import Cart from '../pages/Cart';

export default function CartButton(props) {
    const cartItems = props.items

    function debug() {
        console.log("DEBUGGING " + cartItems)
    }

    return (
        <Link to="/cart" state={cartItems}>
            <button className='cart-button' onClick={debug}>Cart</button>
        </Link>
    )
}