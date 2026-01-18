import { useState, type ChangeEvent } from "react";
import { assets } from "../assets/assets";
import { Title } from "./Title";

export const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="pb-10 md:py-20 mx-2">
      <Title>
        Resultados impecables: <br /> alta precisión en cada recorte
      </Title>

      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
        {/* background Image */}
        <img
          src={assets.image_w_bg}
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
          alt=""
        />
        {/* Foreground Image */}
        <img
          src={assets.image_wo_bg}
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          className="absolute top-0 left-0 w-full h-full"
          alt=""
        />
        {/* Slider */}
        <input
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};
