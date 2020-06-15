import React, {Suspense} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from './components/layout/Layout';
const  Login = React.lazy(() => import('./containers/login/Login'));
const  Signup = React.lazy(() => import('./containers/signup/Signup'));
const  GroupList = React.lazy(() => import( './containers/signup/group/GroupList'));

function App() {
  return (
    <div className="App">
      <Router history>
        <Suspense fallback={<div style={{textAlign: "center"}}>Loading...</div>}>
          <Switch>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Layout>
              <Route exact path="/" component={GroupList}></Route>
              <Route exact path="/groups" component={GroupList}></Route>
            </Layout>
            </Switch>
          </Suspense>
      </Router>
    </div>
  );
}

export default App;
