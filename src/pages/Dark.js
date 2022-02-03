import './Dark.css';
import React from "react"
import privacypolicy from './Privacy Policy.txt'

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
        <h1>Left</h1>
      </div>
      <div class="center-column">
        <h1>Welcome to Cob's</h1>
        <input type="checkbox" id="pp-checkbox" class="small-input" checked></input>
        <label for="pp-checkbox" class="small-input">Do you agree to all terms and conditions (below)?</label>
        <p id="privacy-policy">{readPrivacyPolicyFile()}</p>
      </div>
      <div class="right-column">
        <h1>Right</h1>
      </div>
    </div>
    
  );
}

export default Dark