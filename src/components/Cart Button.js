import './Cart Button.css';
import { Link } from "react-router-dom"

export default function CartButton(props) {
    const cartItems = props.items

    return (
        <Link to="/lightcart" state={cartItems}>
            <button className='cart-button'>Cart</button>
        </Link>
    )
}