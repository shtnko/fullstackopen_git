import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const Display = (props) => {
    return (
      <div>{props.counter}</div>
    )
  }

  const Button = (props) => {
    return (
      <button onClick={props.onClick}>
        {props.text}
      </button>
    )
  }
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const decreaseBy100 = () => setCounter(counter - 100)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
            <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />     
      <Button
        onClick={decreaseByOne}
        text='minus'
      />
      <Button
        onClick={decreaseBy100}
        text='-100'
      />
      
    </div>
  )
}

export default App


