import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import MainPage from './MainPage/MainPage';
import AppIntro from './AppIntro/AppIntro';
import StatusPage from './StatusPage/StatusPage';
import EventPage from './EventPage/EventPage';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/intro" component={AppIntro} />
          <Route exact path="/status" component={StatusPage}/>
          <Route exact path="/event" component={EventPage}/>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
