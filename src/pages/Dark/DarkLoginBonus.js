import { CheckBox } from "react-native-web"
import { Link } from "react-router-dom"

function DarkLoginBonus() {
    function checkForSubmit() {
        if (document.getElementById("check1").checked
            && document.getElementById("check2").checked) {
          window.location.href = "/end"
        }
        else {
          alert("Check both boxes to continue")
        }
    }


    return (
        <div className="centered">
            <h1>Daily Login Bonus</h1>

            <div className="dark-login-incantation">
                Volo videre tenebras aeternas
            </div>
            <br></br>
            <label>
                <input type="checkbox" className="dark-checkbox" id="check1"></input>
                I have read the incantation above!
            </label>
            <br></br><br></br>
            <label>
                <input type="checkbox" className="dark-checkbox" id="check2"></input>
                I agree to be one step closer to dark mode!
            </label>
            <br></br><br></br>
            <button className="submit-button" onClick={checkForSubmit}>Submit</button>
        </div>
    )
}

export default DarkLoginBonus