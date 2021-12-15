import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__banner"
        src="https://cdn.fanbyte.com/wp-content/uploads/2019/09/pubg-mobile-amazon-prime-rewards-guide-banner-1440x810.jpg?x72619"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1"
          title="Iphone 12"
          price={699}
          img="https://m.media-amazon.com/images/I/71YlH-4MUQL._SL1500_.jpg"
          rating={5}
        />

        <Product
          id="3"
          title="Echo Studio - Smart speaker with high-fidelity audio, Dolby Atmos and Alexa (Black)"
          price={94}
          img="https://m.media-amazon.com/images/I/710RXRW3fjL._SL1000_.jpg"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="4"
          title="All new Echo Show 10- 10.1 HD smart display with motion, premium sound and Alexa (Black)"
          price={654}
          img="https://m.media-amazon.com/images/I/61Zrfi9pTIL._SL1000_.jpg"
          rating={5}
        />

        <Product
          id="5"
          title="Introducing Fire TV Stick 4K Max streaming device, Alexa Voice Remote (includes TV controls), Wi-Fi 6 Compatible"
          price={300}
          img="https://m.media-amazon.com/images/I/610mdIJUxkL._SL1000_.jpg"
          rating={5}
        />
        <Product
          id="6"
          title="Iphone 12"
          price={699}
          img="https://m.media-amazon.com/images/I/71YlH-4MUQL._SL1500_.jpg"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="7"
          title="Tamatina Vincent Van Gogh Canvas Painting - Starry Night - Over The Rhone - 41 inches x 23 inches - Large Size"
          price={10}
          img="https://m.media-amazon.com/images/I/91CPGDN92OL._SL1500_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
//https://cdn.fanbyte.com/wp-content/uploads/2019/09/pubg-mobile-amazon-prime-rewards-guide-banner-1440x810.jpg?x72619
//https://m.media-amazon.com/images/I/618AjZ7dWxL._SX3000_.jpg"
