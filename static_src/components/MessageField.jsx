import React from "react";
import { TextField, FloatingActionButton } from "material-ui";
import SendIcon from "material-ui/svg-icons/content/send";
import Message from "./Message.jsx";
import "../styles/style.css";

export default class MessageField extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  state = {
    messages: [
      { text: "Привет!", sender: "bot" },
      { text: "Как дела?", sender: "bot" },
    ],
    input: "",
  };

  handleClick = (message) => {
    this.sendMessage(message);
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleKeyUp = (event, message) => {
    if (event.keyCode === 13) {
      this.sendMessage(message);
    }
  };

  sendMessage = (message) => {
    // this.setState({
    //   messages: [...this.state.messages, { text: message, sender: "me" }],
    //   input: "",
    // });
    this.setState((prevState) => ({
      messages: [...prevState.messages, { text: message, sender: "me" }],
      input: "",
    }));
  };
  componentDidMount() {
    this.timer = setTimeout(() => {}, 1000);
  }

  componentDidUpdate() {
    if (this.state.messages[this.state.messages.length - 1].sender === "me") {
      setTimeout(
        () =>
          this.setState({
            messages: [
              ...this.state.messages,
              { text: "Привет,я робот! Как дела?", sender: "bot" },
            ],
          }),
        1000
      );
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const messageElements = this.state.messages.map((messages, index) => (
      <Message key={index} text={messages.text} sender={messages.sender} />
    ));

    return (
      <div className="layout">
        <div className="message-field">{messageElements}</div>
        <div style={{ width: "100%", display: "flex" }}>
          <TextField
            name="input"
            fullWidth={true}
            hintText="Введите сообщение"
            style={{ fontSize: "22px" }}
            onChange={this.handleChange}
            value={this.state.input}
            onKeyUp={(event) => this.handleKeyUp(event, this.state.input)}
          />
          <FloatingActionButton
            onClick={() => this.handleClick(this.state.input)}
          >
            <SendIcon />
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}
