import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './Main';


//Curly brackets import example
import {fc1 , fc0,fragment} from './ExampleComponents';

function Index() {
  return <h1> Index page </h1>;
}

function About() {
  return <h2>About page</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export const myContext= React.createContext();

export function AppRouter() {
  return (
    <myContext.Provider value="demo">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/functionalComponent/">Uses function as component</Link>
            </li>
            <li>
              <Link to="/functionalComponent1/">Uses function as component</Link>
            </li>
            {/* <li>
              <Link to="/fragment">Uses function as component</Link>
            </li> */}
            
          </ul>
        </nav>

        <Route path="/" exact component={Main} />
        <Route path="/functionalComponent" component={fc0} />
        <Route path="/functionalComponent1" component={fc1} />
        {/* <Route path="/fragment" component={fragment} /> */}
       
      </div>
    </Router>
    </myContext.Provider>
  );
}

