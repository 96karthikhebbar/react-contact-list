import React from "react";
import user from "../assets/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div
      className="cardContent"
      style={{
        marginTop: "1.5em",
        boxShadow: "0px 0px 5px #888888",
        padding: "1.5em",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={user} alt="user" className="ui avatar image" />
        <div className="content" style={{ paddingLeft: ".5em" }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{
          color: "red",
          //   paddingleft: "1em",
          display: "flex",

          //   position: "absolute",
          //   right: "1.5em",
        }}
      ></i>
    </div>
  );
};

export default ContactCard;
