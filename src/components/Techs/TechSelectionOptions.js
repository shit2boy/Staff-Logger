import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTechs } from "../../actions/TechAction";

const TechSelectionOptions = ({ getTechs, tech: { techs } }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);
  return (
    techs !== null &&
    techs.map((t) => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechSelectionOptions.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectionOptions);
