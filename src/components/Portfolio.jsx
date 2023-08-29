import React from 'react';
import './Portfolio.scss';
import avatar from '../assets/avatar.jpg'

function Portfolio() {
  document.title = 'Portfolio';


  return (
    <div className="Portfolio">
        <div className='heading'>
          <h4>
            Portfolio
          </h4> 
          <div className='underline'></div>
        </div>

        <div className='heading'>
          What Services You Will Get From Me 
        </div>
        <div className='description'>
          Here is a list over my last projects, so you can have a sneak peek and see.
        </div>
        <div className='underline'></div>

        <div className='content-with-big'>
          <div className='big-picture'>
            <img src={avatar}></img>
          </div>
          <div className='small-pictures'>
            <div className='small-picture1'>
            <img src={avatar}></img>
            </div>
            <div className='small-picture2'>
            <img src={avatar}></img>
            </div>
          </div>
        </div>
        <div className='small-pictures'>
          <div className='small-picture'>
          <img src={avatar}></img>
          </div>
          <div className='small-picture'>
          <img src={avatar}></img>
          </div>
          <div className='small-picture'>
          <img src={avatar}></img>
          </div>
        </div>
        <div className='content-with-big content2'>
          <div className='small-pictures'>
              <div className='small-picture1'>
              <img src={avatar}></img>
              </div>
              <div className='small-picture2'>
              <img src={avatar}></img>
              </div>
            </div>
            <div className='big-picture'>
            <img src={avatar}></img>
            </div>
        </div>
    </div>
  );
}

export default Portfolio;