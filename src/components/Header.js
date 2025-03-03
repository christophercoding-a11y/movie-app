import { Link } from "react-router-dom"

import { GiPopcorn } from "react-icons/gi";

const Header =()=> {

    return (
        <header className="header py-3" id="header">
            <section className="section" id="headerSection">
                <div className="container">
                    <div className="text-capitalize">
                        <h1 className="header-text text-capitalize text-light"><GiPopcorn className="icon" />reel movies</h1>

                        <nav className="topNav">
                            <ul className="nav list-unstyled m-0 justify-content-evenly">
                            <li className="nav-item">
                                <Link className=" text-light link-text text-decoration-none">Menu</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="text-light link-text text-decoration-none">Venue</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="text-light link-text text-decoration-none">FAQ</Link>
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