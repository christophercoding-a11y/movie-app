const Header =()=> {

    return (
        <header className="header" id="header">
            <section className="section" id="headerSection">
                <div className="container">
                    <div className="text-capitalize">
                        <h1 className="header-text text-capitalize">reel movies</h1>
                        <nav className="topNav">
                            <ul className="nav list-unstyled justify-content-between">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Contact</a></li>

                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header