import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router";

function DarkStore() {
    let data = useLocation()
    let prevState = data.state

    const navigate = useNavigate()
    const buy = (e) => {
        if (prevState['gold'] >= 5) {
            prevState['gold']-=5
            alert("Thank you for your purchase")

            navigate("/lightgame", {
                state: {
                    gold: prevState['gold'],
                    silver: prevState['silver'],
                    bronze: prevState['bronze'],
                    luck: [1, 2, 3]
                }
            })
        }
        else {
            alert("You don't have enough money for that!")

            navigate("/lightgame", {
                state: {
                    gold: prevState['gold'],
                    silver: prevState['silver'],
                    bronze: prevState['bronze'],
                    luck: prevState['luck']
                }
            })
        }
    }

    function checkDarkMode() {
        if (prevState['darkMode']) {
            prevState['gold']-=50

            alert('Dark mode acquired')
            document.body.style.filter = 'invert(1)'
            document.body.style.backgroundColor = 'black'

            navigate("/darkgame", {
                state: {
                    gold: prevState['gold'],
                    silver: prevState['silver'],
                    bronze: prevState['bronze'],
                    luck: prevState['luck']
                }
            })
        }
        else {
            alert('go claim your login bonus to get this feature')
            navigate("/darkgame", {
                state: {
                    gold: prevState['gold'],
                    silver: prevState['silver'],
                    bronze: prevState['bronze'],
                    luck: prevState['luck']
                }
            })
        }
    }

    return (
        <div className="centered">
            <h1>Game Store</h1>

            <div>
                <h2>Current balance</h2>
                <h3>Gold:{prevState['gold']}, Silver:{prevState['silver']}, Bronze:{prevState['bronze']}</h3>
            </div>

            <div className="dark-item">
                <h2>Better Odds in the Game</h2>
                <p>5 Gold CobBucks ($125)</p>
                <button onClick={buy}>Buy</button>
            </div>
            <br></br>
            <button onClick={checkDarkMode}>Unlock Dark Mode for 50 gold CobBucks!</button>
        </div>
    )
}



export default DarkStore