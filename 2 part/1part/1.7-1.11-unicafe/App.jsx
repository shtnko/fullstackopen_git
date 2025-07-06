import { useState } from 'react'


const History = (props) => {
    return (
      <div>
        Give Feedback
      </div>
    )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  const [TotalFeedback, setTotalFeedback] = useState(0)
  const [negativeBad, setNegativeBad] = useState(0)
  const [Average, setAverage] = useState(0)
  const [Positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotalFeedback(updatedGood + neutral + bad)
    setAverage((updatedGood * 1 + neutral * 0 + bad * - 1) / TotalFeedback)
    setPositive(updatedGood / TotalFeedback * 100)
  }


  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotalFeedback(updatedNeutral + good + bad)
    //average score
    setAverage((updatedNeutral * 0 + good * 1 + bad * -1) / TotalFeedback)
    //
    setPositive(good / TotalFeedback * 100)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotalFeedback(updatedBad + good + neutral)
    setAverage((updatedBad * -1 + good * 1 + neutral * 0) / TotalFeedback)
    setPositive(good / TotalFeedback * 100)
  }
  
  return (
    <div>
      <History allClicks={allClicks} />
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleBadClick} text='Bad' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <p>Total Good {good}</p>
      <p>Total Bad {bad}</p>
      <p>Total Neutral {neutral}</p>
      <p>Total feedback {TotalFeedback}</p>
      <p>Average {Average.toFixed(10)}</p>
      <p>Positive {Positive}%</p>
    </div>
  )
}

export default App