import React from 'react';
import './Home.scss';
import Homeabout from "../assets/section-1-bg1.jpg"
import Avatar from "../assets/avatar.jpg"
import Services from "../assets/services"
import Experiences from "../assets/WorkExperience"

function Home() {

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

  const redirect = () => {
    window.location.href = "./about";
  }
  
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
          <div className='Home-subtext'>a passionate fullstack Developer based in Roskilde, Denmark. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctusnec ullamcorper mattis, pulvinar dapibus leop llamcorper, lorem ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctusnec ullamcorper mattis, pulvinar dapibus leop llamcorper, lorem ipsum. </div>
          <div className='Home-learn-more'><button onClick={redirect}>Learn More</button></div>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctusnec ullamcorper mattis, pulvinar dapibus leop llamcorper, lorem ipsum.
        </div>
        <div className='content'>
            <div className='content-1'>
              <div className='content-1-maintext'>
                <h5>Developing With a Passion While Exploring The World.</h5>
              </div>
              <div className='content-1-subtext'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
              <div className='content-1-subtext2'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <button className='content-1-button'>Contact Me</button>
            </div>
            <div className='content-2'>
              <div className='content-2-subtext1'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
              <div className='content-2-subtext2'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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