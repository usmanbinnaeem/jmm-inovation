import React from "react";
import "./HomeServicesDiv.css";

function HomeServicesDiv(props) {
  const { technologyDevelopment, usingTechnological } = props;

  return (
    <div className="component-24-1">
      <div className="technolog-container">
        <div className="technology-development-1 montserrat-medium-white-18px">
          {technologyDevelopment}
        </div>
        <p className="using-technological-3 montserrat-normal-iron-16px">
          {usingTechnological}
        </p>
      </div>
    </div>
  );
}

export default HomeServicesDiv;
