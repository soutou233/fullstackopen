import { useState } from 'react'

const Head = ({head}) => {
  return (
    <h1>{head}</h1>
  )
}

const Button = ({text, clickEvent}) => {
  return (
    <button onClick={clickEvent}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <div>
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='neutral' value={neutral}/>
      <StatisticLine text='bad' value={bad}/>
      <StatisticLine text='all' value={good + neutral + bad}/>
      <StatisticLine text='average' value={(good - bad) / (good + neutral + bad)}/>
      <StatisticLine text='positive' value={(good / (good + neutral + bad)) * 100 + '%'}/>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <div>{text} {value}</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <Head head='give feedback' />
      <Button text='good' clickEvent={() => setGood(good + 1)}/>
      <Button text='netural' clickEvent={() => setNeutral(neutral + 1)}/>
      <Button text='bad' clickEvent={() => setBad(bad + 1)}/>
      <Head head='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App