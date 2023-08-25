import React from 'react';
import './Home.scss';


function Home() {

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
        <div className='Home-picture'></div> {/* Avatar Picture for Homepage. */}
      </section>

      <section className='home-about-me'>
        <div className='Heading'>
          About Me
        </div>
        <div className='Heading-subtext'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctusnec ullamcorper mattis, pulvinar dapibus leop llamcorper, lorem ipsum.
        </div>
        <div className='content'>
            <div className='content-1'></div>
            <div className='content-2'></div>
            <div className='content-3'></div>
        </div>
      </section>


    </div>
  );
}

export default Home;