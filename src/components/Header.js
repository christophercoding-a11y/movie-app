import { Link } from "react-router-dom"

import { FcFilmReel } from "react-icons/fc";

const Header =()=> {

    return (
        <header className="header py-3" id="header">
            <section className="section" id="headerSection">
                <div className="container">
                    <div className="text-capitalize">
                        <h1 className="header-text text-capitalize text-light"><FcFilmReel className="icon" />reel movie theater</h1>

                        <nav className="topNav">
                            <ul className="nav list-unstyled m-0 justify-content-evenly">
                            <li className="nav-item">
                                <Link className=" text-light link-text text-decoration-none">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="text-light link-text text-decoration-none">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="text-light link-text text-decoration-none">About</Link>
                            </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header