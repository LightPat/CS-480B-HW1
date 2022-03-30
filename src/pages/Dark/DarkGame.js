import { Link, useLocation, useNavigate } from "react-router-dom"

function DarkGame() {
    let goldBucks = 0
    let silverBucks = 0
    let bronzeBucks = 0
    let luck = [3,5,8]

    let data = useLocation()
    let storeState = data.state

    if (storeState) {
        goldBucks = storeState['gold']
        silverBucks = storeState['silver']
        bronzeBucks = storeState['bronze']
        luck = storeState['luck']
    }

    function game() {
        // If the random number is greater than 5 the user wins
        // The random number is between 0 and 10
        let roll = Math.random() * 10;

        alert("Spent $1 to play the game")
    
        if (roll > luck[2]) {
            goldBucks++;
            document.getElementById('gold').innerHTML = goldBucks;
            document.getElementById('game').style.backgroundColor = "gold";
            alert("You won gold bucks!")
            return;
        }
        if (roll > luck[1]) {
            silverBucks++;
            document.getElementById('game').style.backgroundColor = "silver";
            alert("You won silver bucks!")
    
            if (silverBucks === 5) {
                goldBucks++;
                document.getElementById('gold').innerHTML = goldBucks;
                silverBucks = 0
            }

            document.getElementById('silver').innerHTML = silverBucks;
            return;
        }
    
        if (roll > luck[0]) {
            bronzeBucks++;
            document.getElementById('game').style.backgroundColor = "#cd7f32";
            alert("You won bronze bucks!")

            if (bronzeBucks === 5) {
                silverBucks++
                document.getElementById('silver').innerHTML = silverBucks;
                bronzeBucks = 0
            }
    
            if (silverBucks === 5) {
                goldBucks++;
                document.getElementById('gold').innerHTML = goldBucks;
                silverBucks = 0
            }
            
            document.getElementById('bronze').innerHTML = bronzeBucks;            
            return;
        }
    
        document.getElementById('game').style.backgroundColor = "white";
        alert("You lost! :(");
    }
    
    const navigate = useNavigate()
    const passStateStore = (e) => {
        navigate("/darkstore", {
            state: {
                gold: goldBucks,
                silver: silverBucks,
                bronze: bronzeBucks,
                luck: luck
            }
        })
    }

    function recharge() {
        bronzeBucks++;
        
        if (bronzeBucks === 5) {
            silverBucks++
            bronzeBucks = 0
        }

        if (silverBucks === 5) {
            goldBucks++;
            silverBucks = 0
        }

        document.getElementById('bronze').innerHTML = bronzeBucks;
        document.getElementById('silver').innerHTML = silverBucks;
        document.getElementById('gold').innerHTML = goldBucks;
    }

    const passStateBonus = (e) => {
        navigate("/darkloginbonus", {
            state: {
                gold: goldBucks,
                silver: silverBucks,
                bronze: bronzeBucks,
                luck: luck
            }
        })
    }

    return (
        <div className="centered">
            <div className="dark-game-header">
                <h1>Cob's Soulo Game</h1>
                <button onClick={passStateBonus}>Login Bonus</button>
                <button onClick={passStateStore}>Store</button>
                <button onClick={recharge}>Recharge</button>
            </div>

            <div className="dark-game" id="game">
                <button onClick={game}>
                    Click Me To Play! :)
                </button>
            </div>

            <div className="dark-cob-bucks">
                <h2>CobBucks</h2>
                <p id="gold">{goldBucks}</p>
                <p id="silver">{silverBucks}</p>
                <p id="bronze">{bronzeBucks}</p>
            </div>

            <div className="dark-login-bonus">
                <h2>Login Bonus</h2>
                <p>Claim your login bonus 1 more day to unlock dark mode!</p>
            </div>
            <br></br>
            <div>
                <h2>Tokenization Key</h2>
                <ol>
                    <li>$2 = 1 Bronze CobBuck</li>
                    <li>5 Bronze = 1 Silver</li>
                    <li>5 Silver = 1 Gold</li>
                    <li>However: 1 Silver = $5</li>
                    <li>However 1 Gold = $10</li>
                    <li>Tokens are less valuable than the money you put in, thus making you lose money everytime you buy them by hitting the recharge button</li>
                </ol>
            </div>
        </div>
    )
}

export default DarkGame