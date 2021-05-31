import React, { Component } from "react";
import "../styles/style.css";

export class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <span>Профиль</span>
        <span>Имя:bot</span>
        <span>email:exampl@mail.ru</span>
      </div>
    );
  }
}

export default Profile;
