import React from "react";
import PropTypes from "prop-types";
import MessageField from "./MessageField.jsx";
import ChatList from "./ChatList.jsx";
import Header from "./Header.jsx";
import { sendMessage } from "../actions/messageActions.js";
import "../styles/style.css";
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";

class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
    sendMessage: PropTypes.func.isRequired,
  };

  static defaultProps = {
    chatId: 1,
  };

  state = {
    messages: {
      1: { text: "Привет!", sender: "bot" },
      2: { text: "Здравствуйте!", sender: "bot" },
    },
  };

  componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state;
    if (
      Object.keys(prevState.messages).length < Object.keys(messages).length &&
      Object.values(messages)[Object.values(messages).length - 1].sender ===
        "me"
    ) {
      setTimeout(
        () => this.sendMessage("Не приставай ко мне, я робот!", "bot"),
        1000
      );
    }
  }

  sendMessage = (message, sender) => {
    const { messages } = this.state;
    const { chatId } = this.props;

    const messageId = Object.keys(messages).length + 1;
    this.setState({
      messages: { ...messages, [messageId]: { text: message, sender: sender } },
    });
    this.props.sendMessage(messageId, message, sender, chatId);
  };

  addChat = (title) => {
    const { chats } = this.state;

    const chatId = Object.keys(chats).length + 1;
    this.setState({
      chats: { ...chats, [chatId]: { title: title, messageList: [] } },
    });
  };

  render() {
    return (
      <div className="layout">
        <Header chatId={this.props.chatId} />
        <div className="layout-canvas">
          <div className="ChatList">
            <ChatList />
          </div>
          <div className="layout-right-side">
            <MessageField
              chatId={this.props.chatId}
              messages={this.state.messages}
              sendMessage={this.sendMessage}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
