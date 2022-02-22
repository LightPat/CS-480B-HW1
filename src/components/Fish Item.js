import './Fish Item.css';
import { Link } from "react-router-dom"
import CartButton from './Cart Button';
import Cart from '../pages/Cart';

export default function FishItem(props) {
    function pushToCart() {
        props.items.push([props.title, props.description, props.price])
        console.log(props.items)
    }

    return (
        <div id='item-div'>
            <p id='title'>{ props.title }</p>
            <p id='description'>{ props.description }</p>
            <img src={ props.image } alt="Fish" id='image'></img>
            <p id='price'>${ props.price }/lb</p>
            <button id='add-button' onClick={ pushToCart }>Add to Cart</button>
        </div>
    )
}