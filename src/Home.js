import React from "react";
import { Link } from "react-router-dom";
import img1 from "../src/sounds.jpg";
import img2 from "../src/Arrows-Right-Round-icon.png";
import "../src/Home.css";

const Home = () => {
  return (
    <div className="box">
      <div className="totalbox">
        <div>
          <Link className="img1">
            <img src={img1} alt="" />
          </Link>
        </div>
        <div className="soundtext">
          <div className="text">
            <h1>Precision Sound for</h1>
            <h1>Unforgettable Experiences</h1>
          </div>
          <div className="mainbox">
            <div className="pp">
              <p>
                From the events to studio setups, we engineer Sound
                solutionsthat deliver unmatched clarity,power ,and
                relaibality-every time.
              </p>
            </div>
            <div className="bb">
              <Link to="/" className="buttons">
                <p>Explore our services</p>
                <img src={img2} alt="loading" className="right1" />
              </Link>
              <Link to="/" className="buttons textss">
                <p>Get a consultation</p>
                <img src={img2} alt="loading" className="right1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
