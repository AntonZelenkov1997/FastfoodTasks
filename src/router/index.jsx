import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import axios from 'axios';
import ContainerApp from '../pages/ContainerApp/index';

const places = {
  name: 'Дом у дороги',
  image: 'https://www.galwaytourism.ie/wp-content/uploads/2019/05/top-5-restaurants-1024x768.jpg',
  from_hour: '08:00',
  to_hour: '23:00',
  address: 'Улица Вавилова 6',
};

// const jsonPlaces = JSON.stringify(places);

function App() {
  axios
    .post('http://localhost:8000/api/places?Authorization=4f27c3c936b5477b99334b35b1c08ce03121134e', places)
    .then((response) => {
      console.log(response);
    });
  /*
  axios
    .get('http://localhost:8000/api/places/data/')
    .then((response) => {
      console.log(response);
    }); */
  return (
    <Router>
      <Switch>
        <Redirect from="/" exact to="/owner/places" />
        <Route path="/owner/places">
          <ContainerApp className="СontainerApp" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
