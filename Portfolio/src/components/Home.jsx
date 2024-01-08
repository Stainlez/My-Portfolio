export const Home = () => {
  return (
    <div>
      
      <header>
            <button className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
                    <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
                </ul>
            </nav>
        </header>

        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Ezeakalue Jude</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">FRONT-END DEV</p>
        </section>
    </div>
  )
}
