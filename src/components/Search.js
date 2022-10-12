import React from "react";
import "./style.css";

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder=" Find a User..." />
      </div>
      <div className="userChat">
        <img
          className="imgChat"
          src="https://media-exp1.licdn.com/dms/image/D4D35AQFBGaGRwL_KLw/profile-framedphoto-shrink_200_200/0/1664396843790?e=1665784800&v=beta&t=QFqmoSwf4xJRT0GBUOH01HU3wmoMj8XO1jslBCE0YNE"
          alt=""
        />
        <div className="userChatInfo">
          <span className="nameChat">Alex</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
