import React from 'react';
import './Portfolio.scss';

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
    </div>
  );
}

export default Portfolio;