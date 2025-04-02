import "./Home.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [searchgone, setsearchgone] = useState(true);
  const [logout, setlogout] = useState(true);
  const [showsidebar, setshowsetsidebar] = useState(false);
  const [showcreate, setshowcreate] = useState(false);
  const [inputvalue, setinputvalue] = useState("");
  const maxLength = 12;
  const handlelogoutclick = () => {
    setlogout(!logout);
  };
  const handlesidebaar = () => {
    setshowsetsidebar(true);
  };

  const handleclosesidebar = () => {
    setshowsetsidebar(false);
  };
  const handleshowcreate = () => {
    setshowcreate(true);
  };
  const handleclosecreate = () => {
    setinputvalue("");
    setshowcreate(false);
  };
  const handleunputchange = (e) => {
    setinputvalue(e.target.value);
  };

  return (
    <>
      <div className={`sidebar ${showsidebar ? `show` : `hide`}`}>
        <ul className="sidebar-nav">
          <img
            onClick={handleclosesidebar}
            src="/images/close.svg"
            alt="close menu"
            className="close-menu"
          />
          <li>My subscriptions</li>
          <li>Create a subscription</li>
          <li>Edit profile</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="mobile-nav">
        <div>
          <img
            className="Home-logo"
            src="/images/subscription.png"
            alt="logo"
          />
        </div>
        <div className="seacrh-continer">
          {searchgone && (
            <span
              className={`material-symbols-outlined search-icon ${
                searchgone ? "show" : "hide"
              }`}
            >
              search
            </span>
          )}
          <input
            placeholder="Search User"
            className="searchbar "
            type="search"
            onChange={(e) => setsearchgone(e.target.value.trim() === "")}
          />
        </div>
        <div>
          <img
            src="/images/menu.svg"
            alt="Menu Icon"
            className="Menu-Icon"
            onClick={handlesidebaar}
          />
        </div>
      </div>
      <div className="Home-continer">
        <div className="Home-child-continer">
          <ul className="navbar">
            <div className="nav-left">
              <li className="left">
                <img
                  className="Home-logo"
                  src="/images/subscription.png"
                  alt="logo"
                />
              </li>
              <li>
                <a className="navlinks" href="#">
                  My subscriptions
                </a>
              </li>
              <li>
                <a className="navlinks" href="#" onClick={handleshowcreate}>
                  Create a subscription
                </a>
              </li>
            </div>
            <div className="nav-right">
              <li className="seacrh-continer">
                {searchgone && (
                  <span
                    className={`material-symbols-outlined search-icon ${
                      searchgone ? "show" : "hide"
                    }`}
                  >
                    search
                  </span>
                )}
                <input
                  placeholder="Search User"
                  className="searchbar "
                  type="search"
                  onChange={(e) => setsearchgone(e.target.value.trim() === "")}
                />
              </li>
              <li>
                <img
                  onClick={handlelogoutclick}
                  className="Home-profile"
                  src="/images/1.jpg"
                  alt="logo"
                />
              </li>
            </div>
          </ul>
        </div>
        <div className={`log-out ${logout ? "hide" : "show"}`}>
          <p>Edit profile</p>
          <p>Log out</p>
        </div>
      </div>
      <div className="bc">
        <div className="continer">
          <div className="card-continer">
            <img src="images/7.jpg" alt="" className="userimages" />
            <div className="name-date">
              <h2 className="name">Julissa Medrano</h2>
              <p className="date">2025/4/14</p>
            </div>
          </div>
          <div className="card-continer">
            <img src="images/16.jpg" alt="" className="userimages" />
            <div className="name-date">
              <h2 className="name">David Lucero</h2>
              <p className="date">2025/4/14</p>
            </div>
          </div>
          <div className="card-continer">
            <img src="images/26.jpg" alt="" className="userimages" />
            <div className="name-date">
              <h2 className="name">Mckenzie Henderson</h2>
              <p className="date">2025/4/14</p>
            </div>
          </div>
          <div className="card-continer">
            <img src="images/36.jpg" alt="" className="userimages" />
            <div className="name-date">
              <h2 className="name">Ali Ahmad</h2>
              <p className="date">2025/4/14</p>
            </div>
          </div>
          <div className="card-continer">
            <img src="images/51.jpg" alt="" className="userimages" />
            <div className="name-date">
              <h2 className="name">Dakari Wells</h2>
              <p className="date">2025/4/14</p>
            </div>
          </div>
          <div className="card-continer">
            <img src="images/62.jpg" alt="" className="userimages" />
            <div className="name-date">
              <h2 className="name">Martha Ferguson</h2>
              <p className="date">2025/4/14</p>
            </div>
          </div>
          <div className="card-continer">
            <img src="images/71.jpg" alt="" className="userimages" />
            <div className="name-date">
              <h2 className="name">Malcolm Bender</h2>
              <p className="date">2025/4/14</p>
            </div>
          </div>
          <div className="card-continer">
            <img src="images/76.jpg" alt="" className="userimages" />
            <div className="name-date">
              <h2 className="name">Jordan Mitchell</h2>
              <p className="date">2025/4/14</p>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-continer">
        <div className="social-continer">
          <h2>Social</h2>
          <div className="icon">
            <FontAwesomeIcon icon={faInstagram} size="2x" color="#E1306C" />
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </div>
        </div>
        <div className="copyright-continer">
          <h2>Copyright</h2>
          <p>© 2025 Yousef Salah </p>
        </div>
      </div>
      <div className={`create ${showcreate ? "show" : "hide"}`}>
        <div className="subscriptions">
          <img
            onClick={handleclosecreate}
            className="close-btn"
            src="/images/close.svg"
            alt=""
          />
          <input
            value={inputvalue}
            maxLength={maxLength}
            type="text"
            placeholder="User id"
            onChange={handleunputchange}
          />
          <button onClick={handleclosecreate} className="add-user-btn">
            Add User
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
