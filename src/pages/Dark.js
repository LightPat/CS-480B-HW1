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
    <div class>
      <h1>Dark page</h1>
      <input type="checkbox" id="pp-check" class="pp" checked></input>
      <label for="pp-check" class="pp">Do you agree to all terms and conditions (below)?</label>
      <div id="privacy-policy">{readPrivacyPolicyFile()}</div>
    </div>
  );
}

export default Dark