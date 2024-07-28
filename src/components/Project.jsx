const Project = () => {
  return (
    <>
      <main className="main-content">
        <h3 className="heading my-5"> Projects</h3>
        <article className="container cart my-5">
          <div className="card" style={{ width: "18rem" }}>
            <img src="./src/News.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Newsbird App</h5>
              <p className="card-text">
                Built with React and Bootstrap for a sleek design, our news app
                delivers real-time updates and in-depth coverage through a
                powerful API integration.
              </p>
              <a href="#" className="gitbtn">
                <a
                  href="https://github.com/kartik-kgn/NewsBird-React"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </a>
            </div>
          </div>

          <div className="card mx-5" style={{ width: "18rem" }}>
            <img src="./src/Voting.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Voting App</h5>
              <p className="card-text">
                Built with Node.js, Express.js, and MongoDB, our voting app
                offers a robust, scalable platform with real-time data handling
                and secure vote management.
              </p>
              <a href="#" className="gitbtn">
                <a
                  href="https://github.com/kartik-kgn/VoterApp"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src="./src/Porfolio.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Portfolio Website</h5>
              <p className="card-text">
                Built with React and Bootstrap for a modern design, our
                portfolio website showcases your work with smooth navigation and
                dynamic content integration.
              </p>
              <a href="#" className="gitbtn">
                <a
                  href="https://github.com/kartik-kgn/Portfolio-React"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </a>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default Project;
