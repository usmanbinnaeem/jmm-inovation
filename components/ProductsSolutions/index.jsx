import React from "react";
import { Link } from "react-router-dom";

//Components
import PSRow from "../PSRow";
import Socials from "../Socials";
import Particle from "./../Particle/index";

//images
import component871 from "../../static/img/component-87---1@1x.png";
import group524 from "../../static/img/component-61---1@1x.png";

// Css File
import "./ProductsSolutions.css";

function ProductsSolutions(props) {
  const {
    ellipse4461,
    ellipse447,
    component861,
    group35422Props,
    group3547Props,
    group35761Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="products-solutions-14-1 screen">
        <div className="overlap-group6-6">
          <div className="group-3579">
            <div className="overlap-group5-3">
              <div className="rectangle-177-19">
                <Particle />
              </div>
              <img className="ellipse-446-37" src={ellipse4461} />
              <img className="ellipse-447-14" src={ellipse447} />
              <div className="products-solutions-33 montserrat-semi-bold-white-55px">
                Products &amp; Solutions
              </div>
              <p className="lorem-ipsum-dolor-si-33 montserrat-normal-white-16px">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur
              </p>
              <img className="component-86-1" src={component861} />
              <div className="group-3578-1">
                <div className="group-3576-1">
                  <Link to="/product-page">
                    <div className="group-3546-2">
                      <div className="group-3542-1">
                        <div className="group-3540-1">
                          <div className="group-474-7">
                            <div className="overlap-group1-45">
                              <div className="overlap-group-78">
                                <img
                                  className="component-1"
                                  src={component871}
                                />
                              </div>
                              <div className="knowledge-international-university-2 montserrat-medium-white-19px">
                                Knowledge International University
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/product-page">
                    <div className="group-3546-2">
                      <div className="group-3546-2">
                        <div className="group-3542-1">
                          <div className="group-3540-1">
                            <div className="group-474-7">
                              <div className="overlap-group1-45">
                                <div className="overlap-group-78">
                                  <img
                                    className="component-1"
                                    src={component871}
                                  />
                                </div>
                                <div className="knowledge-international-university-2 montserrat-medium-white-19px">
                                  Knowledge International University
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <PSRow
                  group35422Props={group35761Props.group35422Props}
                  group3547Props={group35761Props.group3547Props}
                />

                <PSRow
                  group35422Props={group35761Props.group35422Props}
                  group3547Props={group35761Props.group3547Props}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSolutions;
