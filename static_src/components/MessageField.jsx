import React from "react";
import PropTypes from "prop-types";
import { TextField, FloatingActionButton } from "material-ui";
import SendIcon from "material-ui/svg-icons/content/send";
import Message from "./Message.jsx";
import "../styles/style.css";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

class MessageField extends React.Component {
  static propTypes = {
    chatId: PropTypes.number.isRequired,
    messages: PropTypes.object.isRequired,
    chats: PropTypes.object.isRequired,
    sendMessage: PropTypes.func.isRequired,
  };

  static propTypes = {
    chatId: PropTypes.number.isRequired,
  };

  state = {
    input: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      this.handleSendMessage(this.state.input, "me");
    }
  };

  handleSendMessage = (message, sender) => {
    if (this.state.input.length > 0 || sender === "bot") {
      this.props.sendMessage(message, sender);
    }
    if (sender === "me") {
      this.setState({ input: "" });
    }
  };

  render() {
    const { messages, chats, chatId } = this.props;

    const messageElements = chats[chatId].messageList.map((messageId) => (
      <Message
        key={messageId}
        text={messages[messageId].text}
        sender={messages[messageId].sender}
      />
    ));

    return (
      <React.Fragment>
        <div key="messageElements" className="message-field">
          {messageElements}
        </div>

        <div key="textInput" style={{ width: "100%", display: "flex" }}>
          <TextField
            name="input"
            fullWidth={true}
            hintText="Введите сообщение"
            style={{ fontSize: "22px" }}
            onChange={this.handleChange}
            value={this.state.input}
            onKeyUp={this.handleKeyUp}
          />
          <FloatingActionButton
            onClick={() => this.handleSendMessage(this.state.input, "me")}
          >
            <SendIcon />
          </FloatingActionButton>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
  messages: chatReducer.chats.messages,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
