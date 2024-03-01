import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './MainPage';
import DetailPage from './DetailPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/main" /> {/* 루트 경로에서 /main으로 리다이렉트 */}
        </Route>
        <Route exact path="/main" component={MainPage} />
        <Route path="/main/:topicId" component={DetailPage} />
      </Switch>
    </Router>
  );
};

export default App;
