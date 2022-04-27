import { Link, useLocation, useNavigate } from "react-router-dom"
import FavoritesModal from "../../components/FavoritesModal"
import Song from "../../components/Song"
import dfLogo from '../../images/Dragonforce Logo.webp'
import minami from '../../images/Minami.png'
import sevenSpiresLogo from '../../images/Seven-Spires-Logo.jpg'
import { useState } from 'react';

function Light() {
    const [favorites, setFavorites] = useState([]);

    const s = () => {
        console.log(favorites)
        setFavorites(favorites + 1)
    }

    return (
        <div className="centered">
            <h1>Cob's Soul Music</h1>
            <FavoritesModal favorites={favorites}/>
            <button onClick={s}>Test Button</button>

            <div>Filters</div>

            <div id="songs-listing">
                <Song title="Through the Fire and Flames" artist="Dragonforce" image={dfLogo}/>
                <Song title="Heroes of Our Time" artist="Dragonforce" image={dfLogo}/>
                <Song title="Cry Thunder" artist="Dragonforce" image={dfLogo}/>
                <Song title="Freheit" artist="Minami" image={minami}/>
                <Song title="Crying for Rain" artist="Minami" image={minami}/>
                <Song title="Hollowness" artist="Minami" image={minami}/>
                <Song title="Ghost of Yesterday" artist="Seven Spires" image={sevenSpiresLogo}/>
                <Song title="Gods of Debauchery" artist="Seven Spires" image={sevenSpiresLogo}/>
                <Song title="Lightbringer" artist="Seven Spires" image={sevenSpiresLogo}/>
            </div>

            <div>Now Playing</div>
        </div>
    )
}

export default Light