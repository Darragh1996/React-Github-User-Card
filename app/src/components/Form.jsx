import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={event => this.props.handleSubmit(event)}>
        <label>
          Search Github accounts:
          <input
            type="text"
            name="user"
            value={this.props.input}
            onChange={event => this.props.handleChange(event)}
          />
        </label>
        <input type="submit" />
      </form>
    );
  }
}
