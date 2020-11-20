import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { clearCurrent, setCurrent, updateLog } from "../../actions/LogAction";
import PropTypes from "prop-types";

const EditLogModal = ({ current, updateLog, clearCurrent }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  // const [message, setMessage] = useState('')

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please fill the input field" });
    } else {
      const editedLog = {
        message,
        attention,
        tech,
      };
      updateLog(editedLog);
      clearCurrent();
      setMessage("");
      setAttention("");
      setTech("");
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4> Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="Shittu Akeem" disabled>
                Akeem Technician
              </option>
              <option value="Shittu Akeem">Tolulope Technician</option>
              <option value="Shittu ">Akeem </option>
            </select>
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <label>
              <input
                type="checkbox"
                className="filled-in"
                checked={attention}
                value={attention}
                onChange={(e) => setAttention(!attention)}
              />
              <span>Needs Attention</span>
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#"
          onClick={onSubmit}
          className="modal-close waves-effect  blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

EditLogModal.protoTypes = {
  updateLog: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired,
  current: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog, clearCurrent })(
  EditLogModal
);
