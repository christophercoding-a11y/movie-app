const Footer =()=> {

    return (
        <footer className="footer" id="footer">
            <div className="container">
            <h2 className="text-uppercase text-light location-heading">Location</h2>
            <p className="location-text text-light"> 250 Ring Rd, Ridgeland, MS 39157</p>

            <div className="row">
                <div className="col-sm-6">
                </div>
                <div className="col-sm-6">
                    <h2 className="text-center text-sm-end social-item text-uppercase text-light">socials</h2>
                    <nav className="nav social-nav justify-content-center justify-content-sm-end ">
                        <a href="https://github.com/christophercoding-a11y"target="_blank" className="nav-link">
                            <i className="bi bi-github social-icons"></i>
                            <span className="visually-hidden">github</span>
                        </a>
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