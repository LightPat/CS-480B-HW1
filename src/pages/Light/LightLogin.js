import { Link } from "react-router-dom"

function Dark() {
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
                <Link to="/darkgame">
                    <button className="submit-button">Submit</button>
                </Link>

                <footer className="dark-footer">By signing into my account, I agree to all terms and conditions</footer>
            </div>
        </div>
    )
}

export default Dark