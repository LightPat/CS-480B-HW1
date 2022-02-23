import './Dark.css';
import CartButton from "../../components/Cart Button.js"
import FishItem from "../../components/Fish Item.js"

import Sole from "../../images/Sole.jpg"
import SoleFillet from "../../images/Sole Fillet.webp"
import SalmonHeadOff from "../../images/SalmonHeadOff.jpg"
import SalmonFillet from "../../images/SalmonFillet.jpg"

let items = []

function Light() {
  return (
    <div className="row">
      <h1>Cob's Seafood Emporium</h1>
      <CartButton items={ items } link="/darkcart"/>
      <br></br>
      <FishItem title="Sole Fish" image={Sole} description="Fresh, never frozen" price="24.99" items={ items }/>
      <FishItem title="Sole Fish" image={Sole} description="Frozen" price="14.99" items={ items }/>
      <FishItem title="Sole Fillet" image={SoleFillet} description="Never Frozen" price="19.99" items={ items }/>
      <br></br>
      <FishItem title="Sole Fillet" image={SoleFillet} description="Never Frozen" price="14.99" items={ items }/>
      <FishItem title="Salmon Head Off" image={SalmonHeadOff} description="Never Frozen" price="9.99" items={ items }/>
      <FishItem title="Salmon Fillet" image={SalmonFillet} description="Frozen" price="12.99" items={ items }/>
    </div>
  )
}

export default Light