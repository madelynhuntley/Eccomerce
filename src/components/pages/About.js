function About() {
  return (
    <div className="about-page">
      <h1>~~ About My Capstone ~~</h1>
      <div className="main-content">
        <div className="pages-api">
          <h2> I used the API: </h2>
          <a href="https://fakestoreapi.com/">https://fakestoreapi.com/</a>
          <h3>
            to fetch data for the products. I used npx create my react app,
            SCSS, along with FontAwesome.
          </h3>
          <h2>The Product Page:</h2>
          <h3>
            You are able to filter in the lower black navigation bar. On each
            product card there is a functional button to add to cart. If you
            click above the add to cart button, it takes you to the Single
            Product.
          </h3>

          <h2>The Single Product page</h2>
          <h3>
            The single product page contains the title, full description, rating
            stars, the image of the product, and an add to cart button.
          </h3>

          <h2>Cart Page</h2>
          <h3>
            Here I made banner cards that contain, the image, title,
            description, price, and a button to remove an item. Below I have a
            clear cart button, checkout button, and the caluculated total.
          </h3>

          <div className="contact-page">
            <h2>Contact Page</h2>
            <h3>
              The contact page contains a form for the user to leave feedback.
              And a map that represents where the buisness would be located.
              After you submit the form it clears, and a message appears letting
              the user know their message was sent.
            </h3>
          </div>
          <hr></hr>
        </div>
        <div className="what-i-learned">
          <h1>What I Learned at DevPipeline</h1>
          <h2>Fail FAST</h2>
          <h2>Own Your Jouney</h2>
          <h2>The Key Foundations `(mind blowing knowlege)`</h2>
          <h2>Languages</h2>
          <ul>
            <li>Python</li>
            <li>Vanilla JavaScript</li>
            <li>React JavaScript</li>
            <li>HTML `(Hyper Text Markup Language)`</li>
            <li>CSS `(Cascading Style Sheets)`</li>
            <li>SCSS `(Sassy Cascading Style Sheets)`</li>
          </ul>
          <h2>No Barriers</h2>
          <p>
            Mind over matter with everything. Keep on pushing with humble
            confidence. Learn as much as you can and show gratitude. Helping
            others benefits you.
          </p>
          <h2>Ask Good Questions</h2>
          <p>
            Being patient with yourself is important. Asking for an explanation
            when you have a lack of understanding, fundamental to growth.
          </p>
          <hr></hr>
        </div>
      </div>

      <div className="fav-lang">
        <h1>Favorite Language</h1>
        <p>
          When I am asked this question it makes me relize how hard it is to
          choose one. I really love code. Although I had tons of fun in
          foundations, learning Python, SQLite, and to work with .csv files. My
          favoriate language is React JavaScript. I enjoy the freedom and
          challenge of having less built in shortcuts. Components are HUGE.
          Being able to seperate a moving part and break it down, is so
          satifying to me. I love being organized with it and reconizing when I
          can turn something into a component. I like that Reacts User Interface
          is the browser rather than the console. At first I was scared of
          JavaScript because the errors were unfimiluar. Now the errors open
          doorways slowly and it's exciting.
        </p>
      </div>
    </div>
  );
}

export default About;
