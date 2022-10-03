import { Link } from "react-router-dom";
import group363 from "../../static/img/path-1335-10@1x.png";
import path1336 from "../../static/img/path-1336-10@1x.png";
import path1333 from "../../static/img/path-1333-10@1x.png";
import path1334 from "../../static/img/path-1333-10@1x.png";
import path1337 from "../../static/img/path-1337-10@1x.png";
import path1338 from "../../static/img/path-1338-10@1x.png";
import path1340 from "../../static/img/path-1340-10@1x.png";
import path1341 from "../../static/img/path-1341-22@1x.png";
import path1342 from "../../static/img/path-1342-10@1x.png";
import path1344 from "../../static/img/path-1344-10@1x.png";
import path1345 from "../../static/img/path-1345-22@1x.png";
import path1347 from "../../static/img/path-1347-10@1x.png";

import "./StickyNavbar.css";

function StickyNavbar() {
  return (
    <div className={`component-23-16 ${"bottom-nav" || ""}`}>
      <div className="group-510-30">
        <div className="group-509-30">
          <div className="group-container-39">
            <div className="group-508-33">
              <div className="group-505-25">
                <Link to="/">
                  <div className="group-364-20">
                    <div
                      className={`group-363-25 ${"group-363-20-1" || ""}`}
                      style={{ backgroundImage: `url(${group363})` }}
                    >
                      <img className="path-1336" src={path1336} />
                    </div>

                    <img className="path-133-48" src={path1333} />
                    <img className="path-133-48" src={path1334} />
                    <img className="path-1337-24" src={path1337} />
                    <img className="path-133-49" src={path1338} />
                    <img
                      className="path-133-49"
                      src="/img/path-1339-10@1x.png"
                    />
                    <img className="path-134-24" src={path1340} />
                    <div className="path-container-56">
                      <img className="path-1341-24" src={path1341} />
                      <img className="path-1342-24" src={path1342} />
                      <img
                        className="path-1343-24"
                        src="/img/path-1343-10@1x.png"
                      />
                    </div>
                    <img className="path-1344-24" src={path1344} />
                    <img className="path-134-24" src={path1345} />
                    <img
                      className="path-1346-24"
                      src="/img/path-1346-10@1x.png"
                    />
                    <img className="path-1347-24" src={path1347} />
                  </div>
                </Link>
              </div>
              <div className={`group-506-20 ${""}`}>
                <div className="eng montserrat-medium-white-14px">ENG</div>
                <img
                  className="chevron-down-2"
                  src="/img/chevron-down--2--10@1x.png"
                />
              </div>
            </div>
            
            <div className="group-593">
            <Link style={{textDecoration: "none"}} to="/products-solutions">
              <div className={`component-22-13 ${""}`}>
                <div className="products-solutions-17 montserrat-normal-white-14px">
                  Products & Solutions
                </div>
              </div>
              </Link>

              <Link style={{textDecoration: "none"}} to="/services">
              <div className={`component-22-13 ${"component-22-12-11"}`}>
                <div className="products-solutions-17 montserrat-normal-white-14px">
                  Services
                </div>
              </div>
              </Link>

              <Link style={{textDecoration: "none"}} to="/about-us">
              <div className={`component-22-13 ${"component-22-11-11"}`}>
                <div className="products-solutions-17 montserrat-normal-white-14px">
                  About us
                </div>
              </div>
              </Link>
              <Link style={{textDecoration: "none"}} to="/contact-us">
              <div className={`component-22-13 ${"component-22-10-11"}`}>
                <div className="products-solutions-17 montserrat-normal-white-14px">
                  Contact
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StickyNavbar;
