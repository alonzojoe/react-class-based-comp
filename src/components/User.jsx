import { Component } from "react";

export class User extends Component {
  //render means return in jsx functional component
  render() {
    return <li>{this.props.name}</li>;
  }
}
