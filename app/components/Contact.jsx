import React from "react";

export const Contact = () => {
  const handleSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSumbit}>
        <fieldset>
          <div className="input-bloc">
            <label for="nameField">Nom</label>
            <input type="text" id="nameField" required />
          </div>
          <div className="input-bloc">
            <label for="emailField">Email</label>
            <input type="email" id="emailField" required />
          </div>
          <label for="messageField">Message</label>
          <textarea placeholder="Pierre tu es très beau" id="messageField" />
          <input
            style={{ backgroundColor: "#ce0033", border: "none" }}
            type="submit"
            value="Envoyer"
          />
        </fieldset>
      </form>
    </div>
  );
};
