import React from 'react';
import './App.css';
import TodoLists from './Components/TodoLists/TodoLists';
import NavBar from './Components/NavBar';
import {Container} from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import * as ROUTE from './utils/Routs'
import Home from './Pages/Home';
import Todos from './Components/Todos'
import Projects from './Components/Projects';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        
          <NavBar />
          <Router>
          <Container>
            <Route exact path={ROUTE.ROOT} component={withRouter(Home)} />
            <Route exact path={ROUTE.TODOS} component={withRouter(Todos)} />
            <Route exact path={ROUTE.PROJECTS} component={withRouter(Projects)} />
          </Container>
          </Router>
        
        
      </div>
    );
  }
}


export default App;
