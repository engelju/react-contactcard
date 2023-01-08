import React from "react";
import './App.css';

const App = () => {
  return (
    <>
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </>
  );
};

const ContactCard = () => {
  return (
    <div className="contact-card">
      <img src="https://placekitten.com/150" alt="profile" />
      <div className="user-details">
        <p>Name: Julie Engel</p>
        <p>Email: Julie.Engel@mail.com</p>
      </div>
    </div>
  );
};

export default App
