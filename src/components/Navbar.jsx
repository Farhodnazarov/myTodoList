import { Link } from "react-router-dom";

// react icons
import { IoIosLogOut } from "react-icons/io";

// custom hooks
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const { user } = useGlobalContext();
  const { logOut } = useAuth();

  return (
    <header className="shadow-sm bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-2 md:gap-3">
        {/* Logo */}
        <Link to={"/"} className="font-bold text-xl sm:text-2xl">
          <img src="./todo-logo.png" alt="" className="w-14 md:w-24 lg:w-40" />
        </Link>

        {/* USER + LOGOUT */}
        <div className="flex flex-wrap items-center gap-1">
          <p className="text-[12px] md:text-xl">Hello, {user.displayName}</p>
          <img
            src={user.photoURL}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            alt="User"
          />
          <button
            onClick={logOut}
            className="border-2 text-[12px] font-semibold md:text-sm flex items-center gap-1 border-red-400 px-2 py-1 sm:px-3 sm:py-1 rounded hover:bg-red-400 hover:text-white  cursor-pointer active:scale-95 sm:text-base transition-colors duration-300"
          >
            <span>LogOut</span> <IoIosLogOut />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
