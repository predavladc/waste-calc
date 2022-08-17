// const Navbar = () => {
//   return (
//     <div className="w-100 bg-green-500 md:flex md:justify-between shadow-lg text-neutral-200 p-1">
//       <div>
//         <span>Waste Calc</span> <span>Statistics</span> <span>Settings</span>
//       </div>
//       <div>
//         <span>Accounts/Sign In</span>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import { createSignal } from "solid-js";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = createSignal(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center  bg-green-600 py-3 shadow-lg text-neutral-200">
      <a href="/"></a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden ml-2">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-slate-200"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-slate-200"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-slate-200"></span>
          </div>

          <div className={isNavOpen() ? "showMenuNav" : "hideMenuNav"}>
            {" "}
            <div
              className="CROSS-ICON absolute top-0 left-0 px-6 py-6 "
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-7 w-7 text-gray-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center  min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/me/overview">Waste Calc.</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/me/statistics">Statistics</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Settings</a>
              </li>
              <div class="">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/contact">Account/Sign In</a>
                </li>
              </div>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-lg ml-2">
          <li>
            <a href="/me/overview">Waste Calc.</a>
          </li>
          <li>
            <a href="/me/statistics">Statistics</a>
          </li>
          <li>
            <a href="/contact">Settings</a>
          </li>
          <li>
            <a href="/contact">Account/Sign In</a>
          </li>
        </ul>
      </nav>
      <style>{`
          .hideMenuNav {
            position: absolute;
            top: -400px;
            display: block;
            width: 100%;
            height: auto;
            left: 0;
            background: rgb(18, 135, 45);
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            transition: top 1s ease-in-out;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: auto;
            top: 0px;
            left: 0;
            background: rgb(18, 135, 45);
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            transition: top 1s ease-in-out;
          }
}
        `}</style>
    </div>
  );
}
