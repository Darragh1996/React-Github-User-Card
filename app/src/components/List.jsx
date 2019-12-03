import React from "react";
import axios from "axios";
import Card from "./Card";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    console.log("Component Mounted.");
    axios
      .get(`https://api.github.com/users/${this.props.user}/followers`)
      .then(res => {
        console.log(res);
        this.setState({
          users: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate(oldProps) {
    if (oldProps.user == this.props.user) {
      console.log(oldProps);
    } else {
      axios
        .get(`https://api.github.com/users/${this.props.user}/followers`)
        .then(res => {
          console.log(res);
          this.setState({
            users: res.data
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.user}'s followers</h2>
        {this.state.users.map(user => {
          return <Card user={user} key={user.id} />;
        })}
      </div>
    );
  }
}
