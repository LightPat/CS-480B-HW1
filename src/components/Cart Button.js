import './Cart Button.css';
import { Link } from "react-router-dom"

export default function CartButton() {
    return (
        <Link to="/cart" className="terms-link">
            <button className='cart-button'>Cart</button>
        </Link>
    )
}