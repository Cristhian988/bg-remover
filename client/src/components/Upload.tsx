import { assets } from "../assets/assets";
import { Title } from "./Title";

export const Upload = () => {
  return (
    <div>
      <Title>Haz clic y mira la diferencia</Title>
      <div className="text-center mb-24">
        <input type="file" name="" id="upload2" hidden />
        <label
          htmlFor="upload2"
          className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-linear-to-r from-blue-500 to-blue-800 m-auto hover:scale-105 transition-all duration-700"
        >
          <img src={assets.upload_btn_icon} alt="upload" width={20} />
          <p className="text-white text-sm">Upload your image</p>
        </label>
      </div>
    </div>
  );
};
