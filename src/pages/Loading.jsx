import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

import "../App.css";


const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="loi">
          <Slide triggerOnce top delay={500}>
            <div className="io">
              <img
                src="/fav1.png"
                alt="Logo"
                className="loader-logo"
              />
            </div>
          </Slide>
          <div className="loader-progress">
            <p className="loader-percentage">{progress}%</p>
            <div className="loader-bar">
              <div
                className="loader-bar-fill"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, rgb(255, 221, 0), #ff007b)",
                }}
              ></div>
            </div>
          </div>
        </div>
           <footer className="loader-footer">
              <Slide triggerOnce delay={900} className="flex w-full justify-center">
           <span>Powered by </span><span className="span">BiTech</span></Slide></footer>
      </div>
    </div>
  );
};

export default Loading;
