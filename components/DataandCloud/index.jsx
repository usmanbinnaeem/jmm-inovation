import React from "react";
import "./DataandCloud.css";

function DataandCloud(props) {
  const { dataManagementServices, className } = props;

  return (
    <div className={`component-30-1 ${className || ""}`}>
      <div className="group-632-2">
        <div className="overlap-group-63">
          <div className="group-631-2">
            <div className="x-services montserrat-medium-white-18px">{dataManagementServices}</div>
            <p className="using-technological-1 montserrat-normal-iron-16px">
              Using technological developments changing lives of individuals and the practice of (almost) every aspect
              of business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataandCloud;
