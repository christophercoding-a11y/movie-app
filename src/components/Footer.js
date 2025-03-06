const Footer =()=> {

    return (
        <footer className="footer" id="footer">
            <div className="container">
            <div className="row">
                <div className="col-sm-6">
            <h2 className="text-uppercase text-light location-heading">Location</h2>
            <p className="location-text text-light">754 Big road Rd, Ridgeland, CA 56187</p>
                </div>
                <div className="col-sm-6">
                    <h2 className="text-center text-sm-end social-item text-uppercase text-light mt-4 ">socials</h2>
                    <nav className="nav social-nav justify-content-center justify-content-sm-end">
                        <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"target="_blank" className="nav-link">
                            <i className="bi bi-linkedin social-icons"></i>
                            <span className="visually-hidden">linkedin</span>
                        </a>
                        <a href="https://x.com/chriscode167957" target="_blank" className="nav-link">
                            <i className="bi bi-twitter social-icons"></i>
                            <span className="visually-hidden">twitter</span>
                        </a>
                    </nav>
                </div>
            </div>
                <p className="colophon text-center text-light">Site by Christopher Jackson</p>
        </div>
        </footer>
    )
}

export default Footer