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
import Showcase from './pages/Learning/Showcase';
// import Chapters from './pages/Learning/Chapters/Chapters';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/sandbox" component={Main} />
          <Route exact path="/sandbox/start" component={Assembly} />
          <Route exact path="/learning" component={Showcase} />
          {/* <Route exact path="/learning/tut" component={Chapters} /> */}
      </Switch>
    </div>
  );
}

export default App;
