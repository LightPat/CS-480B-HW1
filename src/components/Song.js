import './Song.css'

export default function Song(props) {
    function playOnClick() {
        alert("Playing song")
    }

    function downloadButtonClick() {
        alert("Downloading song")
    }

    return (
        <div id='outline'>
            <p id='title'>{props.title}</p>
            <p id='artist'>{props.artist}</p>
            <img id='artist-image' src={props.image}></img>
            <button id='play-button' onClick={playOnClick}>Play</button>
            <button id='download-button' onClick={downloadButtonClick}>Download</button>
        </div>
    )
}