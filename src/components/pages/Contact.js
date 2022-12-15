/* 
- Nicely styled contact form elements
    - This does not have to be functional, but wire up a notification that shows the user that the message was sent, 
	and it should clear the form after.
*/

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  function feedBack() {
    alert("message sent");
  }

  return (
    <div className="contact-content">
      <div className="contact-form">
        <h1>Leave some FeedBack</h1>
        <form className="group">
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Your name.."
          />

          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Your last name.."
          />

          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>
          <div className="form-btn">
            <button onClick={feedBack()} type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
