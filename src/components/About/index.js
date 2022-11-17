function About() {
  return (
    <section className="about-section">
      <article>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus.
          <br />
          Condimentum molestie. dolor sit amet, consectetur adipiscing elit. ac feugiat metus aliquam maximus.
        </p>

        <div className="skills-list">
          <h3>Skills</h3>
          <ul>
            <li>HTML, CSS, Javascript</li>
            <li>MongoDB, Express.js, React, Node.js</li>
            <li>Sequelize, Mongoose, Bootstrap</li>
            <li>Git, MySQL</li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default About;