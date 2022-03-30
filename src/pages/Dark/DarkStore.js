import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router";

function DarkStore() {
    let data = useLocation()
    let cobBucks = data.state
    
    const navigate = useNavigate()
    const buy = (e) => {
        if (cobBucks['gold'] >= 5) {
            cobBucks['gold']-=5
            alert("Thank you for your purchase")

            navigate("/darkgame", {
                state: {
                    gold: cobBucks['gold'],
                    silver: cobBucks['silver'],
                    bronze: cobBucks['bronze'],
                    luck: [1, 2, 3]
                }
            })
        }
        else {
            alert("You don't have enough money for that!")

            navigate("/darkgame", {
                state: {
                    gold: cobBucks['gold'],
                    silver: cobBucks['silver'],
                    bronze: cobBucks['bronze'],
                    luck: cobBucks['luck']
                }
            })
        }        
    }

    function checkDarkMode() {
        alert("Dark mode here")
    }

    return (
        <div className="centered">
            <h1>Game Store</h1>

            <div>
                <h2>Current balance</h2>
                <h3>Gold:{cobBucks['gold']}, Silver:{cobBucks['silver']}, Bronze:{cobBucks['bronze']}</h3>
            </div>

            <div className="dark-item">
                <h2>Better Luck</h2>
                <p>5 Gold CobBucks</p>
                <button onClick={buy}>Buy</button>       
            </div>

            <button onClick={checkDarkMode}>Unlock Dark Mode!</button>
        </div>
    )
}



export default DarkStore