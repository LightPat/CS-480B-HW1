import './Cart Item.css'

export default function CartItem(props) {
    return (
        <li>
            <span>{props.item[0]}</span>
            <p className='cart-p'>{props.item[1]}</p>
            <p className='cart-p' id='price-list'>${props.item[2]}</p>
        </li>
    )
}