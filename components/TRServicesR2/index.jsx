import React from "react";
import { Link } from "react-router-dom";
import "./TRServicesR2.css";

function TRServicesR2(props) {
  const { technologyInnovation, evolvingChallenges } = props;
  return (
    <Link to="/services-page-business-case-pricing-4">
      <div className="component-37-2">
        <div className="overlap-group1-29">
          <div className="group-633-1">
            <div className="business-case-pricing montserrat-medium-white-18px">
              {technologyInnovation}
            </div>
            <p className="pricing-is-one-of-th montserrat-normal-iron-16px">
              {evolvingChallenges}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TRServicesR2;
