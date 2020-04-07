import React from 'react';
import './App.css';
import TodoLists from './Components/TodoLists/TodoLists';
import NavBar from './Components/NavBar';



class App extends React.Component{

  render(){

    return (
      <div className="App">
         <NavBar />
         <TodoLists />
      </div>
    );
  }
}


export default App;
