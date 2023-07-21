import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TrainList from './TrainList';
import SingleTrainPage from './SingleTrainPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/train/:id" component={SingleTrainPage} />
          <Route path="/" component={TrainList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;