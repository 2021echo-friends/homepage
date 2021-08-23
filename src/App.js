import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import MainPage from './MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" component={MainPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
