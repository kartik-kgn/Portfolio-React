const About = () => {
  
  const skills = [
    { skill: 'JavaScript', level: 90 },
    { skill: 'React', level: 85 },
    { skill: 'CSS', level: 70 },
    { skill: 'Node.js', level: 70 }
  ];

  return (
    <main className="main-content"> 
      <div className="profile-page">
        <section className="about">
          <div className="container my-5">
            <h1 className="heading">About Me</h1>
            <p className="about-p">
              Hello! I’m <strong>Kartik</strong>, a passionate <strong>Full-Stack Developer</strong> based in <strong>Yavatmal</strong>. With a background in <strong>Computer Science</strong>, I specialize in <strong>Front-end Development</strong>. My journey into <strong>MERN stack development</strong> began with my graduation in Computer Science and a keen interest in coding.
            </p>
            <p className="about-p">
              I thrive on the challenge of solving complex problems and building intuitive user interfaces. My approach is centered around creating efficient and scalable solutions using React.js and other modern technologies. Over the years, I’ve had the opportunity to work with various clients on diverse projects, gaining valuable experience and contributing to impactful work.
            </p>
          </div>
        </section>

        <section className="skills">
          <div className="container">
            <h2 className="heading">My Skills</h2>
            {skills.map((item, index) => (
              <div key={index} className="skill-progress-container">
                <span className="skill-name">{item.skill}</span>
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
                <span className="skill-level">{item.level}%</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
