import Song from "../../components/Song"
import dfLogo from '../../images/Dragonforce Logo.webp'
import minami from '../../images/Minami.png'
import sevenSpiresLogo from '../../images/Seven-Spires-Logo.jpg'
import { useState } from 'react';

let dateFilter = ""
let titleFilter = ""
let artistFilter = ""
let favorites = []

function Light() {
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
        {title: "Through the Fire and Flames", artist: "Dragonforce", image: dfLogo, year: 2005},
        {title: "Heroes of Our Time", artist: "Dragonforce", image: dfLogo, year: 2008},
        {title: "Cry Thunder", artist: "Dragonforce", image: dfLogo, year: 2012},
        {title: "Freheit", artist: "Minami", image: minami, year: 2021},
        {title: "Crying for Rain", artist: "Minami", image: minami, year: 2019},
        {title: "Hollowness", artist: "Minami", image: minami, year: 2019},
        {title: "Ghost of Yesterday", artist: "Seven Spires", image: sevenSpiresLogo, year: 2021},
        {title: "Gods of Debauchery", artist: "Seven Spires", image: sevenSpiresLogo, year: 2021},
        {title: "Lightbringer", artist: "Seven Spires", image: sevenSpiresLogo, year: 2021}
    ]

    function displaySongs() {
        let componentList = []

        for (let i = 0; i < songOptions.length; i++) {
            if (
                (dateFilter === "" || songOptions[i]["year"] === parseInt(dateFilter))
                && songOptions[i]["title"].toLowerCase().includes(titleFilter.toLowerCase())
                && songOptions[i]["artist"].toLowerCase().includes(artistFilter.toLowerCase())) {
                componentList.push(<Song title={songOptions[i]["title"]} artist={songOptions[i]["artist"]} image={songOptions[i]["image"]} year={songOptions[i]["year"]} addFavHandler={addToFavorites} playSongHandler={playSong}/>)
            }
        }

        return componentList
    }

    function playSong(newSong) {
        setNowPlayingSong(newSong)
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
        let favoritesDisplayList = document.getElementById('favorites-display')

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
            <ul id="favorites-display"></ul>

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
            <footer id="now-playing-bar">{nowPlayingSong}</footer>
        </div>
    )
}

export default Light