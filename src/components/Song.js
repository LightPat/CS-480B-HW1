import './Song.css'

export default function Song(props) {
    function handlePlayButton() {
        console.log(props.currentSong)
        props.playSongHandler(props.title, props.artist, props.song)
    }

    function downloadButtonClick() {
        alert("Downloading song")
    }

    function handleFavButton() {
        props.addFavHandler(props.title)
    }

    return (
        <div id='song-parent'>
            <p id='title'>{props.title}</p>
            <p id='artist'>{props.artist}, {props.year}</p>
            <img id='artist-image' src={props.image} alt=""></img>
            <button id='play-button' onClick={handlePlayButton}>Play</button>
            <button id='download-button' onClick={downloadButtonClick}>Download</button>
            <button id='add-to-favorites-button' onClick={handleFavButton}>Add To Favorites</button>
        </div>
    )
}