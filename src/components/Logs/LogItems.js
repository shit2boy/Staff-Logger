import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../actions/LogAction";

const LogItems = ({ log, deleteLog, setCurrent }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          onClick={() => setCurrent(log)}
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span>ID #{log.id} </span> Last updated by{" "}
          <span className="black-text"> {log.tech} </span> on{" "}
          <Moment format="MMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a
          className="secondary-content"
          href="#"
          onClick={() => {
            deleteLog(log.id);
          }}
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};
LogItems.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItems);
