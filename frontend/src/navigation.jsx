import { Link } from "react-router-dom";
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

import "./index.css";

function Navbar() {
	
	useEffect(() => {
	themeChange(false)
	}, [])

	
  return (
    <>
      <nav>
        <ul className="justify-evenly menu menu-horizontal bg-base-200 rounded-box w-full">
          <li>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-home"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>
          </li>
          <li>
            <Link to="/new">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-plus-circle"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-help-circle"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </Link>
          </li>
          <li>🌞
			<button data-toggle-theme="coffee,retro" data-act-class="ACTIVECLASS"></button>
          🌙</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
