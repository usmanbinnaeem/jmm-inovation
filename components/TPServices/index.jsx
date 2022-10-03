import React from "react";
import { Link } from "react-router-dom";
import "./TPServices.css";

function TPServices(props) {
  const { className, info, title } = props;

  return (
    <Link to="/services-page-digital-transformation-1">
      <div className={`component-34-2 ${className || ""}`}>
        <div className="overlap-group1-27">
          <div className="digital-transformation montserrat-medium-white-18px">
            {title}
          </div>
          <p className="in-todays-world-of montserrat-normal-iron-16px">
            {info}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default TPServices;
