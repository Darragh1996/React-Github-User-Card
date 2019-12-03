import React from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Darragh1996",
      formInput: ""
    };
  }

  handleChange = event => {
    this.setState({
      formInput: event.target.value
    });
    console.log(this.formInput);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      user: event.target.user.value
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Github API Project</h1>
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            input={this.state.formInput}
          />
          <List user={this.state.user} />
        </header>
      </div>
    );
  }
}

export default App;
