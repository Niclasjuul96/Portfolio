import React from 'react';
import './Portfolio.scss';
import avatar from '../assets/avatar.jpg'

function Portfolio() {
  document.title = 'Portfolio';


  return (
    <div className="Portfolio">

      <section className='heading'>
        <div className='title'>
          <h4>Portfolio</h4>
          <div className='underline'></div>
        </div>
      </section>

      <section className='subheading'>
        <div className='subtitle'>
            What Services You Will Get From Me 
          </div>
          <div className='description'>
            Here is a list over my last projects, so you can have a sneak peek and see.
          </div>
          <div className='underline'></div>
      </section>

      <section className='projects'>
        <div  id='image1' className='big-box'>
          <img src={avatar} className='big-image'/>
        </div>
        <div id='image9' className='big-box'>
          <img src={avatar} className='big-image'/>
        </div>
        <div id='image2' className='small-box'>
          <img src={avatar} className='small-image'/>
        </div>
        <div id='image3' className='small-box'>
          <img src={avatar} className='small-image'/>
        </div>
        <div id='image4' className='small-box'>
          <img src={avatar} className='small-image'/>
        </div>
        <div id='image5' className='small-box'>
          <img src={avatar} className='small-image'/>
        </div>
        <div id='image6' className='small-box'>
          <img src={avatar} className='small-image'/>
        </div>
        <div id='image7' className='small-box'>
          <img src={avatar} className='small-image'/>
        </div>
        <div id='image8' className='small-box'>
          <img src={avatar} className='small-image'/>
        </div>
      </section>
  
    </div>
  );
}

export default Portfolio;