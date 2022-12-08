import electronics from "../../images/electronics.jpg";
import jewlry from "../../images/jewlry.jpg";
import men from "../../images/men.jpg";
import women from "../../images/women.jpg";
import Truncate from "../Truncate";

function Home() {
  return (
    <div className="page-content-home">
      <h1>Welcome!</h1>
      <h1 className="shop">Shop</h1>

      <div className="womens">
        <div className="left-lady">
          <img src={women} alt="Clothes on a rack" />
        </div>
        <div className="right-lady">
          <h1>Lady's</h1>
          <Truncate>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum morbi blandit cursus risus at ultrices. Semper auctor
            neque vitae tempus. Tristique et egestas quis ipsum. Velit euismod
            in pellentesque massa placerat duis. Arcu risus
          </Truncate>
          <button>Women's Clothing</button>
        </div>
      </div>
      <div className="mens">
        <div className="mens-left">
          <h1>Men's</h1>
          <Truncate>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Truncate>
          <button>Men's Clothing</button>
        </div>
        <div className="men-right">
          <img src={men} alt="guy in a suit" />
        </div>
      </div>
      <div className="electronics">
        <div className="elc-left">
          <img src={electronics} alt="Memory Card" />
        </div>
        <div className="elc-right">
          <h1>Electronics</h1>
          <Truncate>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum morbi blandit cursus risus at ultrices. Semper auctor
            neque vitae tempus. Tristique et egestas quis ipsum. Velit euismod
            in pellentesque massa placerat duis. Arcu risus
          </Truncate>
          <button>Electronics</button>
        </div>
      </div>
      <div className="jewlry">
        <div className="jewlry-left">
          <h1>Jewlry</h1>
          <Truncate>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum morbi blandit cursus risus at ultrices. Semper auctor
            neque vitae tempus. Tristique et egestas quis ipsum. Velit euismod
            in pellentesque massa placerat duis. Arcu risus
          </Truncate>

          <button>Jewlry</button>
        </div>
        <div className="jewlry-right">
          <img src={jewlry} alt="Sparkly Ring" />
        </div>
      </div>
    </div>
  );
}

export default Home;
