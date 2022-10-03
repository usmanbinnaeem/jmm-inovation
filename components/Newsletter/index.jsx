import React from "react";

//Css File
import "./Newsletter.css";

function Newsletter(props) {
  const { className } = props;

  return (
    <div className={`group-567-3 ${className || ""}`}>
      <div className="group-420-3">
        <div className="group-502-3">
          <div className="news-feed-and-updates montserrat-semi-bold-white-40px">News feed and updates</div>
          <div className="rectangle-170-3"></div>
        </div>
        <p className="lorem-ipsum-dolor-si-26 montserrat-normal-white-14px">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et
        </p>
        <div className="group-503">
          <div className="overlap-group-69">
            <input placeholder="Enter Your Email Address" className="enter-your-email-address montserrat-normal-alabaster-16px" />
            
            <div className="group-568-3">
              <input type="submit" value = "Submit" className="submit montserrat-medium-white-16px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
