import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className='app-wrapper-wrapper'>
          <Navigation />

          <div className='app-wrapper-content'>
            <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage}
              dispatch={props.dispatch} />} />

            <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.state.dialogsPage}
            dispatch={props.dispatch} />} />

            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
          </div>

        </div>
      </div>
    </BrowserRouter>);
}

export default App;
