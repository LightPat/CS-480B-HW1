import privacypolicy from './Privacy Policy.txt'

function readPrivacyPolicyFile() {
    fetch(privacypolicy)
    .then(response => response.text())
    .then(data => {
        const element = document.getElementById("privacy-policy")
        element.innerHTML = data
        return data
    })
}

function PrivacyPolicy() {
    return (
        <div>
            <p id="privacy-policy">{readPrivacyPolicyFile()}</p>
        </div>
    )
}

export default PrivacyPolicy