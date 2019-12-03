import React from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Github API Project</h1>
          <Form />
          <List />
        </header>
      </div>
    );
  }
}

export default App;
