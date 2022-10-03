import React from "react";
import "./ArticleSidebar.css";

function ArticleSidebar(props) {
  const { className } = props;

  return (
    <div className={`group-547-2 ${className || ""}`}>
      <div className="overlap-group-81">
        <div className="surname-1 montserrat-light-silver-chalice-16px">
          Case study
        </div>
        <div className="group-449-7">
          <div className="group-450-6">
            <div className="article-title-here-1 montserrat-medium-white-25px">
              Article Title here
            </div>
            <img
              className="component-1-1"
              src="/img/component-128---1@1x.png"
            />
          </div>
          <p className="lorem-ipsum-dolor-si-35 montserrat-normal-iron-16px">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor
          </p>
        </div>
        <div className="read-more-1 montserrat-normal-malachite-16px">
          Read More &gt;
        </div>
      </div>
    </div>
  );
}

export default ArticleSidebar;
