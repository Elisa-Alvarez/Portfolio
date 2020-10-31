import React from 'react';
import '../less/project.less'

export default function Projects (){
    return(
        <>
        <h1>Projects</h1>
        <div className="project_container">

          <div className="project_card">
            <img src={require('../images/Cordial Chat app.PNG')} alt='The Lux Resort Hotel Website'/>
            <h3><a target="_blank" href="https://theluxresort.netlify.app/">Crodial Chat</a></h3>
            <div className="description">
                  <p>A React.js Clone of Discord using Firebase as the backend and Google Sign In athentication.</p> 
            </div>
          </div>

          <div className="project_card">
            <img src={require('../images/TheLuxResort.PNG')} alt='The Lux Resort Hotel Website'/>
            <h3><a target="_blank" href="https://theluxresort.netlify.app/">The Lux Resort Hotel Website</a></h3>
            <div className="description">
                  <p>React app using Context Api, Contentful, Styled Components and Material UI</p> 
            </div>
          </div>

          <div className="project_card">
            <img src={require('../images/Expat-journal.PNG')} alt='The Expat Journal Goup Project'/>
            <h3><a target="_blank" href="https://expat-journal-elwjzbp06.vercel.app/">The Expat Journal</a></h3>
            <div className="description">
              <p>Colab project with 8 others. Contributions included the Login/Sign Up, verification for inputs using Yup.js and animations using GSAP</p> 
            </div>
          </div>





          <div className="project_card">
            <img src={require('../images/TheLuxResort.PNG')} alt='The Lux Resort Hotel Website'/>
            <h3>The Lux Resort Hotel Website</h3>
            <div className="description">
                  <p>This project was created with create react app. Using a third party data service Contentful and using
                    context api to pass data throughout the application and into the search bar. For styling material ui for buttons and Style Componnents were used for the 
                    banners. 
                  </p> 
            </div>
          </div>



         </div>



        <div className="github">

        </div>
        </>
    )
}