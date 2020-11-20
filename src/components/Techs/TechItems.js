import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/TechAction";

const TechItems = ({ tech, deleteTech }) => {
  return (
    <div className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a
          herf="wew"
          onClick={() => deleteTech(tech.id)}
          className="secondary-content"
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </div>
  );
};

TechItems.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItems);
