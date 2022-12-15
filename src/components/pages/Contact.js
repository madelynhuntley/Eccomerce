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
      <div class="left-form">
        <form class="group">
          <div class="group">
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Your name.."
            />
          </div>

          <div class="group">
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Your last name.."
            />
          </div>

          <div class="group">
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
            ></textarea>
          </div>
        </form>
        <div class="submit">
          <button type="submit" onClick={() => messageSent()}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
