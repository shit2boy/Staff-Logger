import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/Layouts/SearchBar";
import AddBtn from "./components/Layouts/AddBtn";
import Logs from "./components/Logs/Logs";
import AddLogModal from "./components/Logs/AddLogModal";
import EditLogModal from "./components/Logs/EditLogModal";
import AddTechModal from "./components/Techs/AddTechModal";

import TechListModal from "./components/Techs/TechListModal";
import { Provider } from "react-redux";
import store from "./Store";

import "./App.css";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
