import React, { Component } from "react";
import "../styles/style.css";

export default class ChatList extends Component {
  render() {
    return (
      <div className="ChatList">
        <ul>
          <li>Chat 1</li>
          <li>Chat 2</li>
          <li>Chat 3</li>
          <li>Chat 4</li>
        </ul>
      </div>
    );
  }
}
