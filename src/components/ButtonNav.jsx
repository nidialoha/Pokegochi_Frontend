import { NavLink } from "react-router-dom";
import { RiHomeHeartLine } from "react-icons/ri";
import { LuSword } from "react-icons/lu";
import { CgPokemon } from "react-icons/cg";
import { IoTrophyOutline } from "react-icons/io5";

function ButtonNav() {
  return (
    <>
      <div className="fixed z-50 dock dock-xl container mx-auto grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-3">
        <button className="hover:bg-green-700 hover:text-white hover:w-full h-full align-middle gap-2">
          <NavLink to="/" className="text-xs">
            {" "}
            <RiHomeHeartLine className="size-6 mb-2" />
            Home
          </NavLink>
        </button>
        <button className="hover:bg-red-700 hover:text-white hover:w-full h-full align-middle">
          <NavLink to="/battle" className="text-xs">
            {" "}
            <LuSword className="size-6 mb-2" /> Battle
          </NavLink>
        </button>
        <button className="hover:bg-yellow-400 hover:text-white hover:w-full h-full align-middle">
          <NavLink to="/center" className="text-xs">
            {" "}
            <CgPokemon className="size-6 mb-2" />
            Center
          </NavLink>
        </button>
        <button className="hover:bg-blue-700 hover:text-white hover:w-full h-full align-middle">
          <NavLink to="/dashboard" className="text-xs">
            {" "}
            <IoTrophyOutline className="size-6 mb-2" />
            Dashboard
          </NavLink>
        </button>

        {/* <button>
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <polyline
                points="1 11 12 2 23 11"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></polyline>
              <path
                d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></path>
              <line
                x1="12"
                y1="22"
                x2="12"
                y2="18"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></line>
            </g>
          </svg>
          <span className="dock-label">Home</span>
        </button> */}

        {/* <button className="dock-active">
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <polyline
                points="3 14 9 14 9 17 15 17 15 14 21 14"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></polyline>
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                ry="2"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></rect>
            </g>
          </svg>
          <span className="dock-label">Battle</span>
        </button>

        <button>
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <circle
                cx="12"
                cy="12"
                r="3"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></circle>
              <path
                d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></path>
            </g>
          </svg>
          <span className="dock-label">Center</span>
        </button>
        <button>
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
              <circle
                cx="12"
                cy="12"
                r="3"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></circle>
              <path
                d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                stroke-miterlimit="10"
                strokeWidth="2"
              ></path>
            </g>
          </svg>
          <span className="dock-label">Dashboard</span>
        </button> */}
      </div>
    </>
  );
}

export default ButtonNav;
