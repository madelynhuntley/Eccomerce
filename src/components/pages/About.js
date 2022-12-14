/* 
 - About Page
   - Explain your capstone
   - Explain what you learned throughout your time here
   - Explain your favorite languages and why
*/
import bg from "../../images/bg.jpg";

function About() {
  return (
    <div
      className="about-content"
      style={{
        backgroundImage: `url(${bg})`,
        color: "white",
      }}
    >
      <h1 style={{ color: "white" }}>~~ About My Capstone ~~</h1>
      <h2> I used the API: </h2>
      <h3>
        <a href="https://fakestoreapi.com/">https://fakestoreapi.com/</a>
        to fetch data for the products. . I used npx create my react app and
        SCSS, along with FontAwesome.
      </h3>
      <h2>The Product Page:</h2>
      <h3>
        You are able to filter in the lower black navigation bar. On each
        product card there is a functional button to add to cart. If you click
        above the add to cart button, it takes you to the Single Product.
      </h3>

      <h2>The Single Product page</h2>
      <h2>
        The single product page contains the title, full description, rating
        stars, the image of the product, and an Add To Cart Button.
      </h2>

      <h1>What I Learned in My Time at DevPipeline</h1>
      <h2>Fail FAST</h2>
      <h2>Own Your Jouney</h2>
      <h2>The Key Foundations `(mind blowing knowlege)`</h2>
      <h2>Languages</h2>
      <ul>Python</ul>
      <ul>HTML `(Hyper Text Markup Language)`</ul>
      <ul>CSS `(Cascading Style Sheets)`</ul>
      <ul>SCSS `(Sassy Cascading Style Sheets)`</ul>
      <h2>No Barriers</h2>
      <p>
        Mind over matter with everything. Keep on pushing with humble
        confidence. Learn as much as you can and show gratitude. Helping others
        benefits you.
      </p>
      <h2>Ask Good Questions</h2>
      <p>
        Being patient with yourself is important. Asking for an explanation when
        you have a lack of understanding, is apart of that
      </p>

      <h1>Favorite Language</h1>
      <p>
        When I am asked this question it makes me relize how hard it is to
        choose one. I really love code. Although I had tons of fun in
        foundations, learning Python, SQLite, and to work with .csv files. My
        favoriate language is React JavaScript. I enjoy the freedom and
        challenge of having less built in shortcuts. Components are HUGE. Being
        able to seperate a moving part and break it down, is so satifying to me,
        I love being organized with it and reconizing when I can turn something
        into a component. I like that Reacts User Interface is the browser
        rather than the console. At first I was scared of JavaScript because the
        errors were unfimiluar. Now the errors open doorways slowly and it's
        exciting.
      </p>
    </div>
  );
}

export default About;
