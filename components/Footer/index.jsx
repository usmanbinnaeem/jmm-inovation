import component1031 from "../../static/img/component-103---1@1x.png";
import component821 from "../../static/img/component-82---1@1x.png";
import component771 from "../../static/img/component-77---1@1x.png";
import component781 from "../../static/img/component-78---1@1x.png";
import iconLinkedin from "../../static/img/component-79---1@1x.png";
import component801 from "../../static/img/component-80---1@1x.png";
import component811 from "../../static/img/component-81---1@1x.png";

import "./Footer.css";

function index() {
  return (
    <div className="overlap-group10-3">
      {/* <img className="component-103-1" src={component1031} /> */}
      <div className="group-356-15">
        <div className="group-container-91">
          <div className="group-388-11" data-aos="fade-right">
            <img className="component-82-1" src={component821} />
            <div className="flex-row-41">
              <img className="component-77-1" src={component771} />
              <img className="component-78-1" src={component781} />
              <img className="icon-linkedin" src={iconLinkedin} />
              <img className="component-80-1" src={component801} />
              <img className="component-81-1" src={component811} />
            </div>
          </div>
          <div
            className={`group-350-9 ${"group-350-24" || ""}`}
            data-aos="fade-left"
          >
            <div className="group-220-9">
              <div className="quick-links montserrat-semi-bold-cararra-18px">
                Quick Links
              </div>
              <div className="group-161-9 montserrat-normal-cararra-14px">
                <div className="place">HOME</div>
                <div className="group-161-item">ABOUT</div>
                <div className="group-161-item">SOLUTION</div>
                <div className="place-1">CONTACT</div>
              </div>
            </div>
            <div className="group-221-9">
              <div className="contact-us montserrat-semi-bold-cararra-18px">
                Contact Us
              </div>
              <div className="group-219-9 montserrat-normal-cararra-14px">
                <div className="phone-18">+923122245679</div>
                <div className="group-219-item">+923122245679</div>
                <div className="group-219-item">XYZ123@GMAIL.COM</div>
              </div>
            </div>
            <div className="group-222-9">
              <div className="location montserrat-semi-bold-cararra-18px">
                Location
              </div>
              <p className="lorem-ipsum-dolor-si-2 montserrat-normal-cararra-14px">
                LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING ELITR, SED
                DIAM NONUMY EIRMOD TEMPOR INVIDUNT UT LABORE ET DOLORE MAGNA
              </p>
            </div>
          </div>
        </div>
        <div className="group-608-9">
          <div className="copyrights-2022-jm-10 tajawal-normal-silver-chalice-18px">
            Copyrights © 2022 JMM Innovation. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
