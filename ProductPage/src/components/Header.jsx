import React from "react";
import "../Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <header>
      <h1>Megans Boutique</h1>

      <button className="back-btn" onClick={goBack}>
        Back
      </button>
      <nav>
        <ul className="links">
          <li>
            <a
            //   onClick={() => {
            //     navigate("");
            //   }}
            >
              Home
              <div>
                <p></p>
              </div>
            </a>
          </li>
          <li>
            <a href=".">About</a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              Products
            </a>
          </li>
          <li>
            <a href=".">Contact</a>
          </li>
          <li className="search">
            <input type="text" className="search input" placeholder="search" />
          </li>
        </ul>
      </nav>
      <hr></hr>
    </header>
  );
}

export default Header;
