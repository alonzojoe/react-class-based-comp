import { Component, useState } from "react";
import User from "./User";
import classes from "./Users.module.css";

const generateRandomID = () => {
  return Math.random().toString().slice(2, 7);
};

const DUMMY_USERS = [
  { id: generateRandomID(), name: "Joe" },
  { id: generateRandomID(), name: "John" },
  { id: generateRandomID(), name: "Jane" },
];
class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      data: [],
    };
  }

  toggleUsersHandler() {
    this.setState((prevState) => {
      return {
        showUsers: !prevState.showUsers,
      };
    });
  }

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
