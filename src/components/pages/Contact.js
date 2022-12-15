import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const notify = () => {
    const timeout = toast("Message Sent");

    setTimeout(timeout, 8000);
  };

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
            <button onClick={notify} type="submit">
              SUBMIT
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
}
