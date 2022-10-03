import React from "react";
import "./ProductsSlider.css";

function ProductsSlider(props) {
  const { component651, knowledgeInternationalUniversity, className } = props;

  return (
    <div className={`component-54-3 ${className || ""}`}>
      <div className="group-474-9">
        <div className="overlap-group1-49">
          <div className="overlap-group-84">
            <img className="component-6-4" src={component651} />
          </div>
          <div className="knowledge-international-university-3 montserrat-medium-white-16px">
            {knowledgeInternationalUniversity}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSlider;
