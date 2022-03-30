import { Link, useNavigate } from "react-router-dom"

function Light() {
    const navigate = useNavigate()
    function checkForSubmit() {
        if (document.getElementById("check1").checked) {
                navigate("/lightgame")
        }
        else {
          alert("Agree to the terms and conditions before continuing")
        }
    }

    return (
        <div>
            <div className="dark-login">
                <h1>Welcome to Cob's Soulo Game</h1>

                <label>
                    Username
                    <br></br>
                    <input type="text" name="username"></input>
                </label>
                <br></br>
                <label>
                    Password
                    <br></br>
                    <input type="text" name="username"></input>
                </label>
                <br></br><br></br>
                <label>
                    <input type="checkbox" id="check1"></input>
                    I agree to all terms and conditions
                </label>
                <br></br><br></br>
                <button className="submit-button" onClick={checkForSubmit}>Log in</button>
                <br></br><br></br>
                <Link to="/privacypolicy" className="Nav-element" target='_blank'>Click to see terms in separate tab</Link>
            </div>
        </div>
    )
}

export default Light