import React from "react";
import PropTypes from "prop-types";

const TechItems = ({ tech }) => {
  return (
    <div className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a herf="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </div>
  );
};

TechItems.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItems;
