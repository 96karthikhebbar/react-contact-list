import React from "react";

const AddContact = () => {
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form">
        <div className="field">
          <label>Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="email" placeholder="enter valid email id" required />
        </div>
        <button className="ui button blue">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
