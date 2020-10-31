import React,{useState} from 'react';
// import {Link} from 'react-router-dom'
import { Link } from "react-scroll";
import Navbar from '../components/Navbar';




function Home (){


     return(
         <div className="home-page">
             <section className="home-title">
                 <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1132&q=80" alt="Elia Alvarez Full Stack Web Developer" />
                <div className="title">
                 <h1>Elisa Alvarez</h1>
                 <span>Full Stack Developer</span>
                 <Link activeClass="active" to="section-about" spy={true}  smooth={true}  duration={1000}>
                     Learn more
                </Link>
                 </div>
             </section>
        
                  <section id='section-about' >
                      <div className="about-me">
                            
                            <h2>About Me</h2>
                            <p>From the moment I first saw “Hello World” in the console of my first application,
                                 I knew I was hooked into the world of development.
                            </p>
                            <br/>
                            <p>My orginal goal in life was to become a veterinay technicain, but life had other plans when my spouse, 
                                 who was also veterinay technicain at the time, received a long term head injury. Unfortunetly I had to
                                 leave the feild for safer work to provide for my family. That's when I found Lambda School's 9 month endorsement program
                                 on Full Stack Web Development and I decided to take the chance. Looking back I am glad I did
                                 because it open my eyes to how much I could learn and grow. Now I am prepared to dive into the world of development prepared to create
                                 high quality applications.

                            </p>
                      
                      </div>
                      <div className="recent-projects">
                          <h2>Recent Projects</h2>
                        <div className="project_images">
                            <a href="https://cordial-chat.web.app/">
                                 <img className="cordial-chat" src={require('../images/Cordial Chat app.PNG')} alt="Cordial Chat a Discord Clone website." />
                                <h3 className="title_chat">View</h3>
                            </a> 
                            <a href="https://theluxresort.netlify.app/">
                                <img className="thelux" src={require('../images/TheLuxResort.PNG')} alt="The Lux Resort Hotel Website Project"/>
                                <h3 className="title_lux">View</h3>
                            </a> 
                            <a href="https://expat-journal-elwjzbp06.vercel.app/">
                                <img className="expat-journal" src={require('../images/Expat-journal.PNG')} alt="Expat Journal React website" />
                                <h3 className="title_expat">View</h3>
                            </a>     
                        </div>
                      </div>
                      <Navbar />
                  </section>
 
         </div>
     )
}
export default Home