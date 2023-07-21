import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


const ProjectSection = ()=>{

    const projects = [
        {
        title:'iTask (To Do/Planner Web App)',
        description:'iTask is a web application that can manage and plan task in bulk in the present or future dates. It uses a React frontend and Django for the backend. React is used for the seamless user interface. Django stores Task data.',
        image:"todo-project",
        link:'https://github.com/achangtroraleke/todo-project.git',
        demo:'https://atachart.pythonanywhere.com'
        },

        {
            title:'Portfolio Website',
            description:"This Portfolio is my showcase of how much I've learned throughout my journey. Starting from Python and its frameworks to Javascript and its Web capabilities.",
            image:"portfolio-site",
            link:'https://github.com/achangtroraleke/portfolio.git',
            demo:'https://achangtroraleke.github.io/portfolio/'
        },

        {
            title:'World News (Current Events Web App)',
            description:'World News is a web applicatio, where you can catch up on events that are occuring around the world. It pulls news data from a News API ensuring that the user is getting the most recent news.',
            image:"world-news",
            link:'https://github.com/achangtroraleke/World-News.git',
            demo:"https://achangtroraleke.github.io/World-News/"

        },

      

        {
            title:'The Moves (Polling Site)',
            description:'The Moves is a website created in Django and deployed on PythonAnyWhere. Users can sign up on the site to see suggested plans for the weekend or create plan for other users to vote on. It is a weekly poll that registered users can participate in.',
            image:"the-moves",
            link:'https://github.com/achangtroraleke/Moves_Project.git',
            demo:'https://the-moves.net'
        }
    ]


    return(
        <section className="project-section">
            <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" fill="#9BCDD2" fill-opacity="1"></path></svg>
            <div className="container flex-column center project-layout">
            <h1 className="main-text center-text">Projects</h1>
                <div className="wrapper center">
                        
                        <div id="carousel" className="project-feed center"> 
                        <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                  
                        style={{
                            "--swiper-navigation-color": "#000",
                            "--swiper-navigation-size": "55px",
                            "--swiper-theme-color":"white"
                            
                            
                          }}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                            {projects.map((project,index)=>{
                                return(
                                    <SwiperSlide>
                                    <div className="project-box flex-column center">
                                    <img src={require('../assets/images/'+project.image+'.png')} alt="project"></img>
                                    <h3 className="center-text project-title">{project.title}</h3>
                                    <p className="project-description center">{project.description}</p>
                                    <div className="flex button-group">
                                        <div className="project-link-box  center-text">
                                            <a href={project.link} target="_blank"><button className="button-style">GitHub</button></a>
                                        </div>  
                                        <div className="project-link-box  center-text">
                                            <a href={project.demo} target="_blank"><button className="button-style">Live Demo</button></a>
                                        </div>
                                    </div> 
                                </div>
                                </SwiperSlide>  
                                )
                            })}

                            </Swiper>
                        </div>
               
                </div>
                <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill" fill="#FAF0E4" fill-opacity="1"></path></svg>
            </div>
            

        </section>
    )
}

export default ProjectSection;