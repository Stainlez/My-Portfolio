import img from '../assets/Images/Myself.jpg'
export const Home = () => {
        // const navToggle = document.querySelector('.nav-toggle');
        // const navLinks = document.querySelectorAll('.nav__link')
    
        // navToggle.addEventListener('click', () => {
        // document.body.classList.toggle('nav-open');
        // });
    
        // navLinks.forEach(link => {
        //     link.addEventListener('click', () => {
        //         document.body.classList.remove('nav-open');
        //     })
        // })
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
            <img className="intro__img" src = {img} 
            />
        </section>
    </div>
)
}
