import {BrowserRouter, Link, Route} from 'react-router-dom'; 
import GameContainer from '../containers/GameContainer'; 
import About from './App.js'

const App = () => (
    <div>
      <BrowserRouter>
      <h1>Redux Hangman</h1>
      <Link to={'/'}>Home</Link> <Link to={'/about'}>About</Link>
      <Route exact path="/" component={GameContainer} />
      <Route exact path="/about" component={About} />
      </BrowserRouter>
    </div>
)
export default App;