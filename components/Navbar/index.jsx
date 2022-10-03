import { Link } from "react-router-dom";
import logo from "../../static/img/logo@1x.png";

//Css File
import "./Navbar.css";

function Navbar() {
  return (
    <div className="component-21-2">
      <div className="group-510-49">
        <div className="group-509-49">
          <div className="group-container-92">
            <div className="group-508-49">
              <Link
                style={{ textDecoration: "none" }}
                to="/"
              >
                <img className="logo" src={logo} />
              </Link>
              <div className={`group-506-18 ${"group-506-33" || ""}`}>
                <div className="arb montserrat-medium-black-rock-14px">ARB</div>
              </div>
            </div>
            <div className="group-606">
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
                <div className={`component-22-17 ${"component-22-16-14"}`}>
                  <div className="products-solutions montserrat-normal-shark-14px">
                    Services
                  </div>
                </div>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="/about-us"
              >
                <div className={`component-22-17 ${"component-22-15-14"}`}>
                  <div className="products-solutions montserrat-normal-shark-14px">
                    About us
                  </div>
                </div>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="/contact-us"
              >
                <div className={`component-22-17 ${"component-22-14-14"}`}>
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

export default Navbar;
