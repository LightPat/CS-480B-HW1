import './DarkCart.css'
import CartItem from '../../components/Cart Item'
import { Link } from "react-router-dom"
import { useLocation } from "react-router";
import ShoppingCartIcon from "../../images/Shopping Cart.png"

function Cart(props) {
    let data = useLocation()
    let cartItems = data.state

    function calculateTotal() {
        if (cartItems.length == 0) {
            return 0
        }

        let total = 0

        for (let i = 0; i < cartItems.length; i++) {
            total += parseFloat(cartItems[0][2])
        }

        // Add shipping and taxes
        total += 5.00
        total += total/8
        total = Math.round(total * 100) / 100

        return total * 2
    }

    function check() {
        if (document.getElementById("pp-checkbox").checked) {
          window.location.href = "/end"
        }
        else {
          alert("Check all 4 boxes to agree to your purchase")
        }
    }

    return (
        <div>
            <div id='checkout'>
                <button id='checkout-button' onClick={check}>Submit Order</button>
                <br />
                <input type="checkbox" id="pp-checkbox" checked></input>
                <label for="pp-checkbox">Do you agree to all terms and conditions? </label>
                <Link to="/privacypolicy" className="terms-link" target='_blank'>Click to see terms</Link>
            </div>
            <br /><br /><br />
            <div id='left-column'>
                <img src={ShoppingCartIcon} alt='icon' id='icon'/>
                <ol id='cart-list'>
                    {cartItems.map((item) => (<CartItem item={item}/>))}
                </ol>
            </div>
            <div id='right-column'>
                <h1>TOTAL COST: ${ calculateTotal() }</h1>
            </div>
        </div>
    )
}

export default Cart