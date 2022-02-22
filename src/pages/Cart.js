import './Cart.css'
import { Link } from "react-router-dom"
import { useLocation } from "react-router";

function Cart(props) {
    let data = useLocation()
    let cartItems = data.state

    return (
        <div>
            {/* {props.items.map((item, index) => (
            <Item key={index} item={item} />
            ))} */}

            { cartItems }
            <br />
            <Link to="/checkout" id='checkout-link'><h1>Checkout</h1></Link>
        </div>
    )
}

export default Cart