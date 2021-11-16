import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const App = () => {
  return (
    <div calssName="ui container">
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
};

export default App;
