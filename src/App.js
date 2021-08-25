import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import MainPage from './MainPage/MainPage';
import React from 'react';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Router>
          <Switch>
            <Route path="/" component={MainPage} />
          </Switch>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
