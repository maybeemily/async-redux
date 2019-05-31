import React from 'react';
import AllCharacters from '../containers/characters/AllCharacters';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterById from '../containers/characters/CharacterById';

export default function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/character/:id" component={CharacterById}/>
        <Route path="/" component={AllCharacters}/>
      </Switch>
    </Router>
  );
}
