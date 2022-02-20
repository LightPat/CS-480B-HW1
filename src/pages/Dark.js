import './Dark.css';
import React from "react"
import privacypolicy from './Privacy Policy.txt'
import { Link } from "react-router-dom"
// import ImageGallery from 'react-image-gallery';

function readPrivacyPolicyFile() {
  fetch(privacypolicy)
    .then(response => response.text())
    .then(data => {
      const element = document.getElementById("privacy-policy")
      element.innerHTML = data
    })
}

function Dark() {
  return (
    <div class="row">
      <div class="left-column">
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
      </div>
    </div>
  )
}

export default Dark