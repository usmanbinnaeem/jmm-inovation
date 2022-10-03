//Components
import Particle from "./../Particle/index";
import TPServices from "../TPServices";
import TRServicesR2 from "../TRServicesR2";
import TRServicesR3 from "../TRServicesR3";
import TechnologyDevelopment from "../TechnologyDevelopment";
import DataandCloud from "./../DataandCloud/index";
import Socials from "./../Socials";
import Navbar2 from "./../Navbar2";

// Css File
import "./Services.css";

function Services(props) {
  const {
    component1061,
    component1051,
    component931,
    dataCloud,
    providingACloudCo,
    component3011Props,
    component3012Props,
    component342Props,
    component352Props,
    component362Props,
    component392Props,
    component393Props,
    component394Props,
    component402Props,
    component403Props,
    component271Props,
    component272Props,
    component273Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="services screen">
        <div className="overlap-group3-16">
          <div className="rectangle-177-16">
            <Particle />
          </div>
          <img className="component-106-1" src={component1061} />
          <img className="component-105-1" src={component1051} />
          <div className="item item--primary" data-aos="fade-right">
            <div className="services-2 montserrat-semi-bold-white-55px">
              Services
            </div>
            <img className="component-93-1" src={component931} />
            <p className="lorem-ipsum-dolor-si-18 montserrat-normal-white-16px">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur
            </p>
          </div>
          <div className="technology-animate" data-aos="fade-left">
            <div className="group-452-16">
              <div className="group-452-15">
                <div className="technology-development montserrat-semi-bold-sea-serpent-42px">
                  Technology Development
                </div>
              </div>
            </div>
            <p className="using-technological montserrat-normal-white-16px">
              Using technological developments changing lives of individuals and
              the practice of (almost) every aspect of business.
            </p>

            <div className="group-641-1">
              <TechnologyDevelopment
                title={component271Props.title}
                desc={component271Props.desc}
              />
              <TechnologyDevelopment
                title={component272Props.title}
                desc={component272Props.desc}
                className={component272Props.className}
              />
              <TechnologyDevelopment
                title={component273Props.title}
                desc={component273Props.desc}
                className={component273Props.className}
              />
            </div>
          </div>
          <div className="testing"></div>
          <div className="data-and-cloud">
            <div className="group-615-1" data-aos="fade-up-right">
              <div className="group-614-1">
                <div className="group-452-15">
                  <div className="data-cloud montserrat-semi-bold-sea-serpent-42px">
                    {dataCloud}
                  </div>
                </div>
              </div>
              <p className="providing-a-cloud-co-2 montserrat-normal-white-16px">
                {providingACloudCo}
              </p>
            </div>
            <div className="group-637-1" data-aos="fade-up-right">
              <div className="component-container-3">
                <DataandCloud
                  dataManagementServices={
                    component3011Props.dataManagementServices
                  }
                />
                <DataandCloud
                  dataManagementServices={
                    component3012Props.dataManagementServices
                  }
                  className={component3012Props.className}
                />
              </div>

              <div className={`component-31-1 ${""}`}>
                <div className={`group-640 ${"group-6-2" || ""}`}>
                  <div className="overlap-group-37">
                    <div className="group-633-5">
                      <div className="customer-experience montserrat-medium-white-18px">
                        Integration Services
                      </div>
                      <p className="providing-pleasant-c montserrat-normal-iron-16px">
                        Providing a cloud computing model that stores data on
                        the Internet through a cloud computing provider.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`component-32-1 ${""}`}>
                <div className="group-63">
                  <div className="overlap-group-64">
                    <div className="group-6-1">
                      <div className="infrastructure-services montserrat-medium-white-18px">
                        Infrastructure Services
                      </div>
                      <p className="outsourcing-organiza-1 montserrat-normal-iron-16px-2">
                        <span className="span montserrat-normal-iron-16px">
                          Outsourcing{" "}
                        </span>
                        <span className="span montserrat-normal-iron-16px">
                          organizational change to a third-party vendor with
                          experience in helping organizations improve processes.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-620-1" data-aos="fade-left">
            <div className="group-452-17">
              <div className="transformation-professional-services montserrat-semi-bold-sea-serpent-42px">
                Transformation & Professional Services
              </div>
            </div>
            <p className="transf-paragraph montserrat-normal-white-16px">
              Outsourcing organizational change to a third-party vendor with
              experience in helping oganizations improve processes.
            </p>
          </div>

          <div className="group-639-3">
            <div data-aos="fade-up-right">
              <TPServices
                className={component342Props.className}
                info={component342Props.info}
                title={component342Props.title}
              />
            </div>
            <div data-aos="fade-up">
              <TPServices
                className={component352Props.className}
                info={component352Props.info}
                title={component352Props.title}
              />
            </div>
            <div data-aos="fade-up-left">
              <TPServices
                className={component362Props.className}
                info={component362Props.info}
                title={component362Props.title}
              />
            </div>
          </div>
          <div className="group-639-4">
            <TRServicesR2
              technologyInnovation={component392Props.technologyInnovation}
              evolvingChallenges={component392Props.evolvingChallenges}
            />
            <TRServicesR2
              technologyInnovation={component393Props.technologyInnovation}
              evolvingChallenges={component393Props.evolvingChallenges}
            />
            <TRServicesR2
              technologyInnovation={component394Props.technologyInnovation}
              evolvingChallenges={component394Props.evolvingChallenges}
            />
          </div>
          <div className="group-639-5">
            <div data-aos="fade-right">
              <TRServicesR3
                dataCloud={component402Props.dataCloud}
                providingACloudCo={component402Props.providingACloudCo}
              />
            </div>
            <div data-aos="fade-left">
              <TRServicesR3
                dataCloud={component403Props.dataCloud}
                providingACloudCo={component403Props.providingACloudCo}
              />
            </div>
          </div>

          <Navbar2 />
        </div>
        <Socials />
      </div>
    </div>
  );
}

export default Services;
