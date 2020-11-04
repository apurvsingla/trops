/* eslint-disable no-unused-vars */
import './App.css';
import {
  Switch,
  Route,
} from 'react-router-dom';
// import Header from './Components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Main from './pages/Sandbox/Main';
import Assembly from './pages/Assembly/Assembly';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/sandbox" component={Main} />
          <Route exact path="/sandbox/start" component={Assembly} />
      </Switch>
    </div>
  );
}

export default App;
