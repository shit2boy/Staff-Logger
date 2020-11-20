import React, { useEffect } from "react";
import LogItems from "./LogItems";
import Preloader from "../Layouts/Preloader";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/LogAction";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    // props.getLoads()
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center"> No Log to show...</p>
      ) : (
        logs.map((log) => <LogItems log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.protoTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
