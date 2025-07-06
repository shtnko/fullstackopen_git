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
    <table>    
      <tbody>
        <StatisticsLine text="Total Good" value={good} />
        <StatisticsLine text="Total Bad" value={bad} />
        <StatisticsLine text="Total Neutral" value={neutral} />
        <StatisticsLine text="Total Feedback" value={total} />
        <StatisticsLine text="Average" value={average.toFixed(5)} />
        <StatisticsLine text="Positive" value={positive.toFixed(2) + '%'} />
      </tbody>
    </table>
    </div>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

const total = good + neutral + bad
const Average = total === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / total
const Positive = total === 0 ? 0 : (good / total * 100)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  
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
      total={total}
      average={Average}
      positive={Positive}
    />
    </div>
  )
}

export default App