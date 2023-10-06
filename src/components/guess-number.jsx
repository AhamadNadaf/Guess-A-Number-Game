import React, { useState } from "react";
import './style.css'
import img from '../assets/bg.jpg'

const GuessNumber = () => {
    const [started, setStarted] = useState(false)
    const [userGuess, setUserGuess] = useState(0)
    const [score, setScore] = useState()
    const [guess, setGuess] = useState(0)
    const [randomNumber, setRandomNumber] = useState()
    const [correctAnswer, setCorrectAnswer] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (score > 0) {
            if (randomNumber == userGuess) {
                setCorrectAnswer(true)
            } else if (userGuess < randomNumber) {
                alert("The guessed number, " + userGuess + ", is less than the randomly generated answer number.")
                setScore(score - 5)
                setGuess(guess - 1)
            }
            else {
                alert("The guessed number, " + userGuess + ", is greater than the randomly generated answer number.")
                setScore(score - 5)
                setGuess(guess - 1)


            }
        } else {
            alert("Chances are over; let's start again.")
            setStarted(false)
            setUserGuess(0)
        }
    }

    const handleStart = () => {
        setStarted(true)
        let numberChancesRemaining = 20
        setGuess(numberChancesRemaining)
        setScore(100)
        let randomVal = Number.parseInt(Math.random() * 100)
        setRandomNumber(randomVal)
    }

    const handleReset = () => {
        setUserGuess(0)
        setStarted(false)
        setCorrectAnswer(false)
    }
    return (
        <div className="guess-div">
            {/* <img src={img} /> */}
            <div className="guess-head">

                <h3>Instructions</h3>
                <ol className="instruction-list">
                    <li>Start a game.</li>
                    <li>After starting the game, the system will generate a random number(Answer).</li>
                    <li>You have 20 chances to guess the generated number.</li>
                    <li>Your score will be reduced with every single wrong guess.</li>
                </ol>

                {
                    started ? (
                        !correctAnswer ? (<div className="game-started-div">
                            <br></br>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <h1>Remaining Chance {guess}</h1>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Guess the Number from 1 to 100</label>
                                    <input value={userGuess} onChange={(e) => setUserGuess(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                </div>
                                <button type="submit" className="btn btn-success">Submit</button>
                                <button className="btn btn-danger reset-but" onClick={() => handleReset()}>Restart</button>
                            </form>

                        </div>) : (
                            <div>
                                <h1>Congratulations! Your guess is correct</h1>
                                <h1>Your Score is {score}</h1>
                                <button className="btn btn-danger reset-but" onClick={() => handleReset()}>Restart</button>
                            </div>
                        )) :

                        (

                            <button className="btn btn-primary" onClick={(e) => handleStart(e)}>Start</button>
                        )
                }


            </div>



        </div>
    )
}

export default GuessNumber