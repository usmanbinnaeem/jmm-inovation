import React from "react";
import "./TechnologyDevelopment.css";

function TechnologyDevelopment(props) {
  const { title, desc, className } = props;

  return (
    <div className={`component-27-1 ${className || ""}`}>
      <div className="overlap-group-65">
        <div className="group-625-1">
          <div className="business-mobile-applications montserrat-medium-white-18px">
            {title}
          </div>
          <p className="using-technological-2 montserrat-normal-iron-16px">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TechnologyDevelopment;
