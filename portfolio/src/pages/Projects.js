import React from 'react';
import '../less/project.less'

export default function Projects (){
    return(
        <>
       <div className="project-wrapper">
          <h1>Projects</h1>
          <div className="project_container">

            <div className="project_card">
              <img src={require('../images/Cordial Chat app.PNG')} alt='The Lux Resort Hotel Website'/>
              <h3><a target="_blank" href="https://theluxresort.netlify.app/">Crodial Chat</a></h3>
              <div className="description">
                    <p>A React.js Clone of Discord using Firebase as the backend and Google Sign In athentication.</p> 
              </div>
              <p className="date">Date: October 2020</p>

              <div className="github">
                <a target="_blank" href="https://github.com/Elisa-Alvarez/Cordial-Chat">
                  <img className="logo" src={require("../images/GitHub-Mark-Light-64px.png")} alt="github logo"/>
                </a>
              </div>
          </div>
          
          <div className="project_card">
            <img className="conway" src={require("../images/Conway's_game (2).PNG")} alt="Conway's Game of Life using Pygame"/>
            <h3><a target="_blank" href="https://github.com/Elisa-Alvarez/Conways-Game-Of-Life/">Conway's Game of Life</a></h3>
            <div className="description">
              <p>Using Python's pygame libray recreated Conway's Game of Life.</p> 
            </div>
            <p className="date">Date: September 2020</p>

            <div className="github">
              <a target="_blank" href="https://github.com/Elisa-Alvarez/Conways-Game-Of-Life">
              <img className="logo" src={require("../images/GitHub-Mark-Light-64px.png")} alt="github logo"/>
              </a>
            </div>
          </div>

          <div className="project_card">
            <img src={require('../images/TheLuxResort.PNG')} alt='The Lux Resort Hotel Website'/>
            <h3><a target="_blank" href="https://theluxresort.netlify.app/">The Lux Resort Hotel Website</a></h3>
            <div className="description">
                  <p>React app using Context Api, Contentful, Styled Components and Material UI</p> 
            </div>
            <p className="date">Date: September 2020</p>

            <div className="github">
              <a target="_blank" href="https://github.com/Elisa-Alvarez/LuxuryBeachHotel">
              <img className="logo" src={require("../images/GitHub-Mark-Light-64px.png")} alt="github logo"/>
              </a>
            </div>
          </div>

          <div className="project_card">
            <img src={require('../images/Expat-journal.PNG')} alt='The Expat Journal Goup Project'/>
            <h3><a target="_blank" href="https://expat-journal-elwjzbp06.vercel.app/">The Expat Journal</a></h3>
            <div className="description">
              <p>Colab project with 3 others. Contributions included the Login/Sign Up, verification for inputs using Yup.js and animations using GSAP</p> 
            </div>
            <p className="date">Date: June 2020</p>

            <div className="github">
              <a target="_blank" href="https://github.com/Build-Expat-Journal-1/Front-End">
              <img className="logo" src={require("../images/GitHub-Mark-Light-64px.png")} alt="github logo"/>
              </a>
            </div>
          </div>

          <div className="project_card">
            <img src={require('../images/Vr-funding.PNG')} alt='Virtual Reality Funding Landing Page'/>
            <h3><a target="_blank" href="https://vr-funding-287b6b.netlify.app/">VR Funding Website</a></h3>
            <div className="description">
                  <p>Collab project with 6 others to make a mock funding website for VR investors.Contributions included the mobile resposive landing page 
                    using Html,CSS and Less</p> 
            </div>
            <p className="date">Date: May 2020</p>

            <div className="github">
              <a target="_blank" href="https://github.com/Build-Week-VRFP-2/UI-Unit-1">
              <img className="logo" src={require("../images/GitHub-Mark-Light-64px.png")} alt="github logo"/>
              </a>
            </div>
          </div>

         </div>

        </div>
        </>
    )
}