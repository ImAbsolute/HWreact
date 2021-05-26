import React from "react";
import MessageField from "./MessageField.jsx";
import Header from "./Header.jsx";
import ChatList from "./ChatList.jsx";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <ChatList />
          <MessageField />
        </div>
      </div>
    );
  }
}
