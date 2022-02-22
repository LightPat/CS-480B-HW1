import './Light.css';
import { Link } from "react-router-dom"
import CartButton from "../components/Cart Button.js"
import FishItem from "../components/Fish Item.js"

import Sole from "../images/Sole.jpg"
import SoleFillet from "../images/Sole Fillet.webp"
import SalmonHeadOff from "../images/SalmonHeadOff.jpg"
import SalmonFillet from "../images/SalmonFillet.jpg"

let items = []

function Light() {
  return (
    <div className="row">
      <h1>Cob's Seafood Emporium</h1>
      <CartButton items={ items } />
      <br></br>
      <FishItem title="Sole" image={Sole} description="Fresh, never frozen" price="25.65" items={ items }/>
      <FishItem title="Sole" image={Sole} description="Frozen" price="15.52" items={ items }/>
      <FishItem title="Sole Fillet" image={SoleFillet} description="Never Frozen" price="20.02" items={ items }/>
      <br></br>
      <FishItem title="Sole Fillet" image={SoleFillet} description="Never Frozen" price="15.20" items={ items }/>
      <FishItem title="Salmon Head Off" image={SalmonHeadOff} description="Never Frozen" price="10.20" items={ items }/>
      <FishItem title="Salmon Fillet" image={SalmonFillet} description="Frozen" price="13.25" items={ items }/>
    </div>
  )
}

export default Light