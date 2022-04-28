import { Link } from "react-router-dom";

export default function DarkLogin() {
    return (
        <div className="centered">
            <br></br>
            <label>
                Email:
                <input></input>
            </label>
            <br></br>
            <br></br>

            <label style={{fontSize: "5px"}}>
                <input type="checkbox" checked style={{width: "5px", height: "5px"}}></input>
                By giving us your email you are consenting to the fact that we can use it for anything we want
            </label>

            <br></br>
            <br></br>

            <Link to="/dark">Let me listen to free music!</Link>
        </div>
    )
}