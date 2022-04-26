import { Link, useLocation, useNavigate } from "react-router-dom"
import FavoritesModal from "../../components/FavoritesModal"
import Song from "../../components/Song"
import dfLogo from '../../images/Dragonforce Logo.webp'

function Light() {
    return (
        <div className="centered">
            <h1>Cob's Soul Music</h1>

            <div>Favoriates</div>

            <div>Filters</div>

            <div>Songs</div>

            <div>Now Playing</div>

            <Song title="Through the Fire and Flames" artist="Dragonforce" image={dfLogo}/>
        </div>
    )
}

export default Light