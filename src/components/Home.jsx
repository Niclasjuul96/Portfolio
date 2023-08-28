import React from 'react';
import './Home.scss';
import Homeabout from "../assets/section-1-bg1.jpg"
import Avatar from "../assets/avatar.jpg"
import Services from "../assets/services"
import Experiences from "../assets/WorkExperience"

function Home() {
  document.title = "Home";
  const servicescontent = Services.map(service => 
    <div className='card-service' key={service.key}>
      <img src={service.img} alt="services" />
      <div className='card-title'>{service.name}</div>
      <div className='card-description'>{service.description}</div>
      <a className='card-icon' href={service.link}>
        <i className="fas fa-chevron-circle-right"></i>
      </a>
    </div>);

  let workcounter = -1;
  const workExperience1 = Experiences.map((experience) => {
    workcounter++;
    if(workcounter < 2){
      return (
        <div className='card-experience' key={experience.key}>
          <div className='card-title'>{experience.title}</div>
          <div className='card-duration'>{experience.duration}</div>
          <div className='card-description'>{experience.description}</div>
        </div>
      );
        
  
      
    }
    return null;
  });

  workcounter = -1;
  const workExperience2 = Experiences.map((experience) => {
    workcounter++;
    if(workcounter >= 2){
      return (
        <div className='card-experience' key={experience.key}>
          <div className='card-title'>{experience.title}</div>
          <div className='card-duration'>{experience.duration}</div>
          <div className='card-description'>{experience.description}</div>
        </div>
      );
      
    }
    return null;
  });
  
  return (
    <div className="Home">
      <section className='introduction'>
        <div className="Links">
          <ul className='link-list-item'>
            <li>
              <a href="https://www.linkedin.com/in/niclas-juul-schaeffer/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li >
              <a href="https://github.com/Niclasjuul96" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
             <a href="https://www.facebook.com/profile.php?id=1119953702" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
             </a> 
            </li>
          </ul>
        </div>
        <div className='Home-who'>
          <div className='Home-title'>I'm Web Developer Niclas Schæffer</div>
          <div className='Home-subtext'> 
            A passionate Fullstack Web Developer based in Roskilde. co owner of StableStack, and a fulltime dad.
            Fast learner and ready for some challenges.   
          </div>
          {/* <div className='Home-learn-more'><button onClick={redirectlearnmore}>Learn More</button></div> */}
        </div>
        <div className='Home-picture'>
          <img alt="me" src={Avatar}/> {/* Avatar Picture for Homepage. */}
        </div> 
      </section>

      <section className='home-about-me'>
        <div className='Heading'>
          About Me
        </div>
        <div className='Heading-subtext'>
        I like to develop expertise in a number of areas over the course of 
        my life and career.  
        </div>
        <div className='content'>
            <div className='content-1'>
              <div className='content-1-maintext'>
                <h5>Developing With a Passion While Exploring The World.</h5>
              </div>
              <div className='content-1-subtext'>
                <p> 
                  Developing with passion and focused on structured coding style. 
                  I am doing freelancing while i am studying in software technology on DTU, Denmark for my decree.
                  I currently working on projects that will show my skills as a web developer to the world. My personality type is ISFJ-A.  
                </p>
              </div>
              <div className='content-1-subtext2'>
                <p>
                  I don't like to define myself by the work i've done. 
                  I define myself by the work I want to do. Skills can be taught, 
                  personality is inherent. I prefer to keep learning, continue challenging myself, 
                  and do interesting things that matter. 
                </p>
              </div>
              <button className='content-1-button'>Contact Me</button>
            </div>
            <div className='content-2'>
              <div className='content-2-subtext1'>
                <p>
                  Fueled by high energi levels and boundless enthusiasm, 
                  i'm easily inspired and more then willing to follow my fascinations, 
                  wherever they take me. I'm passionate, expressive, multi-talented 
                  spirit with a natural ability to entertain and inspire. I'm never 
                  satisfied to just come up with ideas. Instead i have an almost impulsive 
                  need to act on them.
                </p>
              </div>
              <div className='content-2-subtext2'>
                <p>
                  My abundant energy fuels me in the pursuit of many interests, 
                  hobbies, areas of study and artistic endeavors. 
                  I'm a fast learner, able to pick up new skills and juggle different projects 
                  and roles with relative ease. 
                </p>
                </div>
            </div>
            <div className='content-3'>
              <img src={Homeabout} alt='something' className='content-3-image'></img>
            </div>
        </div>
      </section>

      <section className='Services'>
        <div className='Heading'>
          What Services I'm Providing
        </div>
        <div className='subtext'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <section className='content'>
          {servicescontent}
        </section>
      </section>

      <section className='Work-Experience'>
        <div className='Heading'>
          Work Experience
        </div>
        <div className='subtext'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className='content-1'>
          {workExperience1}
        </div>
        <div className='content-2'>
          {workExperience2}
        </div>
      </section>
    </div>
  );
}

export default Home;