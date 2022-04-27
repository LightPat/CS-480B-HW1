import FavoritesModal from "../../components/FavoritesModal"
import Song from "../../components/Song"
import dfLogo from '../../images/Dragonforce Logo.webp'
import minami from '../../images/Minami.png'
import sevenSpiresLogo from '../../images/Seven-Spires-Logo.jpg'
import { useState } from 'react';

function Light() {
    const [favorites, setFavorites] = useState([]);
    const [nowPlayingSong, setNowPlayingSong] = useState("No Song Playing");

    const s = () => {
        console.log(favorites)
        setFavorites(favorites + 1)
    }

    return (
        <div className="centered">
            <h1 style={{display: "inline", paddingRight: "10px"}}>Cob's Soul Music</h1>
            <FavoritesModal favorites={favorites}/>
            <button onClick={s}>Test Button</button>

            <div id="filters-div">
                <label>
                    Release Year:
                    <input type="text"></input>
                </label>

                <label>
                    Title:
                    <input type="text"></input>
                </label>

                <label>
                    Artist:
                    <input type="text"></input>
                </label>
            </div>

            <div id="songs-listing">
                <Song title="Through the Fire and Flames" artist="Dragonforce" image={dfLogo} year={2005}/>
                <Song title="Heroes of Our Time" artist="Dragonforce" image={dfLogo} year={2008}/>
                <Song title="Cry Thunder" artist="Dragonforce" image={dfLogo} year={2012}/>
                <Song title="Freheit" artist="Minami" image={minami} year={2021}/>
                <Song title="Crying for Rain" artist="Minami" image={minami} year={2019}/>
                <Song title="Hollowness" artist="Minami" image={minami} year={2019}/>
                <Song title="Ghost of Yesterday" artist="Seven Spires" image={sevenSpiresLogo} year={2021}/>
                <Song title="Gods of Debauchery" artist="Seven Spires" image={sevenSpiresLogo} year={2021}/>
                <Song title="Lightbringer" artist="Seven Spires" image={sevenSpiresLogo} year={2021}/>
            </div>

            <div id='placeholder'></div>
            <footer id="now-playing-bar">{nowPlayingSong}</footer>
        </div>
    )
}

export default Light