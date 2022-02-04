import './PrivacyPolicy.css'
import { Link } from "react-router-dom"
import privacypolicy from './Privacy Policy.txt'

function readPrivacyPolicyFile() {
    fetch(privacypolicy)
    .then(response => response.text())
    .then(data => {
        const element = document.getElementById("policy")
        element.innerHTML = data
    })
}

function PrivacyPolicy() {
    return (
        <div class="pp">
            <Link to="/light"><h1>Go Back</h1></Link>
            <p id="policy">{readPrivacyPolicyFile()}</p>
        </div>
    )
}

export default PrivacyPolicy