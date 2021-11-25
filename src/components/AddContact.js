import React, { useState } from "react";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    return name === "name" ? setName(value) : setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`${name} has been added as contacts with email ${email}`);
    let conatctsObj = {};
    conatctsObj.name = name;
    conatctsObj.email = email;
    props.addContactHandler(conatctsObj);
    setName("");
    setEmail("");
    console.log(conatctsObj);
    // setContacts([...contacts, newContact]);
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="enter valid email id"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <button className="ui button blue">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
