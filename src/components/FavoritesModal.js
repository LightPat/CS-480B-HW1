import './FavoritesModal.css'

export default function FavoritesModal(props) {
    function showFavorites() {
        console.log(props.favorites)
        alert('Favorites')
    }

    return (
        <div id='favorites-parent'>
            <button id='favorites-button' onClick={showFavorites}>Favorites</button>
            <p>{props.favorites}</p>
        </div>
    )
}