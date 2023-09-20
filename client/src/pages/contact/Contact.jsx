import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

import "./contact.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMail } from "../../features/mailApiSlice";
import { setMessageEmpty } from "../../features/mailSlice";
import { tostifyAlert } from "../../utils/toastifyAlert";

const Contact = () => {
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.mail);

  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });

  // handleInputChange.
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handleMailFormSubmit.
  const handleMailFormSubmit = (e) => {
    e.preventDefault();
    dispatch(sendMail(input));
    setInput({
      name: "",
      email: "",
      subject: "",
      text: "",
    });
  };

  useEffect(() => {
    if (error) {
      tostifyAlert(error, "error");
      dispatch(setMessageEmpty());
    } else {
      tostifyAlert(message, "success");
      dispatch(setMessageEmpty());
    }
  }, [error, message]);

  return (
    <>
      <section className="contact section">
        <h2 className="section_title">
          Get In <span>Touch</span>
        </h2>

        <div className="contact_container container grid">
          <div className="contact_data">
            <h3 className="contact_title">Don't be Shy !</h3>

            <p className="contact_desc">
              You can feel free to get in touch with me. I am always open to
              discussing new projects. You can also give me a creative ideas or
              opportunities to part of your visions.
            </p>

            <div className="contact_info">
              <div className="info_item">
                <FaEnvelopeOpen className="info_icon" />

                <div>
                  <span className="info_title">Mail me</span>
                  <h4 className="info_desc">reactdevssaddam@gmail.com</h4>
                </div>
              </div>

              <div className="info_item">
                <FaPhoneSquareAlt className="info_icon" />

                <div>
                  <span className="info_title">Call me</span>
                  <h4 className="info_desc">01875894505</h4>
                </div>
              </div>
            </div>

            <div className="contact_socils">
              <a
                href="https://www.linkedin.com/in/developer-saddam/"
                className="social_link"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100015157110543"
                className="social_link"
              >
                <FaFacebookF />
              </a>

              <a href="#" className="social_link">
                <FaInstagram />
              </a>
            </div>
          </div>

          <form onSubmit={handleMailFormSubmit} className="contact_form">
            <div className="form_input_group">
              <div className="form_input_div">
                <input
                  type="text"
                  className="form_control"
                  placeholder="Your Name"
                  name="name"
                  value={input.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form_input_div">
                <input
                  type="email"
                  className="form_control"
                  placeholder="Your Email"
                  name="email"
                  value={input.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form_input_div">
                <input
                  type="text"
                  className="form_control"
                  placeholder="Your Subject"
                  name="subject"
                  value={input.subject}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form_input_div">
              <textarea
                className="form_control textarea"
                placeholder="Your Message"
                name="text"
                value={input.text}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button type="submit" className="button">
              Send Message
              <span className="button_icon contact_button_icon">
                <FiSend />
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
