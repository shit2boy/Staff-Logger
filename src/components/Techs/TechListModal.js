import React, { useEffect, useState } from "react";
import TechItems from "./TechItems";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);
  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/techs");
    const data = await res.json();
    setTechs(data);
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4> Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs.map((tech) => <TechItems tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
