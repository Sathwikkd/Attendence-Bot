import React, { useEffect, useState } from "react";
import "../CSS/Home.css";

function Home() {
  const [size, setSize] = useState(false);
  const [click, setClick] = useState(false);
  const resizer = () => {
    if (window.innerWidth <= 1000) {
      setSize(true);
    } else {
      setSize(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", resizer);
    resizer();
  });

  return (
    <>
      <nav>
        <div className={`logo-sec ${size ? `hide` : ``}`}>
          <img src="/Media/edwins.jpeg" alt="" />
        </div>
        <div className={`media-btn ${size ? `` : `hide`}`}>
          <button
            className="hamburger"
            onClick={() => {
              setClick(!click);
            }}
          >
            <span class={`line ${click ? `close-1` : ``}`}></span>
            <span class={`line  ${click ? `close-2` : ``}`}></span>
            <span class={`line  ${click ? `close-3` : ``}`}></span>
          </button>
        </div>
      </nav>
      <div
        className={`side-bar ${
          click
            ? `
media-sidebar-close`
            : `media-sidebar`
        }`}
      >
        <div className="profile-sec">
          <div className="image-sec">
            <img src="/Media/profile.jpeg" alt="" />
          </div>
          <div className="info-sec">
            <h1>Edwin</h1>
          </div>
        </div>
        <div className="routes-sec">
          <ul>
            <li>Members</li>
            <li>Registration</li>
          </ul>
          <div className="footer-sec">
            <button>Logut</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
