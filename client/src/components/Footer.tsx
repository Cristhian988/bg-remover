import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 lg:px-44 py-3">
      <Link to="/" className="flex items-center gap-1">
        <img src={assets.logo_icon} alt="logo" className="w-10 sm:w-12" />
        <span className="text-xl sm:text-2xl font-bold">BG Remover</span>
      </Link>
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright © {new Date().getFullYear()} BG-Remove. Todos los derechos
        reservados.
      </p>
      <div className="flex gap-1">
        <img src={assets.facebook_icon} alt="facebook" width={40} />
        <img src={assets.twitter_icon} alt="twitter" width={40} />
        <img src={assets.google_plus_icon} alt="instagram" width={40} />
      </div>
    </div>
  );
};
