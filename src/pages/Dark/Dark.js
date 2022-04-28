import Song from "../../components/DarkSong"
import dfLogo from '../../images/Dragonforce Logo.webp'
import minami from '../../images/Minami.png'
import sevenSpiresLogo from '../../images/Seven-Spires-Logo.jpg'
import { useState } from 'react';
import Hollowness from '../../song files/Hollowness.mp3'
import TTFAF from '../../song files/Through the Fire and Flames.mp3'
import Heroes from '../../song files/Heroes of our Time.mp3'
import CryThunder from '../../song files/Cry Thunder.mp3'
import Freheit from '../../song files/Freheit.mp3'
import CryingForRain from '../../song files/Crying For Rain.mp3'
import Ghost from '../../song files/Ghost Of Yesterday.mp3'
import Gods from '../../song files/Gods of Debauchery.mp3'
import Lightbringer from '../../song files/Lightbringer.mp3'

let dateFilter = ""
let titleFilter = ""
let artistFilter = ""
let favorites = []
let playingAudio = undefined

function Dark() {
    function filterDate(e) {
        dateFilter = e.target.value
        setFilteredSongs(displaySongs())
    }

    function filterTitle(e) {
        titleFilter = e.target.value
        setFilteredSongs(displaySongs())
    }

    function filterArtist(e) {
        artistFilter = e.target.value
        setFilteredSongs(displaySongs())
    }

    const songOptions = [
        {title: "Through the Fire and Flames", artist: "Dragonforce", image: dfLogo, year: 2005, song: TTFAF},
        {title: "Heroes of Our Time", artist: "Dragonforce", image: dfLogo, year: 2008, song: Heroes},
        {title: "Cry Thunder", artist: "Dragonforce", image: dfLogo, year: 2012, song: CryThunder},
        {title: "Freheit", artist: "Minami", image: minami, year: 2021, song: Freheit},
        {title: "Crying for Rain", artist: "Minami", image: minami, year: 2019, song: CryingForRain},
        {title: "Hollowness", artist: "Minami", image: minami, year: 2019, song: Hollowness},
        {title: "Ghost of Yesterday", artist: "Seven Spires", image: sevenSpiresLogo, year: 2021, song: Ghost},
        {title: "Gods of Debauchery", artist: "Seven Spires", image: sevenSpiresLogo, year: 2021, song: Gods},
        {title: "Lightbringer", artist: "Seven Spires", image: sevenSpiresLogo, year: 2021, song: Lightbringer}
    ]

    function displaySongs() {
        let componentList = []

        for (let i = 0; i < songOptions.length; i++) {
            if (
                (dateFilter === "" || songOptions[i]["year"] === parseInt(dateFilter))
                && songOptions[i]["title"].toLowerCase().includes(titleFilter.toLowerCase())
                && songOptions[i]["artist"].toLowerCase().includes(artistFilter.toLowerCase())) {
                componentList.push(<Song title={songOptions[i]["title"]} artist={songOptions[i]["artist"]} image={songOptions[i]["image"]} year={songOptions[i]["year"]} song={songOptions[i]["song"]} addFavHandler={addToFavorites} playSongHandler={playSong} />)
            }
        }

        return componentList
    }

    function playSong(songTitle, artist, songAudio) {
        setNowPlayingSong("Now Playing: " + songTitle + " | Artist: " + artist)

        // First check if anything is playing, stop that audio
        if (playingAudio !== undefined) {
            playingAudio.pause()
        }

        // Play new audio
        let audio = new Audio(songAudio)
        audio.play()
        audio.onended=function() {
            setNowPlayingSong("No Song Playing")
        }
        playingAudio = audio
    }

    function pauseSong() {
        if (playingAudio !== undefined) {
            setNowPlayingSong("No Song Playing")
            playingAudio.pause()
        }
    }

    function addToFavorites(newValue) {
        if (!favorites.includes(newValue)) {
            favorites.push(newValue)

            let ul = document.getElementById('favorites-display')
            let li = document.createElement('li')
            li.appendChild(document.createTextNode(favorites[favorites.length-1]))
            ul.appendChild(li)
        }
    }
    
    function showFavorites() {
        let favoritesDisplayList = document.getElementById('favorites-div')

        if (favoritesDisplayList.style.display === "none") {
            favoritesDisplayList.style.display = "block";
        }
        else
        {
            favoritesDisplayList.style.display = "none";
        }
    }

    const [nowPlayingSong, setNowPlayingSong] = useState("No Song Playing");
    const [filteredSongs, setFilteredSongs] = useState(displaySongs());

    return (
        <div className="centered">
            <h1 style={{display: "inline", paddingRight: "10px"}}>Cob's Soul Music</h1>
            <button style={{fontSize: "16px"}} onClick={showFavorites}>Toggle Favorites Display</button>

            <div id="favorites-div">
                <h2>Favorite Songs</h2>
                <ul id="favorites-display"></ul>
            </div>

            <div id="filters-div">
                <label>
                    Release Year:
                    <input onChange={filterDate}></input>
                </label>

                <label>
                    Title:
                    <input onChange={filterTitle}></input>
                </label>

                <label>
                    Artist:
                    <input onChange={filterArtist}></input>
                </label>
            </div>

            <div id="songs-listing">
                {filteredSongs}
            </div>

            <div id='placeholder'></div>
            <footer id="now-playing-bar">
                {nowPlayingSong}
                <button id="pause-now-playing" onClick={pauseSong}>Stop Playing</button>
            </footer>
        </div>
    )
}

export default Dark