import './FavoritesModal.css'

export default function FavoritesModal(props) {
    function showFavorites() {
        alert(props.favorites)
    }

    return (
        <div id='favorites-parent'>
            <button id='favorites-button' onClick={showFavorites}>Favorites</button>
            <p>{props.favorites}</p>
        </div>
    )
}