import "./Contact.css";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="contact__container">
        <h2 className="contact__header">Contact Me</h2>
        <p className="contact__copy">
          Drop a line to say hey, ask to see my resume or shoot me a message to findout if we can build
          something amazing together. Let's chat!
          <br />
         I look forward to hearing from you!
        </p>
        <a
          href="mailto:stephmdavis1@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="contact__message"
        >
          Email me at stephmdavis1@gmail.com
        </a>
      </div>
    </>
  );
}
