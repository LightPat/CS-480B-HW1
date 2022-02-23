import './LightCart.css'
import CartItem from '../../components/Cart Item'
import { Link } from "react-router-dom"
import { useLocation } from "react-router";
import ShoppingCartIcon from "../../images/Shopping Cart.png"

function Cart(props) {
    let data = useLocation()
    let cartItems = data.state

    function check() {
        if (document.getElementById("pp-checkbox").checked
            && document.getElementById("soul-checkbox").checked
            && document.getElementById("price-checkbox").checked
            && document.getElementById("cancel-checkbox").checked) {
          window.location.href = "/end"
        }
        else {
          alert("Check all 4 boxes to agree to your purchase")
        }
    }

    function calculatePreTotal() {
        if (cartItems.length == 0) {
            return 0
        }

        let total = 0

        for (let i = 0; i < cartItems.length; i++) {
            total += parseFloat(cartItems[0][2])
        }

        return total
    }

    function calculateTax() {
        if (cartItems.length == 0) {
            return 0
        }

        let total = 0

        for (let i = 0; i < cartItems.length; i++) {
            total += parseFloat(cartItems[0][2])
        }

        let tax = total/8
        tax = Math.round(tax * 100) / 100

        return tax
    }

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

        return total
    }

    return (
        <div>
            <div id='light-left-column'>
                <img src={ShoppingCartIcon} alt='icon' id='light-icon'/>
                <ol id='light-cart-list'>
                    {cartItems.map((item) => (<CartItem item={item}/>))}
                </ol>
            </div>
            <div id='light-right-column'>
                <h2>Total Cost Before Shipping and Taxes: ${ calculatePreTotal() }</h2>
                <h3>Shipping: $5.00</h3>
                <h3>Tax: ${ calculateTax() }</h3>
                <h1>TOTAL COST: ${ calculateTotal() }</h1>

                <br />

                <input type="checkbox" id="light-price-checkbox" className='light-checkbox'></input>
                <label for="price-checkbox">Do you agree to be charged the total above?</label>
            </div>
            <div id='light-checkout'>
                <input type="checkbox" id="light-pp-checkbox" className='light-checkbox'></input>
                <label for="pp-checkbox">Do you agree to all terms and conditions? </label>
                <Link to="/privacypolicy" className="light-terms-link" target='_blank'>Click to see terms</Link>
                
                <br /><br />
                
                <input type="checkbox" id="light-soul-checkbox" className='light-checkbox'></input>
                <label for="soul-checkbox">Do you understand that you are forfeiting your soul?</label>
                
                <br /><br />

                <input type="checkbox" id="light-cancel-checkbox" className='light-checkbox'></input>
                <label for="cancel-checkbox">Do you understand that in order to cancel forfeiting your soul you must provide a notarized copy of your name, social security number, order number, and exact second of birth?</label>

                <br />

                <button id='light-checkout-button' onClick={check}>Submit Order</button>
            </div>
        </div>
    )
}

export default Cart