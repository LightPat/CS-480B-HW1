import './Light.css';
import { Link } from "react-router-dom"
import CartButton from "../components/Cart Button.js"
import FishItem from "../components/Fish Item.js"

import Sole from "../images/Sole.jpg"

function Light() {
  return (
    <div class="row">
      <h1>Cob's Seafood Emporium</h1>
      <CartButton />
      <br></br>
      <FishItem title="Sole" image={Sole} description="Fresh, never frozen" price="25.65"/>
      <FishItem title="Sole" image={Sole} description="Frozen" price="15.52"/>
      <FishItem title="Sole" image={Sole} description="Frozen" price="15.52"/>
    </div>
  )
}

export default Light