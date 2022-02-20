import './Fish Item.css';
import { Link } from "react-router-dom"

export default function FishItem(props) {
    return (
        <div id='item-div'>
            <p id='title'>{ props.title }</p>
            <p id='description'>{ props.description }</p>
            <img src={ props.image } alt="Fish"></img>
            <p id='price'>${ props.price }/lb</p>
            <button id='add-button'>Add To Cart</button>
        </div>
    )
}