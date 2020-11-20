import React, { useEffect } from "react";
import TechItems from "./TechItems";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTechs } from "../../actions/TechAction";

const TechListModal = ({ getTechs, tech: { techs } }) => {
  useEffect(() => {
    getTechs(techs);
    // eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4> Technician List</h4>
        <ul className="collection">
          {techs !== null &&
            techs.map((tech) => <TechItems tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  getTechs: PropTypes.func.isRequired,
  techs: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
