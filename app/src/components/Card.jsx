import React from "react";

export default class Card extends React.Component {
  render() {
    return (
      <div className="Card-container">
        <img className="Card-img" src={this.props.user.avatar_url} />
        <h2 className="Card-text">{this.props.user.login}</h2>
        <p className="Card-text">
          Github:{" "}
          <a href={this.props.user.html_url}>{this.props.user.html_url}</a>
        </p>
      </div>
    );
  }
}
