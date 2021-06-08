import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import "../styles/style.css";

 class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
  };

  static defaultProps = {
    chatId: 1,
  };

  render() {
    const { profile } = this.props;
    return (
      <div className="header">
        <span className="chat-span">Чат {this.props.chatId}</span>
        <Link to="/profile/">{profile.name}</Link>
      </div>
    );
  }
}

const mapStateToProps = ({chatReducer}) =>({
  profile: chatReducer.profile,
});


const mapDispatchToProps=(dispatch)=>{
  return{

  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
