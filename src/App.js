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

class App extends React.Component {

  render() {

    return (
      <div className="App">
        
          <NavBar />
          <Router>
          <Container>
            <Route exact path={ROUTE.ROOT} component={withRouter(Home)} />
            </Container>
          </Router>
        
        {/* <TodoLists /> */}
      </div>
    );
  }
}


export default App;
