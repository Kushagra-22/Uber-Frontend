import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  // Define allowed pages for conditional rendering
  const allowedPages = ["/Home", "/"]; // Add other routes as needed
  const shouldRender = allowedPages.some(
    (path) => path.toLowerCase() === location.pathname.toLowerCase()
  );
  return (
    <div className=" w-full">
      <div>
        <nav class="bg-white border-stone-950 dark:bg-stone-900">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <span class="self-center text-2xl whitespace-nowrap dark:text-white">
              <Link to="/">Uber</Link>
            </span>

            <div>
              {shouldRender && (
                <div
                  class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                  id="navbar-default"
                >
                  <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-stone-800 md:dark:bg-stone-900 dark:border-stone-900">
                    <li>
                      <Link
                        href="#"
                        class="flex mt-1 py-2 px-3 text-white bg-stone-900 rounded md:bg-transparent md:p-0 dark:text-white "
                        aria-current="page"
                      >
                        En
                      </Link>
                    </li>
                    <li>
                      <a
                        to=""
                        class="flex mt-1 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white  dark:hover:bg-stone-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Help
                      </a>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        class="flex mt-1 py-3 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        LogIn
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        // type="button"
                        class="flex rounded-full bg-gray-800 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-sans text-black  text-ellipsis  px-3 py-1 text-center dark:bg-white"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
