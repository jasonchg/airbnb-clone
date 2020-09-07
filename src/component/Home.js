import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

const Home = () => {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Gold & Yellow Kitchen"
          description="Lovely gold yellow mixed environment enjoy the moment"
          price={120}
        />
        <Card
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Black Roof Single D-House"
          description="Comfortable and relaxing place just for you"
          price={230}
        />
        <Card
          src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Lovely Comfy Study Room"
          description="Comfortable and relaxing place just for you grey freak"
          price={170}
        />
      </div>
    </div>
  );
};

export default Home;
