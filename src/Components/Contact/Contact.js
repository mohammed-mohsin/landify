import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
function ContactForm() {
  const [state, handleSubmit] = useForm("mvovrzjo");
  if (state.succeeded) {
    return <p>Thanks for Contacting With Us</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form ">
      <div className="form-field col x-50">
        <input
          id="name"
          className="input-text js-input"
          name="name"
          type="text"
          required
        />
        <label className="label" htmlFor="name">
          Name
        </label>
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="form-field col x-50">
        <input
          id="email"
          className="input-text js-input"
          name="email"
          type="email"
          required
        />
        <label className="label" htmlFor="email">
          E-mail
        </label>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="form-field col x-100">
        <textarea
          cols="30"
          rows="10"
          id="message"
          className="input-text js-input"
          name="message"
          type="text"
          required
        ></textarea>
        <label className="label" htmlFor="message">
          Message
        </label>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="form-field col x-100 align-center">
        <input
          disabled={state.submitting}
          className="submit-btn"
          name="submit"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  );
}

const Contact = () => {
  return (
    <>
      <div className="line"></div>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-5  mt-5    d-flex justify-content-center">
              <div className="contact_info ">
                <div className="contact_info_title">
                  <h5>Contact Us</h5>
                </div>
                <div className="contact_info_content">
                  <p>
                    767 Fifth Ave. New York, NY
                    <br />
                    <br />
                    10153 +123 456 789
                    <br />
                    <br />
                    email@example.com
                  </p>
                </div>
                <div className="contact_info_follow">
                  <div className="contact_info_follow_title">
                    <h5>Follow Us</h5>
                  </div>
                  <div className="contact_info_follow_icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7  mt-5 d-flex justify-content-center">
              <div className="contact_form">
                <div className="contact_form_title">
                  <h3>Interested in working with us?</h3>
                </div>
                <div className="contact_form_inputs">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
