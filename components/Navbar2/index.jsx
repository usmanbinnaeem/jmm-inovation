import { Link } from 'react-router-dom';
import group363 from "../../static/img/path-1335-11@1x.png";
import path1336 from "../../static/img/path-1336-10@1x.png";
import path1333 from "../../static/img/path-1333-11@1x.png";
import path1334 from "../../static/img/path-1333-11@1x.png";
import path1337 from "../../static/img/path-1337-11@1x.png";
import path1338 from "../../static/img/path-1338-11@1x.png";
import path1339 from "../../static/img/path-1339-11@1x.png";
import path1340 from "../../static/img/path-1340-11@1x.png";
import path1341 from "../../static/img/path-1341-23@1x.png";
import path1342 from "../../static/img/path-1342-10@1x.png";
import path1343 from "../../static/img/path-1343-11@1x.png";
import path1344 from "../../static/img/path-1344-11@1x.png";
import path1345 from "../../static/img/path-1345-1@1x.png";
import path1346 from "../../static/img/path-1346-11@1x.png";
import path1347 from "../../static/img/path-1347-11@1x.png";

//Css File
import "./Navbar2.css";

function Navbar2() {
  return (
    <div className="component-21-6">
      <div className="group-510-46">
        <div className="group-509-46">
          <div className="group-container-73">
            <div className="group-508-18">
              <div className="group-505-11">
                <div className="group-364-3">
                  <div
                    className={`group-363-25 ${"group-363-18-1" || ""}`}
                    style={{ backgroundImage: `url(${group363})` }}
                  >
                    <img className="path-1336" src={path1336} />
                  </div>

                  <img className="path-133-18" src={path1333} />
                  <img className="path-133-18" src={path1334} />
                  <img className="path-1337-10" src={path1337} />
                  <img className="path-133-19" src={path1338} />
                  <img className="path-133-19" src={path1339} />
                  <img className="path-134-9" src={path1340} />
                  <div className="path-container-42">
                    <img className="path-1341-10" src={path1341} />
                    <img className="path-1342-10" src={path1342} />
                    <img className="path-1343-10" src={path1343} />
                  </div>
                  <img className="path-1344-10" src={path1344} />
                  <img className="path-134-9" src={path1345} />
                  <img className="path-1346-10" src={path1346} />
                  <img className="path-1347-10" src={path1347} />
                </div>
              </div>
              <div className={`group-506-18 ${"" || ""}`}>
                <div className="arb montserrat-medium-black-rock-14px">ARB</div>
              </div>
            </div>
            <div className="group-606-14">
              <Link
                style={{ textDecoration: "none" }}
                to="/products-solutions"
              >
                <div className={`component-22-17 ${""}`}>
                  <div className="products-solutions montserrat-normal-shark-14px">
                    Products & Solutions
                  </div>
                </div>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="/services"
              >
                <div className={`component-22-17 ${"component-22-16-8"}`}>
                  <div className="products-solutions montserrat-normal-shark-14px">
                    Services
                  </div>
                </div>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="/about-us"
              >
                <div className={`component-22-17 ${"component-22-15-7"}`}>
                  <div className="products-solutions montserrat-normal-shark-14px">
                    About us
                  </div>
                </div>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="/contact-us"
              >
                <div className={`component-22-17 ${"component-22-14-9"}`}>
                  <div className="products-solutions montserrat-normal-shark-14px">
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

export default Navbar2;
