import FavoritesModal from "../../components/FavoritesModal"
import Song from "../../components/Song"
import dfLogo from '../../images/Dragonforce Logo.webp'
import minami from '../../images/Minami.png'
import sevenSpiresLogo from '../../images/Seven-Spires-Logo.jpg'
import { useState } from 'react';

function Light() {
    const [favorites, setFavorites] = useState([]);
    const [nowPlayingSong, setNowPlayingSong] = useState("No Song Playing");

    let dateFilter = ""
    function filterDate(e) {
        dateFilter = e.target.value
        console.log(dateFilter)
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
            if (dateFilter == "") {
                componentList.push(<Song title={songOptions[i]["title"]} artist={songOptions[i]["artist"]} image={songOptions[i]["image"]} year={songOptions[i]["year"]} />)
            }
            else if (songOptions[i]["year"] == dateFilter) {
                componentList.push(<Song title={songOptions[i]["title"]} artist={songOptions[i]["artist"]} image={songOptions[i]["image"]} year={songOptions[i]["year"]} />)
            }
        }
        console.log(componentList)
        return componentList
    }

    const s = () => {
        console.log(favorites)
        setFavorites(favorites + 1)
    }

    const [filteredSongs, setFilteredSongs] = useState(displaySongs());

    return (
        <div className="centered">
            <h1 style={{display: "inline", paddingRight: "10px"}}>Cob's Soul Music</h1>
            <FavoritesModal favorites={favorites}/>
            <button onClick={s}>Test Button</button>

            <div id="filters-div">
                <label>
                    Release Year:
                    <input onChange={filterDate}></input>
                </label>

                <label>
                    Title:
                    <input></input>
                </label>

                <label>
                    Artist:
                    <input></input>
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