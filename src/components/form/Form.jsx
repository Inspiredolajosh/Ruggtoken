import React, { useState } from "react";
import "./Form.scss";

const Form = ({ eligibleAddresses }) => {
  const [inputAddress, setInputAddress] = useState("");

  const checkEligibility = (e) => {
    e.preventDefault(); // Prevent the form from submitting and page reloading

    if (inputAddress.trim() === "") {
      window.alert("Please enter a valid address.");
      return;
    }

    if (eligibleAddresses.includes(inputAddress)) {
      window.alert("Congratulations, Eligible for Airdrop!");
    } else {
      window.alert("Sorry, Not Eligible for Airdrop!");
    }
  };

  return (
    <form className="form">
      <div className="container">
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Paste wallet Address"
            value={inputAddress}
            onChange={(e) => setInputAddress(e.target.value)}
          />
        </div>

        <div className="form__group">
          <button className="btn" onClick={checkEligibility}>
            Check Eligibility
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
