import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import MainPage from './MainPage/MainPage';
import AppIntro from './AppIntro/AppIntro';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/intro" component={AppIntro} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
