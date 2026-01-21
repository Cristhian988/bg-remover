import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, UserButton } from "@clerk/clerk-react";

export const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useClerk();

  return (
    <div className="container flex items-center justify-between mx-auto py-3 px-6">
      <Link to="/" className="flex items-center gap-1">
        <img src={assets.logo_icon} alt="logo" className="w-10 sm:w-12" />
        <span className="text-xl sm:text-2xl font-bold">BG Remover</span>
      </Link>
      {isSignedIn ? (
        <div>
          <UserButton />
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 rounded-full text-sm hover:scale-105 transition-all duration-700 cursor-pointer"
        >
          Empezar{" "}
          <img src={assets.arrow_icon} alt="arrow" className="w-3 sm:w-4" />
        </button>
      )}
    </div>
  );
};
