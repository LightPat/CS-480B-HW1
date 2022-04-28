import { Link } from 'react-router-dom'

export default function Payment() {
    return (
        <div className="centered">
            <label>
                Full Name:
                <input></input>
            </label>
            <br></br>
            <label>
                Credit card number:
                <input></input>
            </label>
            <br></br>
            <label>
                Expiration Month:
                <input></input>
            </label>
            <br></br>
            <label>
                Expiration Year:
                <input></input>
            </label>
            <br></br>
            <label>
                CVV:
                <input></input>
            </label>
            <br></br>
            <label>
                Home Address:
                <input></input>
            </label>
            <br></br>
            <label>
                City:
                <input></input>
            </label>
            <br></br>
            <label>
                State:
                <input></input>
            </label>
            <br></br>
            <label>
                Zip Code:
                <input></input>
            </label>
            <br></br>
            <br></br>

            <label style={{fontSize: "5px"}}>
                <input type="checkbox" checked style={{width: "5px", height: "5px"}}></input>
                By giving us your info you are consenting to us charging you for anything Company Co wants
            </label>
            
            <br></br>
            <br></br>
            <Link to="/dark"><button style={{fontSize: "100px", backgroundColor: "green"}}>PLAY FREE MUSIC!</button></Link>
        </div>
    )
}