import './Light.css';
import React from "react"
import privacypolicy from './Privacy Policy.txt'
import { Link } from "react-router-dom"
// import ImageGallery from 'react-image-gallery';

import boots1 from "../images/Boots 1.jpg"
import boots2 from "../images/Boots 2.jpg"
import boots3 from "../images/Boots 3.jpg"
import boots4 from "../images/Boots 4.jpeg"
import heels1 from "../images/Heels 1.jpeg"
import heels2 from "../images/Heels 2.jpg"
import heels3 from "../images/Heels 3.jpg"
import heels4 from "../images/Heels 4.jpg"


function readPrivacyPolicyFile() {
  fetch(privacypolicy)
    .then(response => response.text())
    .then(data => {
      const element = document.getElementById("privacy-policy")
      element.innerHTML = data
    })
}

function Light() {
  return (
    <div class="row">
      <div class="left-column">
        <div class="top-div"></div>
        <img src={boots1} alt="Boots" class="shoe-image"></img>
        <img src={boots2} alt="Boots" class="shoe-image"></img>
        <img src={boots3} alt="Boots" class="shoe-image"></img>
        <img src={boots4} alt="Boots" class="shoe-image"></img>
      </div>
      <div class="center-column">
        <h1>Welcome to Cob's Cobbler!</h1>

        <h2>Get NEW FREE Shoes Every Week for $2 a Week!</h2>

        <input type="checkbox" id="pp-checkbox" class="small-input" checked></input>
        <label for="pp-checkbox" class="small-input">Do you agree to all terms and conditions (below)?</label>
        <p id="privacy-policy">{readPrivacyPolicyFile()}</p>
        
        <Link to="/end" className='Nav-element'>
        <button class="soul-button">Give me free shoes!</button>
        </Link>
      </div>
      <div class="right-column">
        <div class="top-div"></div>
        <img src={heels1} alt="Heels" class="shoe-image"></img>
        <img src={heels2} alt="Heels" class="shoe-image"></img>
        <img src={heels3} alt="Heels" class="shoe-image"></img>
        <img src={heels4} alt="Heels" class="shoe-image"></img>
      </div>
    </div>
  )
}

export default Light