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
      .get("https://api.github.com/users/Darragh1996/followers")
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

  render() {
    return (
      <div>
        {this.state.users.map(user => {
          return <Card user={user} key={user.id} />;
        })}
      </div>
    );
  }
}
