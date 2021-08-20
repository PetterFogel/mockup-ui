import classes from "../../styles/contact.module.css";

function Contact() {
  return (
    <div className={classes.container}>
      <h3>Contact</h3>
      <div className={classes.conatactHolder}>
        <div className={classes.contact}>
          <div>
            <h4>Adress</h4>
            <p>WorldWide Fund Nature, 111 22 Gothenburg.</p>
            <p>Organization number: 555 555-555</p>
          </div>
          <div>
            <h4>Phone</h4>
            <p>Telephone exchange: 555 555-555</p>
            <p>Donor service: 555 555-555</p>
            <p>Common questions and answers: noah.com/conatct</p>
          </div>
        </div>
        <div className={classes.contact}>
          <div>
            <h4>Donate a gift</h4>
            <p>Bank account: 555-55</p>
            <p>swish 555 555-55</p>
            <p>Sign up for a monthly fee: noah.com/contribute</p>
          </div>
          <div>
              <h4>Social</h4>
                <ul>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-instagram-square"></i>
                </ul>
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
