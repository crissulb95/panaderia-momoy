import React, { useState } from "react";
import "./Slider.css";
import SlideImgs from "./SlideImgs.js";
import i1 from "../pictures/Pan.jpg";
import i2 from "../pictures/torta.jpg";
import i3 from "../pictures/dulces3.jpg";
import i4 from "../pictures/tapas2.jpg";
import i5 from "../pictures/singluten2escalado.jpg";
import i6 from "../pictures/singluten3.jpg";
import i7 from "../pictures/masasdulces4.jpg";
import i8 from "../pictures/pedidoespecial5escalado.png";

export default function ProductStand() {
  const sliderArr = [
    <SlideImgs fuente={i1} />,
    <SlideImgs fuente={i2} />,
    <SlideImgs fuente={i3} />,
    <SlideImgs fuente={i4} />,
    <SlideImgs fuente={i5} />,
    <SlideImgs fuente={i6} />,
    <SlideImgs fuente={i7} />,
    <SlideImgs fuente={i8} />
  ];

  const [x, setX] = useState(0);
  const leftButton = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const rightButton = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button className="slideButtonStyle rightButton " onClick={rightButton}>
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </button>

      <button className="slideButtonStyle leftButton" onClick={leftButton}>
        <i class="fa fa-chevron-left " aria-hidden="true"></i>
      </button>
    </div>
  );
}
