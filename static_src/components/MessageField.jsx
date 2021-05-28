import React from "react";
import PropTypes from "prop-types";
import { TextField, FloatingActionButton } from "material-ui";
import SendIcon from "material-ui/svg-icons/content/send";
import Message from "./Message.jsx";
import "../styles/style.css";

export default class MessageField extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  static propTypes = {
    chatId: PropTypes.number.isRequired,
  };

  state = {
    chats: {
      1: { title: "Чат 1", messageList: [1] },
      2: { title: "Чат 2", messageList: [2] },
      3: { title: "Чат 3", messageList: [] },
    },
    messages: {
      1: { text: "Привет!", sender: "bot" },
      2: { text: "Здравствуйте!", sender: "bot" },
    },
    input: "",
  };

  // handleClick = (message) => {
  //   this.sendMessage(message);
  // };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      this.handleSendMessage(this.state.input, "me");
    }
  };

  // sendMessage = (message) => {
  //   this.setState((prevState) => ({
  //     messages: [...prevState.messages, { text: message, sender: "me" }],
  //     input: "",
  //   }));
  // };

  handleSendMessage = (message, sender) => {
    const { messages, chats, input } = this.state;
    const { chatId } = this.props;

    if (input.length > 0 || sender === "bot") {
      const messageId = Object.keys(messages).length + 1;
      this.setState({
        messages: {
          ...messages,
          [messageId]: { text: message, sender: sender },
        },
        chats: {
          ...chats,
          [chatId]: {
            ...chats[chatId],
            messageList: [...chats[chatId]["messageList"], messageId],
          },
        },
      });
    }
    if (sender === "me") {
      this.setState({ input: "" });
    }
  };

  componentDidMount() {
    this.timer = setTimeout(() => {}, 1000);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.messages.length < this.state.messages.length &&
  //     this.state.messages[this.state.messages.length - 1].sender === "me"
  //   ) {
  //     setTimeout(() =>
  //       this.setState(
  //         (prevState) => ({
  //           messages: [
  //             ...prevState.messages,
  //             { text: "Привет,я робот! Как дела?", sender: "bot" },
  //           ],
  //         }),
  //         1000
  //       )
  //     );
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state;
    if (
      Object.keys(prevState.messages).length < Object.keys(messages).length &&
      Object.values(messages)[Object.values(messages).length - 1].sender ===
        "me"
    ) {
      setTimeout(
        () => this.handleSendMessage("Не приставай ко мне, я робот!", "bot"),
        1000
      );
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { messages, chats } = this.state;
    const { chatId } = this.props;

    const messageElements = chats[chatId].messageList.map(
      (messageId, index) => (
        <Message
          key={index}
          text={messages[messageId].text}
          sender={messages[messageId].sender}
        />
      )
    );

    return (
      (
        <div key="messageElements" className="message-field">
          {messageElements}
        </div>
      ),
      (
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
      )
    );
  }
}
