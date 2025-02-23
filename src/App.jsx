import './App.css';
import Project from './components/Project'

const App = () => {

  return (
    <div className="App">
      <h1>Easy Impact</h1>
      <h2>Impact made easy</h2>

      <Project org='Wesley Foundation' loc="Saint Simon's Island" imgpath='\random.jpg' link='https://www.statewesley.org/' />

      
    </div>
  )
}

export default App