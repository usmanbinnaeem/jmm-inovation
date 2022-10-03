import ContactDetails from "../ContactDetails";
import Socials from "../Socials";
import Particle from "../Particle";

// Css File
import "./ContactUs.css";
import Navbar from "./../Navbar/index";

function ContactUs(props) {
  const { group424, group498Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contact-us-17 screen">
        <div className="overlap-group9-3">
          <Particle />
          <div className="rectangle-177-18"></div>
          <div
            className="overlap-group5-2"
            // style={{ backgroundImage: `url(${overlapGroup5})` }}
          >
            <div className="group-454-1">
              <div className="group-452-20">
                <div data-aos="fade-right">
                  <div className="group-452-21">
                    <div className="contact-us-18 montserrat-semi-bold-white-55px">
                      Contact us
                    </div>
                    <div className="rectangle-157-8"></div>
                  </div>
                  <p className="lorem-ipsum-dolor-si-29 montserrat-normal-white-16px">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et
                  </p>
                </div>
                <div className="group-497-1">
                  <div data-aos="fade-right" className="group-493-2">
                    <div className="group-495-1">
                      <div className="full-name montserrat-normal-white-14px">
                        Full Name
                      </div>
                      <input
                        autoComplete="off"
                        type="text"
                        className="fullName"
                      />
                    </div>
                    <div className="group-container-77">
                      <div className="group-4">
                        <div className="companyDiv montserrat-normal-white-14px">
                          Company
                        </div>
                        <input type="text" className="company" />
                      </div>
                      <div className="group-4-1">
                        <div className="businessDiv montserrat-normal-white-14px">
                          Business
                        </div>
                        <input list="business" className="business" />
                        <datalist id="business">
                          <option value="Real Estate" />
                          <option value="Software Industry" />
                          <option value="Auto Mobile" />
                        </datalist>
                      </div>
                    </div>
                    <div className="group-container-78">
                      <div className="group-4">
                        <div className="emailDiv montserrat-normal-white-14px">
                          Email Address
                        </div>
                        <input type="email" className="emailaddr" />
                      </div>
                      <div className="group-4-1">
                        <div className="phone montserrat-normal-white-14px">
                          Phone Number
                        </div>
                        <input type="number" className="phoneNo" />
                      </div>
                    </div>
                    <div className="group-container-77">
                      <div className="group-4">
                        <div className="countryDiv montserrat-normal-white-14px">
                          Country
                        </div>
                        <input type="text" className="country" />
                      </div>
                      <div className="group-4-1">
                        <div className="city montserrat-normal-white-14px">
                          City
                        </div>
                        <input list="city" className="cities" />
                        <datalist id="city">
                          <option value="Abbottabad" />
                          <option value="Islamabad" />
                          <option value="Karachi" />
                          <option value="Lahore" />
                          <option value="Peshawar" />
                        </datalist>
                      </div>
                    </div>
                    <div className="overlap-group4-11">
                      <textarea
                        placeholder="type here"
                        name="message"
                        cols="68"
                        rows="5"
                        className="type-here"
                      ></textarea>
                    </div>
                    <div
                      className="group-424-1"
                      style={{ backgroundImage: `url(${group424})` }}
                    >
                      <input
                        type="submit"
                        value="Submit"
                        className="send-message montserrat-medium-white-16px"
                      />
                    </div>
                  </div>

                  <div data-aos="fade-left" className="group-501-1">
                    <p className="lorem-ipsum-dolor-si-30 montserrat-medium-white-16px">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et
                    </p>
                    <ContactDetails
                      toppngComIconMailPngTransparentBack={
                        group498Props.toppngComIconMailPngTransparentBack
                      }
                      group499Props={group498Props.group499Props}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Socials />
      </div>
    </div>
  );
}

export default ContactUs;
