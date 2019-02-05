
import React from   'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Todo extends React.Component
{
  render()
  {
    return(
      <div>
      
      <h1 >Todo app </h1>
    
    <div> {  <BasicExample/> }</div>
      </div> 
    )
  }
  }

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

class Home extends React.Component {
  render(){
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
}


class About extends React.Component {
  render(){
  return (
    <div>
      <h2>About 

      </h2>
    </div>
  );
}
}


function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default Todo;