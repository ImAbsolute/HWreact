import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/style.css";

export default class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
  };

  static defaultProps = {
    chatId: 1,
  };

  render() {
    return (
      <div className="header">
        <span className="chat-span">Чат {this.props.chatId}</span>
        <Link to="/profile/">Профиль</Link>
      </div>
    );
  }
}
