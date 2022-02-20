import './Cart.css'
import { Link } from "react-router-dom"

function Cart() {
    return (
        <div>
            <Link to="/checkout"><h1>Checkout</h1></Link>
        </div>
    )
}

export default Cart