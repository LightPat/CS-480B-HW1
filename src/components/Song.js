import './Song.css'
import { Link } from 'react-router-dom'

export default function Song(props) {
    function handlePlayButton() {
        props.playSongHandler(props.title, props.artist, props.song)
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
            <Link to={props.title + ".mp3"} download={props.title + ".mp3"} target="_blank"><button id='download-button'>Download</button></Link>
            <button id='add-to-favorites-button' onClick={handleFavButton}>Add To Favorites</button>
        </div>
    )
}