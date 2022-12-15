/* 
- Nicely styled contact form elements
    - This does not have to be functional, but wire up a notification that shows the user that the message was sent, 
	and it should clear the form after.
*/
export default function Contact() {
  function messageSent() {
    return <div className="message">Message sent</div>;
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
        </form>
        <div className="submit">
          <button type="submit" onClick={() => messageSent()}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
