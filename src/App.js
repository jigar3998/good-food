import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'

const PunjabiPage =()=>(
  <div>
    <h1>PUNJABI PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/punjabi' component={PunjabiPage}/>
      </Switch>
    </div>
  );
}

export default App;
