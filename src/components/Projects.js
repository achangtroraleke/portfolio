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
        link:'https://github.com/achangtroraleke/todo-project.git'
        },

        {
            title:'World News (Current Events Web App)',
            description:'World News is a web applicatio, where you can catch up on events that are occuring around the world. It pulls news data from a News API ensuring that the user is getting the most recent news.',
            image:"world-news",
            link:'https://github.com/achangtroraleke/World-News.git'

        },

        {
            title:'Portfolio Website',
            description:"This Portfolio is my showcase of how much I've learned throughout my journey. Starting from Python and its frameworks to Javascript and its Web capabilities.",
            image:"portfolio-site"
        },

        {
            title:'The Moves (Polling Site)',
            description:'The Moves is a website created in Django and deployed on PythonAnyWhere. Users can sign up on the site to see suggested plans for the weekend or create plan for other users to vote on. It is a weekly poll that registered users can participate in.',
            image:"the-moves",
            link:'https://github.com/achangtroraleke/Moves_Project.git'
        }
    ]


    return(
        <section className="project-section">
            <div className="container flex-column center project-layout">
            <h1 className="header center-text">Projects</h1>
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
                                    <div className="project-link-box center center-text">
                                        <a href={project.link}><button className="button-style">GitHub</button></a>
                                    </div>  
                                </div>
                                </SwiperSlide>  
                                )
                            })}

                            </Swiper>
                        </div>
               
                </div>
            </div>

        </section>
    )
}

export default ProjectSection;