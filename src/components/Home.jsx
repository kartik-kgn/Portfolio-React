const Home = () => {
  const openResume = () => {
    window.open("./src/resume.pdf", "_blank");
  };

  return (
    <>
      <main>
        <article className="container home">
          <aside className="Paragraph">
            <p className="p2 my-5">
              Hello!👋 <br />
              I’m Kartik <br />A Front-end Developer
            </p>
            <p className="p3">
            Specializing in modern web development, I leverage React for interactive user interfaces, JavaScript for dynamic functionality, and Bootstrap for sleek, responsive design. Together, these technologies help me create polished and efficient websites that deliver both form and function.
            </p>
          </aside>
          <button className="btn mx-4" onClick={openResume}>
            RESUME
          </button>
        </article>
      </main>
    </>
  );
};

export default Home;
