import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTech } from "../../actions/TechAction";

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [message, setMessage] = useState('')

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please fill the input field" });
    } else {
      const newTech = {
        firstName,
        lastName,
      };
      addTech(newTech);
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4> New Staff </h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="">
              Firstname
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="">
              Lastname
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#/"
          onClick={onSubmit}
          className="modal-close waves-effect  blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};
AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};
export default connect(null, { addTech })(AddTechModal);
