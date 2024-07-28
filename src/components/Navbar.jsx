import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <h6 className="navbar-brand"> The Real Developer </h6>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              HOME <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/about">
              ABOUT ME <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/project">
              PROJECTS <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/contact">
              CONTACT ME <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>

        <div className="social-media">
          <a
            href="https://github.com/kartik-kgn"
            target="_blank"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/kartik_0404"
            target="_blank"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://www.facebook.com/kartiknilgirwar04"
            target="_blank"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="https://www.linkedin.com/in/kartiknilgilwar/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
