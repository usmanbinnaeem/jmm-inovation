import React, { useEffect } from "react";
import Aos from "aos";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import ServicesPageDigitalGovernancePolicy from "./components/ServicesPageDigitalGovernancePolicy";
import ServicesPageCustomerExperience7 from "./components/ServicesPageCustomerExperience7";
import ServicesPageTechnologyInnovation6 from "./components/ServicesPageTechnologyInnovation6";
import ServicesPageBusinessCasePricing4 from "./components/ServicesPageBusinessCasePricing4";
import ServicesPageCrisisAndDisasterManage from "./components/ServicesPageCrisisAndDisasterManage";
import ServicesPageAlliancesEcosystems3 from "./components/ServicesPageAlliancesEcosystems3";
import ServicesPageDigitalTransformation1 from "./components/ServicesPageDigitalTransformation1";
import ServicesPageDigitalAnalytics2 from "./components/ServicesPageDigitalAnalytics2";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ProductPage from "./components/ProductPage";
import ProductsSolutions from "./components/ProductsSolutions";
import ArticlesDesign from "./components/ArticlesDesign";
import HomePage from "./components/HomePage";
import StickyNavbar from "./components/StickyNavbar";
import Footer from "./components/Footer";
import "./App.css";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 200 });
  }, []);
  return (
    <Router>
      <StickyNavbar />
      <Switch>
        <Route path="/services-page-digital-governance-policy-8">
          <ServicesPageDigitalGovernancePolicy
            ellipse446="/img/ellipse-446-31@1x.png"
            ellipse447="/img/ellipse-447-17@1x.png"
            digitalGovernancePolicy="Digital Governance & Policy"
            component213Props={
              servicesPageDigitalGovernancePolicyData.component213Props
            }
            component2316Props={
              servicesPageDigitalGovernancePolicyData.component2316Props
            }
            group5122Props={
              servicesPageDigitalGovernancePolicyData.group5122Props
            }
            group645Props={
              servicesPageDigitalGovernancePolicyData.group645Props
            }
          />
        </Route>
        <Route path="/services-page-customer-experience-7">
          <ServicesPageCustomerExperience7
            ellipse446="/img/ellipse-446-15@1x.png"
            ellipse447="/img/ellipse-447-16@1x.png"
            customerExperience="Customer Experience"
            component213Props={
              servicesPageCustomerExperience7Data.component213Props
            }
            component2316Props={
              servicesPageCustomerExperience7Data.component2316Props
            }
            group5122Props={servicesPageCustomerExperience7Data.group5122Props}
            group645Props={servicesPageCustomerExperience7Data.group645Props}
          />
        </Route>
        <Route path="/services-page-technology-innovation-6">
          <ServicesPageTechnologyInnovation6
            ellipse446="/img/ellipse-446-15@1x.png"
            ellipse447="/img/ellipse-447-13@1x.png"
            technologyInnovation="Technology Innovation"
            component213Props={
              servicesPageTechnologyInnovation6Data.component213Props
            }
            component2316Props={
              servicesPageTechnologyInnovation6Data.component2316Props
            }
            group5122Props={
              servicesPageTechnologyInnovation6Data.group5122Props
            }
            group645Props={servicesPageTechnologyInnovation6Data.group645Props}
          />
        </Route>
        <Route path="/services-page-business-case-pricing-4">
          <ServicesPageBusinessCasePricing4
            ellipse446="/img/ellipse-446-25@1x.png"
            ellipse447="/img/ellipse-447-10@1x.png"
            businessCasePricing="Business Case & Pricing"
            component213Props={
              servicesPageBusinessCasePricing4Data.component213Props
            }
            component2316Props={
              servicesPageBusinessCasePricing4Data.component2316Props
            }
            group5122Props={servicesPageBusinessCasePricing4Data.group5122Props}
            group645Props={servicesPageBusinessCasePricing4Data.group645Props}
          />
        </Route>
        <Route path="/services-page-crisis-and-disaster-management-5">
          <ServicesPageCrisisAndDisasterManage
            ellipse446="/img/ellipse-446-31@1x.png"
            ellipse447="/img/ellipse-447-14@1x.png"
            crisisAndDisasterManagement="Crisis and Disaster Management"
            component213Props={
              servicesPageCrisisAndDisasterManageData.component213Props
            }
            component2316Props={
              servicesPageCrisisAndDisasterManageData.component2316Props
            }
            group5122Props={
              servicesPageCrisisAndDisasterManageData.group5122Props
            }
            group645Props={
              servicesPageCrisisAndDisasterManageData.group645Props
            }
          />
        </Route>
        <Route path="/services-page-alliances-ecosystems-3">
          <ServicesPageAlliancesEcosystems3
            ellipse446="/img/component-126---1@1x.png"
            ellipse447="/img/ellipse-447-10@1x.png"
            alliancesEcosystems="Alliances & Ecosystems"
            component213Props={
              servicesPageAlliancesEcosystems3Data.component213Props
            }
            component2316Props={
              servicesPageAlliancesEcosystems3Data.component2316Props
            }
            group5122Props={servicesPageAlliancesEcosystems3Data.group5122Props}
            group645Props={servicesPageAlliancesEcosystems3Data.group645Props}
          />
        </Route>
        <Route path="/services-page-digital-transformation-1">
          <ServicesPageDigitalTransformation1
            {...servicesPageDigitalTransformation1Data}
          />
        </Route>
        <Route path="/services-page-digital-analytics-2">
          <ServicesPageDigitalAnalytics2
            ellipse446="/img/ellipse-446-25@1x.png"
            ellipse447="/img/ellipse-447-10@1x.png"
            digitalAnalytics="Digital Analytics"
            component213Props={
              servicesPageDigitalAnalytics2Data.component213Props
            }
            component2316Props={
              servicesPageDigitalAnalytics2Data.component2316Props
            }
            group5122Props={servicesPageDigitalAnalytics2Data.group5122Props}
            group645Props={servicesPageDigitalAnalytics2Data.group645Props}
          />
        </Route>
        <Route path="/services">
          <Services {...servicesData} />
        </Route>
        <Route path="/about-us">
          <AboutUs {...aboutUsData} />
        </Route>
        <Route path="/contact-us">
          <ContactUs {...contactUsData} />
        </Route>
        <Route path="/product-page">
          <ProductPage {...productPage4Data} />
        </Route>
        <Route path="/products-solutions">
          <ProductsSolutions {...productsSolutions14Data} />
        </Route>
        <Route path="/articles-design">
          <ArticlesDesign {...articlesDesignData} />
        </Route>
        <Route path="/:path(|home-page-12)">
          <HomePage {...homePage12Data} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

const servicesPageDigitalGovernancePolicyData = {
  ellipse446: "/img/ellipse-446-31@1x.png",
  ellipse447: "/img/ellipse-447-17@1x.png",
  digitalGovernancePolicy: "Digital Governance & Policy",
};

const servicesPageCustomerExperience7Data = {
  ellipse446: "/img/ellipse-446-15@1x.png",
  ellipse447: "/img/ellipse-447-16@1x.png",
  customerExperience: "Customer Experience",
};

const servicesPageTechnologyInnovation6Data = {
  ellipse446: "/img/ellipse-446-15@1x.png",
  ellipse447: "/img/ellipse-447-13@1x.png",
  technologyInnovation: "Technology Innovation",
};

const servicesPageBusinessCasePricing4Data = {
  ellipse446: "/img/ellipse-446-25@1x.png",
  ellipse447: "/img/ellipse-447-10@1x.png",
  businessCasePricing: "Business Case & Pricing",
};

const servicesPageCrisisAndDisasterManageData = {
  ellipse446: "/img/ellipse-446-31@1x.png",
  ellipse447: "/img/ellipse-447-14@1x.png",
  crisisAndDisasterManagement: "Crisis and Disaster Management",
};

const servicesPageAlliancesEcosystems3Data = {
  ellipse446: "/img/component-126---1@1x.png",
  ellipse447: "/img/ellipse-447-10@1x.png",
  alliancesEcosystems: "Alliances & Ecosystems",
};

const servicesPageDigitalTransformation1Data = {
  component1191: "/img/component-119---1@1x.png",
  component1201: "/img/component-120---1@1x.png",
  digitalTransformation: "Digital Transformation",
  component1211: "/img/component-121---1@1x.png",
};

const servicesPageDigitalAnalytics2Data = {
  ellipse446: "/img/ellipse-446-25@1x.png",
  ellipse447: "/img/ellipse-447-10@1x.png",
  digitalAnalytics: "Digital Analytics",
};

const component3011Data = {
  dataManagementServices: (
    <React.Fragment>
      Data Management &amp; <br />
      services
    </React.Fragment>
  ),
};

const component3012Data = {
  dataManagementServices: (
    <React.Fragment>
      Cloud Services &amp; <br />
      solutions
    </React.Fragment>
  ),
  className: "component-33-1",
};

const component2512Data = {
  dataCloud: "Integration Services",
  providingACloudCo:
    "Providing a cloud computing model that stores data on the Internet through a cloud computing provider.",
  className: "group-6-2",
};

const component40221Data = {
  component251Props: component2512Data,
};

const component3211Data = {
  infrastructureServices: "Infrastructure Services",
};

const component3422Data = {
  className: "component-34-1",
  info: "In today’s world of ever-changing dynamics and possibilities, it is significant to keep up with its change of pace. To survive, improvise and compete in this marathon-of-change, it is inevitable to adapt and transform to the demands of digital transformation.",
  title: "Digital Transformation",
};

const component3522Data = {
  className: "component-35-1",
  info: "While analytics play an important role in decision making, digital analytics can take you a step further providing you with an edge. Digital analytics help you not only by gaining insights, but also by assisting you in intelligent, accurate and timely decision making.",
  title: "Digital Analytics",
};

const component3622Data = {
  className: "component-36-1",
  info: "In Today’s Exceedingly Interconnected World, Establishing Meaningful And Sustainable Partnerships Are Incredibly Important. Building Strategic Alliances Is Extremely Inevitable For Organizations To Thrive And Perform Better.",
  title: "Alliances & Ecosystems",
};

const group63623Data = {
  technologyInnovation: "Business Case & Pricing",
  evolvingChallenges:
    "Pricing is one of the most important components that can multiply profits if set intelligently. While setting the optimum prices can yield higher revenues, over-pricing or underpricing can impact customer’s value for money or revenue targets, respectively.",
};

const group636244Data = {
  technologyInnovation: "Crisis and Disaster Management",
  evolvingChallenges:
    "Disruptions, crisis, disasters, and threats pose a substantial risk to the functionality and operations of an organization leading to severe adverse consequences if not tackled.",
};

const group63625Data = {
  technologyInnovation: "Technology Innovation",
  evolvingChallenges:
    "Evolving Challenges, Unique Opportunities, Complex Working Methodologies, New Operational Strategies And Tech-Enabled Practices Are Now An Incredibly Common Phenomena In The Ever-Changing Workplaces.",
};

const component2513Data = {
  dataCloud: "Customer Experience",
  providingACloudCo:
    "Providing pleasant customer experience is the backbone in the success of organizations. Any organization, no matter how big or small, yearns to exceed customer expectations by adapting various methods such as value-for-money, customized and personalized products and services, and memorable customer experience.",
};

const component2519Data = {
  dataCloud: "Digital Governance & Policy",
  providingACloudCo:
    "Data Is One Of The Key Elements For Organisations To Make Every Day Important Decisions. While Data Is Readily Available, It Is Significant That The Right Governing Policies Are In Place To Usefully Utilise It. For Any Organisation, The Importance To Analyse, Decode, Secure, Store And Access Data And Information Is Of Absolute Importance.",
};

const group63624Data = {
  technologyInnovation: "Digital Governance & Policy",
  evolvingChallenges:
    "Data Is One Of The Key Elements For Organisations To Make Every Day Important Decisions. While Data Is Readily Available, It Is Significant That The Right Governing Policies Are In Place To Usefully Utilise It. For Any Organisation, The Importance To Analyse, Decode, Secure, Store And Access Data And Information Is Of Absolute Importance.",
  className: "group-636-4",
};

const component4122Data = {
  group6362Props: group63624Data,
};

const component271Data = {
  title: (
    <React.Fragment>
      Business &amp; <br />
      mobile Applications
    </React.Fragment>
  ),
  desc: "Using technological developments changing lives of individuals and the practice of (almost) every aspect of business.",
};

const component272Data = {
  className: "left-space",
  title: "Enterprise Digital Platforms",

  desc: "Providing a cloud computing model that stores data on the Internet through a cloud computing provider.",
};

const component273Data = {
  className: "left-space",
  title: "Web Development",
  desc: "Outsourcing organizational change to a third-party vendor with experience in helping organizations improve processes.",
};

const component2514Data = {
  dataCloud: "Enterprise Digital Platforms",
  providingACloudCo:
    "Providing a cloud computing model that stores data on the Internet through a cloud computing provider.",
  className: "group-6",
};

const component40222Data = {
  className: "component-28-10",
  component251Props: component2514Data,
};

const component3212Data = {
  infrastructureServices: "Web Development",
  className: "component-29-1",
};

const group36335Data = {
  group363: "/img/path-1335-11@1x.png",
  path1336: "/img/path-1336-10@1x.png",
  className: "group-363-17-1",
};

const group5059Data = {
  path1333: "/img/path-1333-11@1x.png",
  path1334: "/img/path-1333-11@1x.png",
  path1337: "/img/path-1337-11@1x.png",
  path1338: "/img/path-1338-11@1x.png",
  path1339: "/img/path-1339-11@1x.png",
  path1340: "/img/path-1340-11@1x.png",
  path1341: "/img/path-1341-23@1x.png",
  path1342: "/img/path-1342-10@1x.png",
  path1343: "/img/path-1343-11@1x.png",
  path1344: "/img/path-1344-11@1x.png",
  path1345: "/img/path-1345-1@1x.png",
  path1346: "/img/path-1346-11@1x.png",
  path1347: "/img/path-1347-11@1x.png",
  group363Props: group36335Data,
};

const group508410Data = {
  group505Props: group5059Data,
};

const component221733Data = {
  children: "Products & Solutions",
};

const component22161Data = {
  children: "Services",
};

const component221734Data = {
  children: "About us",
  className: "component-22-15-8",
};

const component221735Data = {
  children: "Contact",
  className: "component-22-14-8",
};

const component215Data = {
  group508Props: group508410Data,
  component22171Props: component221733Data,
  component2216Props: component22161Data,
  component22172Props: component221734Data,
  component22173Props: component221735Data,
};

const group36336Data = {
  group363: "/img/path-1335-10@1x.png",
  path1336: "/img/path-1336-10@1x.png",
  className: "group-363-17",
};

const group50629Data = {
  className: "",
};

const component221333Data = {
  children: "Products & Solutions",
};

const component221334Data = {
  children: "Services",
  className: "component-22-12-8",
};

const component221335Data = {
  children: "About us",
  className: "component-22-11-8",
};

const component221336Data = {
  children: "Contact",
  className: "component-22-10-8",
};

const group5939Data = {
  component22131Props: component221333Data,
  component22132Props: component221334Data,
  component22133Props: component221335Data,
  component22134Props: component221336Data,
};

const component23169Data = {
  path1333: "/img/path-1333-10@1x.png",
  path1334: "/img/path-1333-10@1x.png",
  path1337: "/img/path-1337-10@1x.png",
  path1338: "/img/path-1338-10@1x.png",
  path1340: "/img/path-1340-10@1x.png",
  path1341: "/img/path-1341-22@1x.png",
  path1342: "/img/path-1342-10@1x.png",
  path1344: "/img/path-1344-10@1x.png",
  path1345: "/img/path-1345-22@1x.png",
  path1347: "/img/path-1347-10@1x.png",
  group363Props: group36336Data,
  group5062Props: group50629Data,
  group593Props: group5939Data,
};

const component181418Data = {
  src: "/img/twitter-11@1x.png",
};

const group51618Data = {
  className: "",
};

const group51211Data = {
  className: "group-512-9",
  component1814Props: component181418Data,
  group516Props: group51618Data,
};

const group38718Data = {
  group386: "/img/path-1355-12@1x.png",
  path1354: "/img/path-1353-10@1x.png",
  path1358: "/img/path-1358-11@1x.png",
  path1359: "/img/path-1358-2@1x.png",
  path1360: "/img/path-1360-13@1x.png",
  path1361: "/img/path-1361-10@1x.png",
  path1362: "/img/path-1362-11@1x.png",
  path1363: "/img/path-1363-10@1x.png",
  path1365: "/img/path-1360-19@1x.png",
  path1366: "/img/path-1366-11@1x.png",
  path1367: "/img/path-1367-13@1x.png",
  className: "group-387-17",
};

const group3889Data = {
  group351: "/img/path-693-10@1x.png",
  twitter: "/img/twitter-10@1x.png",
  group352: "/img/path-694-11@1x.png",
  path695: "/img/path-695-10@1x.png",
  group353: "/img/path-697-11@1x.png",
  path699: "/img/path-699-11@1x.png",
  group354: "/img/path-696-13@1x.png",
  dribbble: "/img/dribbble-13@1x.png",
  group355: "/img/path-700-4@1x.png",
  polygon16: "/img/polygon16-10@1x.png",
  className: "group-388-17",
  group387Props: group38718Data,
};

const group3509Data = {
  className: "group-350-17",
};

const servicesData = {
  component1071: "/img/component-107---1@1x.png",
  component1061: "/img/component-106---1@1x.png",
  component1051: "/img/component-120---1@1x.png",
  services: "Services",
  loremIpsumDolorSi:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  usingTechnological: (
    <React.Fragment>
      Using technological developments changing lives of individuals and the
      practice <br />
      of (almost) every aspect of business.
    </React.Fragment>
  ),
  component931: "/img/component-121---1@1x.png",
  technologyDevelopment: "Technology Development",
  dataCloud: "Data & Cloud",
  providingACloudCo:
    "Providing a cloud computing model that stores data on the Internet through a cloud computing provider.",
  outsourcingOrganiza: (
    <React.Fragment>
      Outsourcing organizational change to a third-party vendor with experience
      in helping <br />
      oganizations improve processes.
    </React.Fragment>
  ),
  transformationProfessionalServices: "Transformation & Professional Services",
  group610: "/img/component-108---1@1x.png",
  copyrights2021Ai: "Copyrights © 2021 AINOVAS All Rights Reserved",
  component3011Props: component3011Data,
  component3012Props: component3012Data,
  component40221Props: component40221Data,
  component3211Props: component3211Data,
  component342Props: component3422Data,
  component352Props: component3522Data,
  component362Props: component3622Data,
  component392Props: group63623Data,
  component393Props: group636244Data,
  component394Props: group63625Data,
  component402Props: component2513Data,
  component403Props: component2519Data,
  component271Props: component271Data,
  component272Props: component272Data,
  component273Props: component273Data,
  component40222Props: component40222Data,
  component3212Props: component3212Data,
  component215Props: component215Data,
  component2316Props: component23169Data,
  group512Props: group51211Data,
  group388Props: group3889Data,
  group350Props: group3509Data,
};

const group36337Data = {
  group363: "/img/path-1335-11@1x.png",
  path1336: "/img/path-1336-10@1x.png",
  className: "group-363-18-1",
};

const group50510Data = {
  path1333: "/img/path-1333-11@1x.png",
  path1334: "/img/path-1333-11@1x.png",
  path1337: "/img/path-1337-11@1x.png",
  path1338: "/img/path-1338-11@1x.png",
  path1339: "/img/path-1339-11@1x.png",
  path1340: "/img/path-1340-11@1x.png",
  path1341: "/img/path-1341-23@1x.png",
  path1342: "/img/path-1342-10@1x.png",
  path1343: "/img/path-1343-11@1x.png",
  path1344: "/img/path-1344-11@1x.png",
  path1345: "/img/path-1345-1@1x.png",
  path1346: "/img/path-1346-11@1x.png",
  path1347: "/img/path-1347-11@1x.png",
  group363Props: group36337Data,
};

const group508411Data = {
  group505Props: group50510Data,
};

const component221736Data = {
  children: "Products & Solutions",
};

const component221737Data = {
  children: "Services",
  className: "component-22-16-8",
};

const component22162Data = {
  children: "About us",
  className: "component-22-15-15",
};

const component221738Data = {
  children: "Contact",
  className: "component-22-14-9",
};

const component216Data = {
  group508Props: group508411Data,
  component22171Props: component221736Data,
  component22172Props: component221737Data,
  component2216Props: component22162Data,
  component22173Props: component221738Data,
};

const group36338Data = {
  group363: "/img/path-1335-10@1x.png",
  path1336: "/img/path-1336-10@1x.png",
  className: "group-363-18",
};

const group506210Data = {
  className: "",
};

const component221337Data = {
  children: "Products & Solutions",
};

const component221338Data = {
  children: "Services",
  className: "component-22-12-9",
};

const component221339Data = {
  children: "About us",
  className: "component-22-11-9",
};

const component221340Data = {
  children: "Contact",
  className: "component-22-10-9",
};

const group59310Data = {
  component22131Props: component221337Data,
  component22132Props: component221338Data,
  component22133Props: component221339Data,
  component22134Props: component221340Data,
};

const component231610Data = {
  path1333: "/img/path-1333-10@1x.png",
  path1334: "/img/path-1333-10@1x.png",
  path1337: "/img/path-1337-10@1x.png",
  path1338: "/img/path-1338-10@1x.png",
  path1340: "/img/path-1340-10@1x.png",
  path1341: "/img/path-1341-22@1x.png",
  path1342: "/img/path-1342-10@1x.png",
  path1344: "/img/path-1344-10@1x.png",
  path1345: "/img/path-1345-22@1x.png",
  path1347: "/img/path-1347-10@1x.png",
  className: "component-23-6",
  group363Props: group36338Data,
  group5062Props: group506210Data,
  group593Props: group59310Data,
};

const component181419Data = {
  src: "/img/twitter-11@1x.png",
};

const group51619Data = {
  className: "",
};

const group51212Data = {
  className: "group-512-10",
  component1814Props: component181419Data,
  group516Props: group51619Data,
};

const group7271Data = {
  spanText2: "lient ",
  spanText3: "E",
  spanText4: "nablement",
  weEquipOurClien: (
    <React.Fragment>
      - We equip our client&#x27;s team with the right tolls and methodologies
      to drive the transformation themselves by heavily focusing on knowledge
      transfer and capabilities development
      <br />
      <br />- We ensure lasting impact and celebrate our client’s achievement,
      since their success is our success
    </React.Fragment>
  ),
};

const group7272Data = {
  spanText2: "lient-",
  spanText3: "C",
  spanText4: "entricity",
  weEquipOurClien: (
    <React.Fragment>
      - We adapt our offering to our clients by providing a practical and
      flexible work model <br />
      <br />- We create exceptional, highly and sustainable outcomes for our
      clients, addressing their needs and ambitions
    </React.Fragment>
  ),
  className: "group-726-3",
};

const group38719Data = {
  group386: "/img/path-1355-12@1x.png",
  path1354: "/img/path-1353-10@1x.png",
  path1358: "/img/path-1358-11@1x.png",
  path1359: "/img/path-1358-2@1x.png",
  path1360: "/img/path-1360-13@1x.png",
  path1361: "/img/path-1361-10@1x.png",
  path1362: "/img/path-1362-11@1x.png",
  path1363: "/img/path-1363-10@1x.png",
  path1365: "/img/path-1360-19@1x.png",
  path1366: "/img/path-1366-11@1x.png",
  path1367: "/img/path-1367-13@1x.png",
  className: "group-387-18",
};

const group38810Data = {
  group351: "/img/path-693-10@1x.png",
  twitter: "/img/twitter-10@1x.png",
  group352: "/img/path-694-11@1x.png",
  path695: "/img/path-695-10@1x.png",
  group353: "/img/path-697-11@1x.png",
  path699: "/img/path-699-11@1x.png",
  group354: "/img/path-696-13@1x.png",
  dribbble: "/img/dribbble-13@1x.png",
  group355: "/img/path-700-11@1x.png",
  polygon16: "/img/polygon16-10@1x.png",
  className: "group-388-18",
  group387Props: group38719Data,
};

const group35010Data = {
  className: "group-350-18",
};

const group35622Data = {
  group388Props: group38810Data,
  group350Props: group35010Data,
};

const aboutUsData = {
  component951: "/img/ellipse-446-13@1x.png",
  component961: "/img/ellipse-447-6@1x.png",
  component941: "/img/component-94---1@1x.png",
  weAreJmmInnovations: "We are JMM INNOVATIONS",
  loremIpsumDolorSi1: (
    <React.Fragment>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
      <br />
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut
    </React.Fragment>
  ),
  missionStatement: "Mission Statement",
  corporatePurposeStatement: "Corporate purpose statement",
  loremIpsumDolorSi2: (
    <React.Fragment>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
      <br />
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut
    </React.Fragment>
  ),
  loremIpsumDolorSi3: (
    <React.Fragment>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
      <br />
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut
    </React.Fragment>
  ),
  group599: "/img/component-111---1@1x.png",
  ourValues: (
    <React.Fragment>
      Our
      <br />
      VALUES
    </React.Fragment>
  ),
  component991: "/img/component-70---1@1x.png",
  loremIpsumDolorSi4:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  valueTitle1: "VALUE TITLE",
  loremIpsumDolorSi5:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum",
  valueTitle2: "VALUE TITLE",
  loremIpsumDolorSi6:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum",
  valueTitle3: "VALUE TITLE",
  loremIpsumDolorSi7:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum",
  valueTitle4: "VALUE TITLE",
  loremIpsumDolorSi8:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum",
  valueTitle5: "VALUE TITLE",
  loremIpsumDolorSi9:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum",
  valueTitle6: "VALUE TITLE",
  loremIpsumDolorSi10:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum",
  valueProposition: "Value Proposition",
  component981: "/img/component-113---1@1x.png",
  loremIpsumDolorSi11:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  spanText1: "A",
  spanText2: (
    <React.Fragment>
      gile &amp; <br />
    </React.Fragment>
  ),
  spanText3: "E",
  spanText4: "nteprentual ",
  spanText5: "M",
  spanText6: "indset",
  weChallengeTheS: (
    <React.Fragment>
      - We challenge the status quo and adapt practices and solutions to
      tomorrow’s requirements.
      <br />
      <br />- We help our clients be “game changers” in their environment by
      promoting groundbreaking innovation and out of the box thinking.
    </React.Fragment>
  ),
  spanText7: "P",
  spanText8: "artnership",
  weArePartnersN: (
    <React.Fragment>
      - We are partners, not vendors – we act as strategic long-term partners
      and trusted advisors to our clients
      <br />
      <br />- We strive to engage our clients in every step along the way – we
      work together as one team throughout the project and after it.
    </React.Fragment>
  ),
  overlapGroup9: "/img/component-100---1@1x.png",
  ourInsights: (
    <React.Fragment>
      Our
      <br />
      Insights
    </React.Fragment>
  ),
  loremIpsumDolorSi12:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum",
  text386: "200+",
  customers: "Customers",
  number: "85",
  staff: "Staff",
  text387: "20+",
  projects: "Projects",
  component1151: "/img/component-115---1@1x.png",
  component1141: "/img/component-114---1@1x.png",
  component216Props: component216Data,
  component2316Props: component231610Data,
  group512Props: group51212Data,
  group7271Props: group7271Data,
  group7272Props: group7272Data,
  group3562Props: group35622Data,
};

const group4991Data = {
  pngwingCom_1__1: "/img/pngwing-com--1--1@1x.png",
  className: "",
};

const group4981Data = {
  toppngComIconMailPngTransparentBack:
    "/img/toppng-com-icon-mail-png-transparent-background-mail-logo-1024x1@1x.png",
  group499Props: group4991Data,
};

const group36339Data = {
  group363: "/img/path-1335-11@1x.png",
  path1336: "/img/path-1336-10@1x.png",
  className: "group-363-19-1",
};

const group50511Data = {
  path1333: "/img/path-1333-11@1x.png",
  path1334: "/img/path-1333-11@1x.png",
  path1337: "/img/path-1337-11@1x.png",
  path1338: "/img/path-1338-11@1x.png",
  path1339: "/img/path-1339-11@1x.png",
  path1340: "/img/path-1340-11@1x.png",
  path1341: "/img/path-1341-23@1x.png",
  path1342: "/img/path-1342-10@1x.png",
  path1343: "/img/path-1343-11@1x.png",
  path1344: "/img/path-1344-11@1x.png",
  path1345: "/img/path-1345-1@1x.png",
  path1346: "/img/path-1346-11@1x.png",
  path1347: "/img/path-1347-11@1x.png",
  group363Props: group36339Data,
};

const group508412Data = {
  group505Props: group50511Data,
};

const component221739Data = {
  children: "Products & Solutions",
};

const component221740Data = {
  children: "Services",
  className: "component-22-16-9",
};

const component221741Data = {
  children: "About us",
  className: "component-22-15-9",
};

const component22163Data = {
  children: "Contact",
  className: "component-22-14-15",
};

const component217Data = {
  group508Props: group508412Data,
  component22171Props: component221739Data,
  component22172Props: component221740Data,
  component22173Props: component221741Data,
  component2216Props: component22163Data,
};

const group36340Data = {
  group363: "/img/path-1335-10@1x.png",
  path1336: "/img/path-1336-10@1x.png",
  className: "group-363-19",
};

const group506211Data = {
  className: "",
};

const component221341Data = {
  children: "Products & Solutions",
};

const component221342Data = {
  children: "Services",
  className: "component-22-12-10",
};

const component221343Data = {
  children: "About us",
  className: "component-22-11-10",
};

const component221344Data = {
  children: "Contact",
  className: "component-22-10-10",
};

const group59311Data = {
  component22131Props: component221341Data,
  component22132Props: component221342Data,
  component22133Props: component221343Data,
  component22134Props: component221344Data,
};

const component231611Data = {
  path1333: "/img/path-1333-10@1x.png",
  path1334: "/img/path-1333-10@1x.png",
  path1337: "/img/path-1337-10@1x.png",
  path1338: "/img/path-1338-10@1x.png",
  path1340: "/img/path-1340-10@1x.png",
  path1341: "/img/path-1341-22@1x.png",
  path1342: "/img/path-1342-10@1x.png",
  path1344: "/img/path-1344-10@1x.png",
  path1345: "/img/path-1345-22@1x.png",
  path1347: "/img/path-1347-10@1x.png",
  group363Props: group36340Data,
  group5062Props: group506211Data,
  group593Props: group59311Data,
};

const component181420Data = {
  src: "/img/twitter-11@1x.png",
};

const group51620Data = {
  className: "",
};

const group51213Data = {
  className: "group-512-11",
  component1814Props: component181420Data,
  group516Props: group51620Data,
};

const group56621Data = {
  src: "/img/group-517-21@1x.png",
  className: "group-528-1",
};

const maskGroup117Data = {
  group566Props: group56621Data,
};

const group38720Data = {
  group386: "/img/path-1355-11@1x.png",
  path1354: "/img/path-1353-10@1x.png",
  path1358: "/img/path-1358-11@1x.png",
  path1359: "/img/path-1358-2@1x.png",
  path1360: "/img/path-1360-11@1x.png",
  path1361: "/img/path-1361-10@1x.png",
  path1362: "/img/path-1362-11@1x.png",
  path1363: "/img/path-1363-10@1x.png",
  path1365: "/img/path-1365-11@1x.png",
  path1366: "/img/path-1366-11@1x.png",
  path1367: "/img/path-1367-11@1x.png",
  className: "group-387-19",
};

const group38811Data = {
  group351: "/img/path-693-10@1x.png",
  twitter: "/img/twitter-10@1x.png",
  group352: "/img/path-694-11@1x.png",
  path695: "/img/path-695-10@1x.png",
  group353: "/img/path-697-11@1x.png",
  path699: "/img/path-699-11@1x.png",
  group354: "/img/path-696-11@1x.png",
  dribbble: "/img/dribbble-11@1x.png",
  group355: "/img/path-700-11@1x.png",
  polygon16: "/img/polygon16-10@1x.png",
  className: "group-388-19",
  group387Props: group38720Data,
};

const group35011Data = {
  className: "group-350-19",
};

const group35623Data = {
  className: "group-356-11",
  group388Props: group38811Data,
  group350Props: group35011Data,
};

const contactUsData = {
  overlapGroup5: "/img/component-102---1@1x.png",
  contactUs: "Contact us",
  loremIpsumDolorSi1:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  fullName: "Full Name",
  company: "Company",
  business: "Business",
  chevronDown11: "/img/chevron-down--1--1@1x.png",
  emailAddress: "Email address",
  youremailMailCom: "Youremail@mail.com",
  phoneNumber: "Phone number",
  text388: "+97",
  country: "Country",
  city: "City",
  chevronDown12: "/img/chevron-down--1--1@1x.png",
  typeHere: "Type here ...",
  group424: "/img/subtraction-1-4@1x.png",
  sendMessage: "Send Message",
  loremIpsumDolorSi2:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  group498Props: group4981Data,
  component217Props: component217Data,
  component2316Props: component231611Data,
  group512Props: group51213Data,
  maskGroup1Props: maskGroup117Data,
  group3562Props: group35623Data,
};

const group36342Data = {
  group363: "/img/path-1335-11@1x.png",
  path1336: "/img/path-1336-10@1x.png",
  className: "group-363-20",
};

const group50512Data = {
  path1333: "/img/path-1333-11@1x.png",
  path1334: "/img/path-1333-11@1x.png",
  path1337: "/img/path-1337-11@1x.png",
  path1338: "/img/path-1338-11@1x.png",
  path1339: "/img/path-1339-11@1x.png",
  path1340: "/img/path-1340-11@1x.png",
  path1341: "/img/path-1341-23@1x.png",
  path1342: "/img/path-1342-10@1x.png",
  path1343: "/img/path-1343-11@1x.png",
  path1344: "/img/path-1344-11@1x.png",
  path1345: "/img/path-1345-1@1x.png",
  path1346: "/img/path-1346-11@1x.png",
  path1347: "/img/path-1347-11@1x.png",
  group363Props: group36342Data,
};

const group508413Data = {
  group505Props: group50512Data,
};

const component221742Data = {
  children: "Products & Solutions",
};

const component221743Data = {
  children: "Services",
  className: "component-22-16-10",
};

const component221744Data = {
  children: "About us",
  className: "component-22-15-10",
};

const component221745Data = {
  children: "Contact",
  className: "component-22-14-10",
};

const group6069Data = {
  component22171Props: component221742Data,
  component22172Props: component221743Data,
  component22173Props: component221744Data,
  component22174Props: component221745Data,
};

const component2139Data = {
  className: "nav-top",
  group505Props: group508413Data,
  group606Props: group6069Data,
};

const component181421Data = {
  src: "/img/twitter-11@1x.png",
};

const group51621Data = {
  className: "",
};

const group51214Data = {
  className: "quick-1",
  component1814Props: component181421Data,
  group516Props: group51621Data,
};

const group38721Data = {
  group386: "/img/path-1355-11@1x.png",
  path1354: "/img/path-1353-10@1x.png",
  path1358: "/img/path-1358-11@1x.png",
  path1359: "/img/path-1358-2@1x.png",
  path1360: "/img/path-1360-11@1x.png",
  path1361: "/img/path-1361-10@1x.png",
  path1362: "/img/path-1362-11@1x.png",
  path1363: "/img/path-1363-10@1x.png",
  path1365: "/img/path-1365-11@1x.png",
  path1366: "/img/path-1366-11@1x.png",
  path1367: "/img/path-1367-11@1x.png",
  className: "group-387-20",
};

const group38812Data = {
  group351: "/img/path-693-10@1x.png",
  twitter: "/img/twitter-10@1x.png",
  group352: "/img/path-694-11@1x.png",
  path695: "/img/path-695-10@1x.png",
  group353: "/img/path-697-11@1x.png",
  path699: "/img/path-699-11@1x.png",
  group354: "/img/path-696-11@1x.png",
  dribbble: "/img/dribbble-11@1x.png",
  group355: "/img/path-700-11@1x.png",
  polygon16: "/img/polygon16-10@1x.png",
  className: "group-388-20",
  group387Props: group38721Data,
};

const group35012Data = {
  className: "group-350-20",
};

const group35624Data = {
  className: "group-356-12",
  group388Props: group38812Data,
  group350Props: group35012Data,
};

const productPage4Data = {
  web136620: "/img/web-1366---20-1@1x.png",
  kiuWebPortal: "KIU - WEB PORTAL",
  component1231: "/img/component-121---1@1x.png",
  loremIpsumDolorSi1:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  footer: "/img/component-122---1@1x.png",
  component213Props: component2139Data,
  group512Props: group51214Data,
  group3562Props: group35624Data,
};

const component181422Data = {
  src: "/img/twitter-11@1x.png",
};

const group51622Data = {
  className: "group-516-1",
};

const group354222Data = {
  component871: "/img/component-87---1@1x.png",
};

const group35471Data = {
  component881: "/img/component-88---1@1x.png",
};

const group354223Data = {
  component871: "/img/component-89---1@1x.png",
};

const group35472Data = {
  component881: "/img/component-90---1@1x.png",
  className: "group-3547-2",
};

const group35761Data = {
  group35422Props: group354223Data,
  group3547Props: group35472Data,
};

const group354224Data = {
  component871: "/img/component-91---1@1x.png",
};

const group35473Data = {
  component881: "/img/component-92---1@1x.png",
  className: "group-3547-2",
};

const group35762Data = {
  group35422Props: group354224Data,
  group3547Props: group35473Data,
};

const group56622Data = {
  src: "/img/group-517-10@1x.png",
  className: "group-528-1",
};

const maskGroup118Data = {
  group566Props: group56622Data,
};

const group38722Data = {
  group386: "/img/path-1355-11@1x.png",
  path1354: "/img/path-1353-10@1x.png",
  path1358: "/img/path-1358-2@1x.png",
  path1359: "/img/path-1358-2@1x.png",
  path1360: "/img/path-1360-11@1x.png",
  path1361: "/img/path-1361-4@1x.png",
  path1362: "/img/path-1362-10@1x.png",
  path1363: "/img/path-1363-10@1x.png",
  path1365: "/img/path-1365-11@1x.png",
  path1366: "/img/path-1366-11@1x.png",
  path1367: "/img/path-1367-1@1x.png",
  className: "group-387-21",
};

const group38813Data = {
  group351: "/img/path-693-10@1x.png",
  twitter: "/img/twitter-10@1x.png",
  group352: "/img/path-694-10@1x.png",
  path695: "/img/path-695-10@1x.png",
  group353: "/img/path-697-11@1x.png",
  path699: "/img/path-699-10@1x.png",
  group354: "/img/path-696-4@1x.png",
  dribbble: "/img/dribbble-11@1x.png",
  group355: "/img/path-700-4@1x.png",
  polygon16: "/img/polygon16-10@1x.png",
  className: "group-388-21",
  group387Props: group38722Data,
};

const group35013Data = {
  className: "group-350-21",
};

const group36343Data = {
  group363: "/img/path-1335-11@1x.png",
  path1336: "/img/path-1336-10@1x.png",
  className: "group-363-21-1",
};

const group50513Data = {
  path1333: "/img/path-1333-11@1x.png",
  path1334: "/img/path-1333-11@1x.png",
  path1337: "/img/path-1337-13@1x.png",
  path1338: "/img/path-1338-13@1x.png",
  path1339: "/img/path-1339-11@1x.png",
  path1340: "/img/path-1340-11@1x.png",
  path1341: "/img/path-1341-13@1x.png",
  path1342: "/img/path-1342-1@1x.png",
  path1343: "/img/path-1343-11@1x.png",
  path1344: "/img/path-1344-11@1x.png",
  path1345: "/img/path-1345-1@1x.png",
  path1346: "/img/path-1346-11@1x.png",
  path1347: "/img/path-1347-13@1x.png",
  group363Props: group36343Data,
};

const group508414Data = {
  group505Props: group50513Data,
};

const component221746Data = {
  children: "Products & Solutions",
};

const component221747Data = {
  children: "Services",
  className: "component-22-16-11",
};

const component221748Data = {
  children: "About us",
  className: "component-22-15-11",
};

const component221749Data = {
  children: "Contact",
  className: "component-22-14-11",
};

const group60610Data = {
  component22171Props: component221746Data,
  component22172Props: component221747Data,
  component22173Props: component221748Data,
  component22174Props: component221749Data,
};

const component21310Data = {
  className: "top",
  group505Props: group508414Data,
  group606Props: group60610Data,
};

const group36344Data = {
  group363: "/img/path-1335-10@1x.png",
  path1336: "/img/path-1336-10@1x.png",
  className: "group-363-21",
};

const group506213Data = {
  className: "",
};

const component221349Data = {
  children: "Products & Solutions",
};

const component221350Data = {
  children: "Services",
  className: "component-22-12-12",
};

const component221351Data = {
  children: "About us",
  className: "component-22-11-12",
};

const component221352Data = {
  children: "Contact",
  className: "component-22-10-12",
};

const group59313Data = {
  component22131Props: component221349Data,
  component22132Props: component221350Data,
  component22133Props: component221351Data,
  component22134Props: component221352Data,
};

const component231613Data = {
  path1333: "/img/path-1333-10@1x.png",
  path1334: "/img/path-1333-10@1x.png",
  path1337: "/img/path-1337-12@1x.png",
  path1338: "/img/path-1338-12@1x.png",
  path1340: "/img/path-1340-10@1x.png",
  path1341: "/img/path-1341-12@1x.png",
  path1342: "/img/path-1342-1@1x.png",
  path1344: "/img/path-1344-10@1x.png",
  path1345: "/img/path-1345-22@1x.png",
  path1347: "/img/path-1347-12@1x.png",
  className: "lower",
  group363Props: group36344Data,
  group5062Props: group506213Data,
  group593Props: group59313Data,
};

const productsSolutions14Data = {
  ellipse4461: "/img/ellipse-446-8@1x.png",
  ellipse447: "/img/ellipse-447-4@1x.png",
  productsSolutions: "Products & Solutions",
  loremIpsumDolorSi:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  component861: "/img/component-121---1@1x.png",
  ellipse4462: "/img/ellipse-446-11@1x.png",
  rectangle173: "/img/rectangle-173-13@1x.png",
  path1372: "/img/path-1372-13@1x.png",
  copyrights2022Jm: "Copyrights © 2022 JMM Innovations All Rights Reserved",
  component1814Props: component181422Data,
  group516Props: group51622Data,
  group35422Props: group354222Data,
  group3547Props: group35471Data,
  group35761Props: group35761Data,
  group35762Props: group35762Data,
  maskGroup1Props: maskGroup118Data,
  group388Props: group38813Data,
  group350Props: group35013Data,
  component213Props: component21310Data,
  component2316Props: component231613Data,
};

const group5472Data = {
  className: "group-548",
};

const group5473Data = {
  className: "group-549",
};

const group36345Data = {
  group363: "/img/path-1335-11@1x.png",
  path1336: "/img/path-1336-10@1x.png",
  className: "group-363-22-1",
};

const group50514Data = {
  path1333: "/img/path-1333-11@1x.png",
  path1334: "/img/path-1333-11@1x.png",
  path1337: "/img/path-1337-11@1x.png",
  path1338: "/img/path-1338-11@1x.png",
  path1339: "/img/path-1339-11@1x.png",
  path1340: "/img/path-1340-11@1x.png",
  path1341: "/img/path-1341-23@1x.png",
  path1342: "/img/path-1342-10@1x.png",
  path1343: "/img/path-1343-11@1x.png",
  path1344: "/img/path-1344-11@1x.png",
  path1345: "/img/path-1345-1@1x.png",
  path1346: "/img/path-1346-11@1x.png",
  path1347: "/img/path-1347-11@1x.png",
  group363Props: group36345Data,
};

const group508415Data = {
  group505Props: group50514Data,
};

const component221750Data = {
  children: "Products & Solutions",
};

const component221751Data = {
  children: "Services",
  className: "component-22-16-12",
};

const component221752Data = {
  children: "About us",
  className: "component-22-15-12",
};

const component221753Data = {
  children: "Contact",
  className: "component-22-14-12",
};

const group60611Data = {
  component22171Props: component221750Data,
  component22172Props: component221751Data,
  component22173Props: component221752Data,
  component22174Props: component221753Data,
};

const component21311Data = {
  group505Props: group508415Data,
  group606Props: group60611Data,
};

const group36346Data = {
  group363: "/img/path-1335-10@1x.png",
  path1336: "/img/path-1336-10@1x.png",
  className: "group-363-22",
};

const group506214Data = {
  className: "group-506-34",
};

const component221353Data = {
  children: "Products & Solutions",
};

const component221354Data = {
  children: "Services",
  className: "component-22-12-13",
};

const component221355Data = {
  children: "About us",
  className: "component-22-11-13",
};

const component221356Data = {
  children: "Contact",
  className: "component-22-10-13",
};

const group59314Data = {
  component22131Props: component221353Data,
  component22132Props: component221354Data,
  component22133Props: component221355Data,
  component22134Props: component221356Data,
};

const component231614Data = {
  path1333: "/img/path-1333-10@1x.png",
  path1334: "/img/path-1333-10@1x.png",
  path1337: "/img/path-1337-10@1x.png",
  path1338: "/img/path-1338-10@1x.png",
  path1340: "/img/path-1340-10@1x.png",
  path1341: "/img/path-1341-22@1x.png",
  path1342: "/img/path-1342-10@1x.png",
  path1344: "/img/path-1344-10@1x.png",
  path1345: "/img/path-1345-22@1x.png",
  path1347: "/img/path-1347-10@1x.png",
  group363Props: group36346Data,
  group5062Props: group506214Data,
  group593Props: group59314Data,
};

const component181423Data = {
  src: "/img/twitter-11@1x.png",
};

const group51623Data = {
  className: "",
};

const group51215Data = {
  className: "group-512-12",
  component1814Props: component181423Data,
  group516Props: group51623Data,
};

const group56623Data = {
  src: "/img/group-517-21@1x.png",
  className: "group-528-1",
};

const maskGroup119Data = {
  group566Props: group56623Data,
};

const group38723Data = {
  group386: "/img/path-1355-11@1x.png",
  path1354: "/img/path-1353-10@1x.png",
  path1358: "/img/path-1358-11@1x.png",
  path1359: "/img/path-1358-2@1x.png",
  path1360: "/img/path-1360-11@1x.png",
  path1361: "/img/path-1361-10@1x.png",
  path1362: "/img/path-1362-11@1x.png",
  path1363: "/img/path-1363-1@1x.png",
  path1365: "/img/path-1365-11@1x.png",
  path1366: "/img/path-1366-1@1x.png",
  path1367: "/img/path-1367-1@1x.png",
  className: "group-387-22",
};

const group38814Data = {
  group351: "/img/path-693-10@1x.png",
  twitter: "/img/twitter-10@1x.png",
  group352: "/img/path-694-11@1x.png",
  path695: "/img/path-695-10@1x.png",
  group353: "/img/path-697-11@1x.png",
  path699: "/img/path-699-11@1x.png",
  group354: "/img/path-696-11@1x.png",
  dribbble: "/img/dribbble-11@1x.png",
  group355: "/img/path-700-11@1x.png",
  polygon16: "/img/polygon16-10@1x.png",
  className: "group-388-22",
  group387Props: group38723Data,
};

const group6458Data = {
  className: "group-645-7",
  maskGroup1Props: maskGroup119Data,
  group388Props: group38814Data,
};

const articlesDesignData = {
  component1261: "/img/component-126---1@1x.png",
  component1271: "/img/component-120---1@1x.png",
  articleTitleHere: "Article Title here",
  component1251: "/img/component-121---1@1x.png",
  youMightLike: "You Might Like",
  group5471Props: group5472Data,
  group5472Props: group5473Data,
  component213Props: component21311Data,
  component2316Props: component231614Data,
  group512Props: group51215Data,
  group645Props: group6458Data,
};

const group50617Data = {
  className: "group-506-33",
};

const component221758Data = {
  children: "Products & Solutions",
};

const component221759Data = {
  children: "Services",
  className: "component-22-16-14",
};

const component221760Data = {
  children: "About us",
  className: "component-22-15-14",
};

const component221761Data = {
  children: "Contact",
  className: "component-22-14-14",
};

const group60613Data = {
  component22171Props: component221758Data,
  component22172Props: component221759Data,
  component22173Props: component221760Data,
  component22174Props: component221761Data,
};

const component212Data = {
  logo: "/img/logo@1x.png",
  group506Props: group50617Data,
  group606Props: group60613Data,
};

const group36349Data = {
  group363: "/img/path-1335-20@1x.png",
  path1336: "/img/path-1336-10@1x.png",
  className: "group-363-24",
};

const group506216Data = {
  className: "",
};

const component221361Data = {
  children: "Products & Solutions",
};

const component221362Data = {
  children: "Services",
  className: "component-22-12-15",
};

const component221363Data = {
  children: "About us",
  className: "component-22-11-15",
};

const component221364Data = {
  children: "Contact",
  className: "component-22-10-15",
};

const group59316Data = {
  component22131Props: component221361Data,
  component22132Props: component221362Data,
  component22133Props: component221363Data,
  component22134Props: component221364Data,
};

const component231615Data = {
  path1333: "/img/path-1333-10@1x.png",
  path1334: "/img/path-1334-20@1x.png",
  path1337: "/img/path-1337-10@1x.png",
  path1338: "/img/path-1338-12@1x.png",
  path1340: "/img/path-1340-20@1x.png",
  path1341: "/img/path-1341-10@1x.png",
  path1342: "/img/path-1342-1@1x.png",
  path1344: "/img/path-1337-12@1x.png",
  path1345: "/img/path-1345-22@1x.png",
  path1347: "/img/path-1347-12@1x.png",
  className: "component-23-2",
  group363Props: group36349Data,
  group5062Props: group506216Data,
  group593Props: group59316Data,
};

const component5433Data = {
  component651: "/img/component-65---1-1@1x.png",
  knowledgeInternationalUniversity: "Knowledge International University",
};

const component5434Data = {
  component651: "/img/component-66---1@1x.png",
  knowledgeInternationalUniversity: "Title Here",
  className: "group-3561-3",
};

const component2412Data = {
  technologyDevelopment: "Technology Development",
  usingTechnological:
    "Using technological developments changing lives of individuals and the practice of (almost) every aspect of business.",
};

const component2516Data = {
  technologyDevelopment: "Data & Cloud",
  usingTechnological:
    "Providing a cloud computing model that stores data on the Internet through a cloud computing provider.",
};
const component2616Data = {
  technologyDevelopment: (
    <React.Fragment>
      Transformation &amp; <br />
      Professional Services
    </React.Fragment>
  ),
  usingTechnological:
    "Outsourcing organizational change to a third-party vendor with experience in helping organizations improve processes.",
};

const group4902Data = {
  className: "group-765-2",
};

const group4834Data = {
  children: "Branding",
};

const group4843Data = {
  children: "Artificial Intelligence",
};

const group4835Data = {
  children: "Big Data Migrations",
  className: "group-481-1",
};

const group4836Data = {
  children: "Operations Handeling",
  className: "group-48-7",
};

const group4844Data = {
  children: "Business Consultant",
  className: "group-48-9",
};

const group5712Data = {
  group4831Props: group4834Data,
  group4841Props: group4843Data,
  group4832Props: group4835Data,
  group4833Props: group4836Data,
  group4842Props: group4844Data,
};

const group5673Data = {
  className: "group-567-5",
};

const group4992Data = {
  pngwingCom_1__1: "/img/pngwing-com--1--1@1x.png",
  className: "group-499-4",
};

const group4993Data = {
  pngwingCom_1__1: "/img/pngwing-com--1--1-1@1x.png",
  className: "group-499-5",
};

const group4982Data = {
  toppngComIconMailPngTransparentBack:
    "/img/toppng-com-icon-mail-png-transparent-background-mail-logo-1024x1-1@1x.png",
  className: "group-498-8",
  group499Props: group4993Data,
};

const group35016Data = {
  className: "group-350-24",
};

const homePage12Data = {
  component213Props: component2139Data,
  component561: "/img/component-56---1@1x.png",
  component571: "/img/component-57---1@1x.png",
  component1311: "/img/component-131---1@1x.png",
  contactUs1: "Contact Us",
  group524: "/img/component-61---1@1x.png",
  surname1: "Case study",
  articleTitleHere1: "Article Title here",
  loremIpsumDolorSi1:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum",
  readMore1: "Read More >",
  surname2: "Case study",
  articleTitleHere2: "Article Title here",
  loremIpsumDolorSi2:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum",
  readMore2: "Read More >",
  surname3: "Case study",
  articleTitleHere3: "Article Title here",
  loremIpsumDolorSi3:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum",
  readMore3: "Read More >",
  surname4: "Case study",
  articleTitleHere4: "Article Title here",
  loremIpsumDolorSi4:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum",
  readMore4: "Read More >",
  surname5: "Case study",
  articleTitleHere5: "Article Title here",
  loremIpsumDolorSi5:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum",
  readMore5: "Read More >",
  surname6: "Case study",
  articleTitleHere6: "Article Title here",
  loremIpsumDolorSi6:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum",
  readMore6: "Read More >",
  customerStories: "Customer Stories",
  loremIpsumDolorSi7:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  component541: "/img/component-121---1@1x.png",
  component851: "/img/component-85---1@1x.png",
  component841: "/img/component-84---1@1x.png",
  component1813: "/img/component-18---13@1x.png",
  component581: "/img/component-58---1@1x.png",
  component591: "/img/component-59---1@1x.png",
  component601: "/img/component-60---1@1x.png",
  groupContainer: "/img/component-64---1@1x.png",
  component691: "/img/component-69---1@1x.png",
  viewAll: "View All",
  group599: "/img/component-83---1@1x.png",
  ourServices: (
    <React.Fragment>
      Our
      <br />
      Services
    </React.Fragment>
  ),
  component701: "/img/component-70---1@1x.png",
  loremIpsumDolorSi8:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  focusedIndustries: (
    <React.Fragment>
      Focused
      <br />
      Industries
    </React.Fragment>
  ),
  component721: "/img/Component-130-–1.png",
  loremIpsumDolorSi9:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  overlapGroup12: "/img/component-101---1@1x.png",
  overlapGroup7: "/img/component-102---1@1x.png",
  contactUs2: "Contact us",
  loremIpsumDolorSi10:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  component731: "/img/component-73---1@1x.png",
  loremIpsumDolorSi11:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  toppngComIconMailPngTransparentBack:
    "/img/toppng-com-icon-mail-png-transparent-background-mail-logo-1024x1@1x.png",
  component741: "/img/component-74---1@1x.png",
  loremIpsumDolorSi12:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  component1031: "/img/component-103---1@1x.png",
  component821: "/img/component-82---1@1x.png",
  component771: "/img/component-77---1@1x.png",
  component781: "/img/component-78---1@1x.png",
  iconLinkedin: "/img/component-79---1@1x.png",
  component801: "/img/component-80---1@1x.png",
  component811: "/img/component-81---1@1x.png",
  component212Props: component212Data,
  component2316Props: component231615Data,
  component5431Props: component5433Data,
  component5432Props: component5434Data,
  component241Props: component2412Data,
  component251Props: component2516Data,
  component261Props: component2616Data,
  // component251Props: component2516Data,
  group490Props: group4902Data,
  group571Props: group5712Data,
  group567Props: group5673Data,
  group499Props: group4992Data,
  group498Props: group4982Data,
  group350Props: group35016Data,
};
