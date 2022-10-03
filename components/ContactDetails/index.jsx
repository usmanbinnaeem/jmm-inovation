import pngwingCom_1__1 from "../../static/img/pngwing-com--1--1@1x.png";
import "./ContactDetails.css";

function ContactDetails(props) {
  const { toppngComIconMailPngTransparentBack, className } = props;

  return (
    <div className={`group-498-7 ${className || ""}`}>
      <div className={`group-499-3 ${className || ""}`}>
        <div className="group-498-10">
          <div className="group-590-4">
            <img className="pngwingcom-_1__1-4" src={pngwingCom_1__1} />
            <div className="group-589-5">
              <div className="overlap-group-74 montserrat-medium-white-16px">
                <div className="phone-36">Phone</div>
                <div className="text-389">+977-1455895 55998</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group-500-3">
        <img
          className="toppngcom-icon-mail-4"
          src={toppngComIconMailPngTransparentBack}
        />

        <div className="group-498-13">
          <div className="overlap-group-77 montserrat-medium-white-16px">
            <div className="email-2">Email</div>
            <div className="contactjmminvoascom-7">Contact@jmminvoas.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
