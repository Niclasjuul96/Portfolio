import React from 'react';
import './Portfolio.scss';
import projects from "../assets/projects"



function Portfolio() {
  document.title = 'Portfolio';


  const onProjectclick = (project) => {
    window.open(project.livepreviewurl, '_blank');
  }

  
  let counter = 0; 
  const projectsContent = projects.map(project => {
    counter++;
    if( counter <= 2){
      return (
        <div id={"image" + counter} className='big-box'>
          <img src={project.imgURL} alt='big-project' className='big-image' onClick={() => {onProjectclick(project)}}/>
        </div>
      )
    }else if(counter <= 9){
      return ( 
      <div id={"image" + counter} className='small-box'>
        <img src={project.imgURL} alt='small-project' className='small-image' onClick={() => {onProjectclick(project)}}/>
      </div>
      )
    }else{
      return (<></>)
    }
  })

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
        {projectsContent}
      </section>
  
    </div>
  );
}

export default Portfolio;