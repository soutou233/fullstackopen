import { useState } from 'react'

const Button = ({text, clickEvent}) => {
  return (
    <button onClick={clickEvent}>{text}</button>
  )
}

const Text = ({text}) => {
  return (
    <div>{text}</div>
  )
}

const Title = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [point, setPoint] = useState(Array(8).fill(0))

  const nextAnecdote = () => {
    const rand = Math.floor(Math.random() * (anecdotes.length))
    console.log(rand)
    setSelected(rand)
  }
  
  const addPoints = () => {
    const temp = [...point]
    temp[selected] += 1
    setPoint(temp)
  }


  return (
    <div>
      <div>
        <Title title="Anecdotes of the day" />
        <Text text={anecdotes[selected]} />
        <Text text={'has ' + point[selected] + ' votes'} />
        <Button text='vote' clickEvent={addPoints} />
        <Button text='next anecdotes' clickEvent={nextAnecdote} />
      </div>
      <div>
        <Title title='Anecdotes with most votes' />
        <Text text={anecdotes[point.indexOf(Math.max(...point))]} />
        <Text text={'has ' + Math.max(...point) + ' votes'} />
      </div>
    </div>
   
  )
}

export default App