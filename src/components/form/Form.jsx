import React, { useState } from "react";
import "./Form.scss";

const Form = ({ eligibleAddresses }) => {
  const [inputAddress, setInputAddress] = useState("");

  const checkEligibility = (e) => {
    e.preventDefault();

    if (inputAddress.trim() === "") {
      window.alert("Please enter a valid address.");
      return;
    }

    const normalizedInputAddress = inputAddress.trim().toLowerCase();

    if (eligibleAddresses.some(address => address.trim().toLowerCase() === normalizedInputAddress)) {
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
