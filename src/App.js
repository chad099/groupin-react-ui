import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './containers/login/Login';
import Signup from './containers/signup/Signup';
import Layout from './components/layout/Layout';
import GroupList from './containers/signup/group/GroupList';
function App() {
  return (
    <div className="App">
      <Router history>
        <Switch>
          
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Layout>
            <Route exact path="/" component={GroupList}></Route>
            <Route exact path="/groups" component={GroupList}></Route>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
