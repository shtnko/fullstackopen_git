import { useState } from 'react'
import StatisticsLine from './StatisticsLine'

const History = (allClicks) => {
    return (
      <div>
        Give Feedback
      </div>
    )
}




const Statistics = ({ good, bad, neutral, total, average, positive }) => {
  if (total === 0) {
    return <div>No feedback given</div>
  }
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticsLine text="Total Good" value={good} />
      <StatisticsLine text="Total Bad" value={bad} />
      <StatisticsLine text="Total Neutral" value={neutral} />
      <StatisticsLine text="Total Feedback" value={total} />
      <StatisticsLine text="Average" value={average.toFixed(5)} />
      <StatisticsLine text="Positive" value={positive.toFixed(2) + '%'} />
    </div>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

conts total = good + neutral + bad
const average = total === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / total
const positive = total === 0 ? 0 : (good / total * 100)

  const [TotalFeedback, setTotalFeedback] = useState(0)
  const [Average, setAverage] = useState(0)
  const [Positive, setPositive] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)


  const handleGoodClick = () => {
    const updatedGood = good + 1
    const updatedTotal = updatedGood + neutral + bad
    setGood(updatedGood)
    setTotalFeedback(updatedTotal)
    setAverage(updatedTotal === 0 ? 0 : (updatedGood * 1 + neutral * 0 + bad * - 1) / updatedTotal)
    setPositive(updatedTotal === 0 ? 0 : (updatedGood / updatedTotal * 100))
  }

    const handleGoodClick = () => SetGood(good + 1)

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    const updatedTotal = good + updatedNeutral + bad
    setNeutral(updatedNeutral)
    setTotalFeedback(updatedTotal)
    //average 
    setAverage(updatedTotal === 0 ? 0 : ((updatedNeutral * 0 + good * 1 + bad * -1) / updatedTotal))
    //
    setPositive(good / updatedTotal * 100)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    const updatedTotal = good + neutral + updatedBad
    setBad(updatedBad)
    setTotalFeedback(updatedTotal)
    setAverage(updatedTotal === 0 ? 0 :((updatedBad * -1 + good * 1 + neutral * 0) / updatedTotal))
    setPositive(updatedTotal === 0 ? 0 :(good / TotalFeedback * 100))
  }
  
  return (
    <div>
      <History allClicks={allClicks} />
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleBadClick} text='Bad' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      
      <Statistics
      good={good}
      bad={bad}
      neutral={neutral}
      TotalFeedback={TotalFeedback}
      Average={Average}
      Positive={Positive}
    />
    </div>
  )
}

export default App