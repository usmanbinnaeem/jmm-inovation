import React from "react";
import { Link } from "react-router-dom";
import "./TRServicesR3.css";

function TRServicesR3(props) {
  const { dataCloud, providingACloudCo } = props;

  return (
    <Link to="/services-page-customer-experience-7">
      <div className="component-40-2">
        <div className={`group-640 ${""}`}>
          <div className="overlap-group-37">
            <div className="group-633-5">
              <div className="customer-experience montserrat-medium-white-18px">
                {dataCloud}
              </div>
              <p className="providing-pleasant-c montserrat-normal-iron-16px">
                {providingACloudCo}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TRServicesR3;
