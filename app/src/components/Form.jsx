import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <label>
          Search Github accounts:
          <input type="text" name="user" />
        </label>
        <input type="submit" />
      </form>
    );
  }
}
