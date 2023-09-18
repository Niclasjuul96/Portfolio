import React, { useState } from 'react';
import './Portfolio.scss';
import projects from "../assets/projects"



function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  document.title = 'Portfolio';


  const onProjectclick = (project) => {
    setSelectedProject(project);
  }

  const closeModal = () => {
    setSelectedProject(null);
  }

  const handleClicklive = () => {
    window.open(selectedProject.livepreviewurl);
  }

  const handleClickGit = () => {
    window.open(selectedProject.githuburl);
  }
  
  let counter = 0; 
  const projectsContent = projects.map(project => {
    counter++;
    if( counter === 1 || counter === 9){
      return (
        <div id={"image" + counter} className='big-box' key={project.key}>
          <img src={project.imgURL} alt='big-project' className='big-image' onClick={() => {onProjectclick(project)}} key={project.key}/>
        </div>
      )
    }else if(counter <= 8){
      return ( 
      <div id={"image" + counter} className='small-box' key={project.key}>
        <img src={project.imgURL} alt='small-project' className='small-image' onClick={() => {onProjectclick(project)}} key={project.key}/>
      </div>
      )
    }else{
      return (<></>)
    }
  });



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
            You can click on the projets and it will direct you to the project. Feel free to contact me for more informations about the projects. 
          </div>
          <div className='underline'></div>
      </section>

      <section className='projects'>
        {projectsContent}
      </section>

      {selectedProject && (
        <div className="modal">
          <div className="content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img className='image' src={selectedProject.imgURL} alt='project'></img>
            <h2 className='title'>{selectedProject.title}</h2>
            <p className='detail'>{selectedProject.detail}</p>
            {selectedProject.accounts && (
              <p>
                {selectedProject.accounts.map((account, index) => (
                  <>
                    {account}
                    {index < selectedProject.accounts.length - 1 && <br />}
                  </>
                ))}
              </p>
            )}
            <p className='techstack'><b>TechStack used:</b> {selectedProject.tech.join(", ")}</p>
            <div className="btns">
              <button className='livepreview' onClick={handleClicklive}>Live Preview</button>
              <button className='Github' onClick={handleClickGit}>Github Repository</button>
            </div>
          </div>
        </div>
      )}

  
    </div>
  );
}

export default Portfolio;