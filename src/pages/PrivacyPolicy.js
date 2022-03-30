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
            <p id="policy">{readPrivacyPolicyFile()}</p>
        </div>
    )
}

export default PrivacyPolicy