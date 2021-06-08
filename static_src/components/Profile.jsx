import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";
import "../styles/style.css";

class Profile extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="profile">
        <span>Профиль</span>
        <span>Имя:{profile.name}</span>
        <span>Возраст:{profile.age}</span>
        <span>email:exampl@mail.ru</span>
      </div>
    );
  }
}

const mapStateToProps = ({chatReducer}) =>({
  profile: chatReducer.profile,
});

export default connect(mapStateToProps)(Profile);
