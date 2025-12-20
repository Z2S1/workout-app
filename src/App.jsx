import './App.css'
import SeriesItem from './components/SeriesItem'

const exercise = {category: "Cardio", exercise: "Chest press", weight: 50, repetitions: 8, time: 0}

function App() {

  return (
    <>
      <SeriesItem obj={exercise}/>
    </>
  )
}

export default App
