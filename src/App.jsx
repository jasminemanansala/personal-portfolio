import React, { useEffect } from 'react';


function App() {

  useEffect(() => {
    const toggleButton = $('.menu-toggle');
    const nav = $('.main-navigation');

    // toggle button
    toggleButton.on('click', function(e) {
      e.preventDefault();
      toggleButton.toggleClass('is-clicked');
      nav.slideToggle();
    });

    // nav items
    nav.find('li a').on("click", function() {
      // update the toggle button
      toggleButton.toggleClass('is-clicked');
      // fadeout the navigation panel
      nav.fadeOut();
    });

    // Cleanup event listeners on component unmount
    return () => {
      toggleButton.off('click');
      nav.find('li a').off('click');
    };
  }, []);

  




  useEffect(() => {
    // Smooth Scrolling
    $('.smoothscroll').on('click', function (e) {
      e.preventDefault();
      var target = this.hash,
          $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
        window.location.hash = target;
      });
    });
  }, []); // Empty dependency array ensures this runs once after the component mounts

  return (
    <>
      {/* header 
      ================================================== */}
      <header>
        <div className="row">
          <div className="top-bar">
            <a className="menu-toggle" href="#">
              <span>Menu</span>
            </a>
            <div className="logo">
              <a href="index.html">KARDS</a>
            </div>
            <nav id="main-nav-wrap">
              <ul className="main-navigation">
                {/* <li className="current"> */}
                <li>
                  <a className="smoothscroll" href="#intro" title="">
                    Home
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#about" title="">
                    About
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#resume" title="">
                    Resume
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#portfolio" title="">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#contact" title="">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>{" "}
          {/* /top-bar */}
        </div>{" "}
        {/* /row */}
      </header>{" "}
      {/* /header */}
      {/* intro section
      ================================================== */}
      <section id="intro">
        <div className="intro-overlay" />
        <div className="intro-content">
          <div className="row">
            <div className="col-twelve">
              <h5>Welcome.</h5>
              <h1>I'm Jasmine Manansala.</h1>
              <p className="intro-position">
                <span>Student</span>
                <span>Information Systems 3</span>
              </p>
              <a className="button stroke smoothscroll" href="#about" title="">
                More About Me
              </a>
            </div>
          </div>
        </div>{" "}
        {/* /intro-content */}
        <ul className="intro-social">
          <li>
            <a href="https://www.facebook.com/Nanamicchii/" target='_blank'>
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target='_blank'>
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target='_blank'>
              <i className="fa fa-instagram" />
            </a>
          </li>
        </ul>{" "}
        {/* /intro-social */}
      </section>{" "}
      {/* /intro */}
      {/* about section
      ================================================== */}
      <section id="about">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>About</h5>
            <h1>Let me introduce myself.</h1>
            <div className="intro-info">
              <img src="images/profile-pic.jpg" alt="Profile Picture" />
              <p className="lead">
                A 3rd year Information Systema student of La Verdad Christian College.
                I am friendly, talkative, approachable and hardworking person who strives excellence in everything I do.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* /section-intro */}
        <div className="row about-content">
          <div className="col-six tab-full">
            <h3>Profile</h3>
            <p>
            A dedicated student of La Verdad Christian College with a passion in programming.
            Skilled in HTML/CSS, Java, and C++, I thrive 
            on solving complex problems, designing websites and delivering exceptional results. 
            Always eager to learn and collaborate, I'm committed to staying at 
            the forefront of technological advancements.
            </p>
            <ul className="info-list">
              <li>
                <strong>Fullname:</strong>
                <span>Jasmine Torres Manansala</span>
              </li>
              <li>
                <strong>Birth Date:</strong>
                <span>August 26, 2002</span>
              </li>
              <li>
                <strong>Job:</strong>
                <span>Student</span>
              </li>
              <li>
                <strong>Website:</strong>
                <span>www.facebook.com/Nanamicchii</span>
              </li>
              <li>
                <strong>Email:</strong>
                <span>jasminemanansala.work@gmail.com</span>
              </li>
            </ul>{" "}
            {/* /info-list */}
          </div>
          <div className="col-six tab-full">
            <h3>Skills</h3>
            <p>
            I am a skilled programmer proficient in HTML, CSS, Java, and C++. 
            I have experience in building responsive web applications and 
            developing efficient software solutions.
            </p>
            <ul className="skill-bars">
              <li>
                <div className="progress percent90">
                  <span>90%</span>
                </div>
                <strong>HTML</strong>
              </li>
              <li>
                <div className="progress percent85">
                  <span>85%</span>
                </div>
                <strong>PHP</strong>
              </li>
              <li>
                <div className="progress percent70">
                  <span>70%</span>
                </div>
                <strong>JQuery</strong>
              </li>
              <li>
                <div className="progress percent95">
                  <span>95%</span>
                </div>
                <strong>CSS</strong>
              </li>
              <li>
                <div className="progress percent75">
                  <span>75%</span>
                </div>
                <strong>Wordpress</strong>
              </li>
            </ul>{" "}
            {/* /skill-bars */}
          </div>
        </div>
        <div className="row button-section">
          <div className="col-twelve">
            <a
              href="#contact"
              title="Hire Me"
              className="button stroke smoothscroll"
            >
              Hire Me
            </a>
            <a href="Manansala_Jasmine_Resume.pdf" download="Manansala_Jasmine_Resume.pdf" title="Download CV" className="button button-primary">
              Download CV
            </a>
          </div>
        </div>
      </section>{" "}
      {/* /process*/}
      {/* resume Section
      ================================================== */}
      <section id="resume" className="grey-section">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Resume</h5>
            <h1>More of my credentials.</h1>
            <p className="lead">
            Passionate and dedicated Front-End Developer with a strong command of 
            JavaScript, HTML, and CSS, seeking to leverage my skills and experience 
            to create exceptional user experiences and play a key role in building 
            and enhancing web applications. Eager to collaborate with 
            cross-functional teams, develop high-quality code, and stay updated 
            with the latest industry trends and best practices.
            </p>
          </div>
        </div>{" "}
        {/* /section-intro*/}
        <div className="row resume-timeline">
          <div className="col-twelve resume-header">
            <h2>Professional Experience</h2>
          </div>{" "}
          {/* /resume-header */}
          <div className="col-twelve">
            <div className="timeline-wrap">
              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-graduation-cap" />
                </div>
                <div className="timeline-header">
                  <h3>Junior Developer</h3>
                  <p>2022 - Present</p>
                </div>
                <div className="timeline-content">
                  <h4>La Verdad Christian College</h4>
                  <p>
                  Assisted in developing and maintaining front-end components for web applications.
                  Worked with designers to translate wireframes and mockups into interactive and responsive web pages.
                  Conducted browser compatibility testing and debugging to ensure seamless user experiences.
                  Contributed to the improvement of code quality and performance through refactoring and optimization.
                  </p>
                </div>
              </div>{" "}
              {/* /timeline-block */}
              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-graduation-cap" />
                </div>
                <div className="timeline-header">
                  <h3>Programmer</h3>
                  <p>2019 - 2022</p>
                </div>
                <div className="timeline-content">
                  <h4>MHS Company</h4>
                  <p>
                  Assisted in developing and maintaining front-end components for web applications.
                  Worked with designers to translate wireframes and mockups into interactive and responsive web pages.
                  Conducted browser compatibility testing and debugging to ensure seamless user experiences.
                  Contributed to the improvement of code quality and performance through refactoring and optimization.
                  </p>
                </div>
              </div>{" "}
              {/* /timeline-block */}
            </div>{" "}
            {/* /timeline-wrap */}
          </div>{" "}
          {/* /col-twelve */}
        </div>{" "}
        {/* /resume-timeline */}
        <div className="row resume-timeline">
          <div className="col-twelve resume-header">
            <h2>Education</h2>
          </div>{" "}
          {/* /resume-header */}
          <div className="col-twelve">
            <div className="timeline-wrap">
              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-briefcase" />
                </div>
                <div className="timeline-header">
                  <h3>Bachelor of Science in Information Systems</h3>
                  <p>2022 - Present</p>
                </div>
                <div className="timeline-content">
                  <h4>La Verdad Christian College</h4>
                  <p>
                  During my stay at La Verdad Christian College, I developed a strong academic 
                  foundation in Bachelor of Science in Information Systems. I 
                  actively engaged in subjects related to the course, 
                  fostering critical thinking and problem-solving skills. 
                  This enriching experience equipped me with the necessary knowledge and 
                  abilities to excel in coding and programming.
                  </p>
                </div>
              </div>{" "}
              {/* /timeline-block */}
              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-briefcase" />
                </div>
                <div className="timeline-header">
                  <h3>Bachelor of Science in Information Technology</h3>
                  <p>2021 - 2022</p>
                </div>
                <div className="timeline-content">
                  <h4>Don Honorio Ventura State University</h4>
                  <p>
                  I pursued my Bachelor of Science in Information Technology at 
                  Don Honorio Ventura State University, where I delved into 
                  technology. I actively participated in 
                  extracurricular activities, 
                  enhancing my skills such as leadership, teamwork, 
                  communication. This enriching experience equipped me with the 
                  necessary knowledge and skills to excel in my chosen field.
                  </p>
                </div>
              </div>{" "}
              {/* /timeline-block */}
              <div className="timeline-block">
                <div className="timeline-ico">
                  <i className="fa fa-briefcase" />
                </div>
                <div className="timeline-header">
                  <h3>Information Communication and Technology Strand</h3>
                  <p>2019 - 2022</p>
                </div>
                <div className="timeline-content">
                  <h4>La Verdad Christian College</h4>
                  <p>
                  I attended La Verdad Christian College, where I honed my critical thinking and 
                  problem-solving skills. I actively participated in various extracurricular 
                  activities and gained valuable experience through programming.
                  </p>
                </div>
              </div>{" "}
              {/* /timeline-block */}
            </div>{" "}
            {/* /timeline-wrap */}
          </div>{" "}
          {/* /col-twelve */}
        </div>{" "}
        {/* /resume-timeline */}
      </section>{" "}
      {/* /features */}
      {/* Portfolio Section
      ================================================== */}
      <section id="portfolio">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Portfolio</h5>
            <h1>Check Out Some of My Works.</h1>
            <p className="lead">
            I invite you to explore my portfolio to discover my latest projects.
            Please visit my portfolio to see my design and development skills in action.
            Dive into my portfolio to uncover the magic behind my work.
            </p>
          </div>
        </div>{" "}
        {/* /section-intro*/}
        <div className="row portfolio-content">
          <div className="col-twelve">
            {/* portfolio-wrapper */}
            <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img src="images/portfolio/portfolio01.png" alt="Portfolio01" />
                  <a href="https://chipper-lebkuchen-b72027.netlify.app/" target="_blank" className="overlay">
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">Portfolio Website</h3>
                        <span className="folio-types">A Web Development Final 
                          Project I had where in it focuses mainly on showcasing 
                          myself with additional Lorem Ipsum information to fulfill 
                          the website design.</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* /folio-item */}
              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img src="images/portfolio/portfolio02.png" alt="Portfolio02" />
                  <a href="https://dbwebsite.netlify.app/" target="_blank" className="overlay">
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">Simple Log in Posts Page</h3>
                        <span className="folio-types">A simple Web Development 2 
                          Final Project where the user can log in through if and 
                          only if the username is already existing in the database 
                          together with the password that I prompt as “secret123”. 
                          It showcase posts and posts details too.</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* /folio-item */}
              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img src="images/portfolio/portfolio03.png" alt="Portfolio03" />
                  <a href="https://shswebsiterecipe.netlify.app/" target="_blank" className="overlay">
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">Recipe Website</h3>
                        <span className="folio-types">A simple recipe website I made 
                          back when I was in 12th grade as part of our website 
                          making activity. The site has a simple minimalistic 
                          design yet pleasing to the eyes.</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* /folio-item */}
              <div className="bgrid folio-item">
                <div className="item-wrap">
                  <img src="images/portfolio/portfolio04.png" alt="Portfolio04" />
                  <a href="https://manga-gamit.netlify.app/" target="_blank" className="overlay">
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">Manga-Gamit</h3>
                        <span className="folio-types">A website made back when I was 
                          in 12th Grade along with my groupmates as a final project 
                          in our Website Making that is about few selected mangas 
                          and some benefial instruction in reading a manga.
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>{" "}
            </div>{" "}
            {/* /portfolio-wrapper */}
          </div>{" "}
          {/* /twelve */}
        </div>{" "}
        {/* /portfolio-content */}
      </section>{" "}
      {/* /portfolio */}
      {/* contact
      ================================================== */}
      <section id="contact">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Contact</h5>
            <h1>I'd Love To Hear From You.</h1>
            <p className="lead">
            Feel free to reach out to me via email at <i>jasminemanansala.work@gmail.com</i> for 
            any inquiries, collaborations, or simply to discuss your project ideas. 
            I'm always open to new opportunities and eager to contribute my skills 
            to innovative projects.
            </p>
          </div>
        </div>{" "}
        {/* /section-intro */}
        <div className="row contact-form">
          <div className="col-twelve">
            {/* form */}
            <form name="contactForm" id="contactForm" method="post" action="">
              <fieldset>
                <div className="form-field">
                  <input
                    name="contactName"
                    type="text"
                    id="contactName"
                    placeholder="Name"
                    defaultValue=""
                    minLength={2}
                    required=""
                  />
                </div>
                <div className="form-field">
                  <input
                    name="contactEmail"
                    type="email"
                    id="contactEmail"
                    placeholder="Email"
                    defaultValue=""
                    required=""
                  />
                </div>
                <div className="form-field">
                  <input
                    name="contactSubject"
                    type="text"
                    id="contactSubject"
                    placeholder="Subject"
                    defaultValue=""
                  />
                </div>
                <div className="form-field">
                  <textarea
                    name="contactMessage"
                    id="contactMessage"
                    placeholder="message"
                    rows={10}
                    cols={50}
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="form-field">
                  <a href="#intro"><button className="submitform">Submit</button></a>
                  <div id="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1" />
                      <div className="bounce2" />
                      <div className="bounce3" />
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>{" "}
            {/* Form End */}
            {/* contact-warning */}
            <div id="message-warning"></div>
            {/* contact-success */}
            <div id="message-success">
              <i className="fa fa-check" />
              Your message was sent, thank you!
              <br />
            </div>
          </div>{" "}
          {/* /col-twelve */}
        </div>{" "}
        {/* /contact-form */}
        <div className="row contact-info">
          <div className="col-four tab-full">
            <div className="icon">
              <i className="icon-pin" />
            </div>
            <h5>Where to find me</h5>
            <p>
              24 Purok 1, Sta. Cruz
              <br />
              Macabebe, Pampanga
              <br />
              Philippines, 2018
            </p>
          </div>
          <div className="col-four tab-full collapse">
            <div className="icon">
              <i className="icon-mail" />
            </div>
            <h5>Email Me At</h5>
            <p>
              jasminemanansala.work@gmail.com
              <br />
              jasminemanansala0826@gmail.com
            </p>
          </div>
          <div className="col-four tab-full">
            <div className="icon">
              <i className="icon-phone" />
            </div>
            <h5>Call Me At</h5>
            <p>
              Phone: (+63) 905 294 2372
              <br />
              Mobile: (+63) 905 294 2372
              <br />
              Fax: (555) 555 5555
            </p>
          </div>
        </div>{" "}
        {/* /contact-info */}
      </section>{" "}
      {/* /contact */}
      {/* footer
      ================================================== */}
      <footer>
        <div className="row">
          <div className="col-six tab-full pull-right social">
            <ul className="footer-social">
              <li>
                <a href="https://www.facebook.com/Nanamicchii" target="_blank">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-eight tab-full">
            <div className="copyright">
              <span>© Copyright 2024 </span>
              <span>
                Design by <a href="http://www.styleshout.com/">styleshout</a>
              </span>
              <span>
                Distributed by <a href="https://themewagon.com/">themewagon</a>
              </span>
            </div>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#intro">
              <i className="fa fa-long-arrow-up" />
            </a>
          </div>
        </div>{" "}
        {/* /row */}
      </footer>
      {/* <div id="preloader">
        <div id="loader" />
      </div> */}
      {/* Java Script
      ================================================== */}
</>
  )
}

export default App;
