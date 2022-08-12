import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/svgs/logo.svg";
import "./styles.css";
const Index = () => {
  const [mobileNav, setmobileNav] = useState<boolean>(false);
  const [box, setBox] = useState<boolean>(false);
  const isMobile: boolean = useMediaQuery({ query: `(max-width: 768px)` });
  const handleMobileNav = (): void => {
    if (isMobile) {
      setmobileNav(!mobileNav);
    }
  };
  const toggleBox = ():void => setBox(!box)
  const activeStyle: { opacity: number } = {
    opacity: 0.7,
  };

  return (
    <nav className="w-screen">
      <div className="my-container inner">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <ul className={mobileNav ? "nav-active" : "nav-links"}>
          <li className="prop_">
            <button
              onClick={toggleBox}
            >
              Tools <FontAwesomeIcon icon={box ? faChevronUp :faChevronDown} />
            </button>

            {box && (
              <div className="box_">
                <p>
                  <Link  onClick={handleMobileNav} to="/">See dangerous and defctive products</Link>
                </p>
                <p className="add__">
                  <Link  onClick={handleMobileNav} to="/">SReport Dangerous products</Link>
                </p>
                <p className="add__">
                  <Link  onClick={handleMobileNav} to="/">ICSMS API</Link>
                </p>
                <p className="add__">
                  <Link  onClick={handleMobileNav} to="/">AIME search tool</Link>
                </p>
              </div>
            )}
          </li>
          <li>
            <NavLink
              to="/rules"
              onClick={handleMobileNav}
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              Rules for product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              onClick={handleMobileNav}
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              To Producter.dk
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={handleMobileNav}
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className={mobileNav ? "bro" : "burger"} onClick={handleMobileNav}>
          <div className="line0"></div>
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
      </div>
    </nav>
  );
};

export default Index;
