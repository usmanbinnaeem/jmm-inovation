import React from "react";
import Socials from "../Socials"
import "./ServicesPageAlliancesEcosystems3.css";

function ServicesPageAlliancesEcosystems3(props) {
  const {
    ellipse446,
    ellipse447,
    alliancesEcosystems,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="services-page-alliances-ecosystems-3 screen">
        <div className="overlap-group4-7">
          <div className="rectangle-177-12"></div>
          <img className="ellipse-446-34" src={ellipse446} />
          <img className="ellipse-447-11" src={ellipse447} />
          <div className="alliances-ecosystems-2 montserrat-semi-bold-white-55px">{alliancesEcosystems}</div>
          <p className="in-todays-exceeding-2 montserrat-normal-white-16px">
            In today’s exceedingly interconnected world, establishing meaningful and sustainable partnerships are
            incredibly important. Building strategic alliances is extremely inevitable for organizations to thrive and
            perform better. However, it is not easy to create such valuable alliances because it takes immense time,
            effort and resources. <br />
            The first step to do so is to identify the key stakeholders associated with your organization. These can be
            your suppliers, government entities, vendors, employees or customers. All these players come together to
            constitute an ecosystem which works collectively in the delivery of your services and products. <br />
            <br />
            JMM Innovation strives to offer you value. We collaborate with clients to create a flexible, agile model for
            designing, setting up, and governing a digital ecosystem. We will help you in strategizing, building and
            scaling of the digital platform where all partners are brought together to create value which is greater
            collectively, rather than individually. But before building a digital platform, relevant stakeholders are to
            be identified, contacted, connected, and talked to in order to understand their requirements and opinions. A
            digital platform is only successful if every stakeholder benefit from the ecosystem. And we are here to
            build that. It is always time-consuming and effortful, but experts at JMM Innovation have the tools and
            experience to accomplish this daunting task. Our teams are trained to find the value for all needed partners
            and stakeholders, negotiate with them, understand their pre-requisites by understanding their opinions and
            the value they bring to the table along with onboarding them. <br />
            <br />
            Once partners and stakeholders are brought, the next step is to create a digital platform for their
            connectivity that promotes flawless communication and seamless transactional capabilities. And for the
            platform to work efficiently, it is important to define the digital governance and policies and putting in
            place data governance for responsible information access. Specialists at JMM Innovation help you in creating
            stronger and long-lasting partnerships that have an immediate and disruptive impact.
          </p>
          <div className="rectangle-201-10"></div>
        </div>
        <Socials />
      </div>
    </div>
  );
}

export default ServicesPageAlliancesEcosystems3;
