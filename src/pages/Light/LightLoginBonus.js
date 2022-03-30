import { Link, useLocation, useNavigate } from "react-router-dom"

function DarkLoginBonus() {
    let data = useLocation()
    let prevState = data.state

    const navigate = useNavigate()

    function checkForSubmit() {
        if (document.getElementById("check1").checked
            && document.getElementById("check2").checked) {
                navigate("/darkstore", {
                    state: {
                        gold: prevState['gold'],
                        silver: prevState['silver'],
                        bronze: prevState['bronze'],
                        luck: prevState['luck'],
                        darkMode: true
                    }
                })
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