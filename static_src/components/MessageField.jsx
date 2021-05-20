import React from 'react';
import Message from './Message.jsx';

export default class MessageField extends React.Component {
   state = {
    messages: [{ text: "Привет!", sender: 'bot' }, { text: "Как дела?", sender: 'bot' }],
   };

   handleClick = () => {
        this.setState({ messages: [ ...this.state.messages, {text: 'Нормально', sender: 'me'} ] });
   };

   componentDidUpdate() {
    if(this.state.messages[this.state.messages.length - 1].sender === 'me' ){
        setTimeout(()=>
        this.setState({messages:[...this.state.messages,{text:'Привет,я робот! Как дела?',sender:'bot'}]}),1000);
    }
   };

   render() {
       const messageElements = this.state.messages.map((messages, index) => (
           <Message key={ index } text={ messages.text } />));

       return <div>
           { messageElements }
           <button onClick={ this.handleClick }>Отправить сообщение</button>
       </div>
   }
}
