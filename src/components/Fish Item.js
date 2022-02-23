import './Fish Item.css';

export default function FishItem(props) {
    function pushToCart() {
        props.items.push([props.title, props.description, props.price])
    }

    return (
        <div id='item-div'>
            <p id='title'>{ props.title }</p>
            <p id='description'>{ props.description }</p>
            <img src={ props.image } alt="Fish" id='image'></img>
            <p id='price'>${ props.price }</p>
            <button id='add-button' onClick={ pushToCart }>Add to Cart</button>
        </div>
    )
}