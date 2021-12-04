import { values } from "lodash";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/Logo.png";

function Topbar(props) {
    return (
        <div>
            <div className="">
                <header>
                    <div className="wrapper">
                        <nav>
                            <div className="logo-nav">
                                <img src={logo} alt="Logo Women Be Free" />
                            </div>
                            <ul>
                                <li>
                                    <NavLink
                                        to="/"
                                        exact="true"
                                        className="nav-link"
                                    >
                                        Accueil
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/project"
                                        exact="true"
                                        className="nav-link"
                                    >
                                        Projet
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/blog"
                                        exact="true"
                                        className="nav-link"
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        exact="true"
                                        className="nav-link"
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                            <button className="btn rose">Faire un don</button>
                        </nav>
                    </div>
                    <nav className="navbar">
                        <div className="logo-nav">
                            <img src={logo} alt="Logo" />
                        </div>
                        <ul className="nav-links">
                            <input type="checkbox" id="checkbox_toggle" />
                            <label
                                htmlFor="checkbox_toggle"
                                className="hamburger"
                            >
                                &#9776;
                            </label>
                            <div className="menu">
                                <li>
                                    <NavLink to={"/"} exact="true">
                                        Accueil
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/project"} exact="true">
                                        Projet
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/blog"} exact="true">
                                        Blog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/contact"} exact="true">
                                        Contact
                                    </NavLink>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
}

export default Topbar;
