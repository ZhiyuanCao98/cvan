import React, { Component, useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import { useSpring, animated } from 'react-spring'


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`


const BackgroundVideo = () => {
    return (
        <div className="fullscreen">
            <video className="video" autoPlay="autoplay" id="myVideo" muted>
                <source src="about.mp4" type="video/mp4" />
                Support
            </video>
        </div>
    )
}

const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function AboutPage() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    const slideInWelcome = useSpring({ config: { duration: 1000 }, from: { left: '-60%' }, left: '0%' })
    const workExperience = [
        {
            id: 0, data: {
                title: 'Research Assistant co-op',
                company: 'University of Toronto',
                date: '2019/08 - 2019/12',
                description: '1. Developing a competitive algorithm for biological data \n2. Designing and building a user-friendly literature database',
                logoPath: './logos/uoft.jpg'
            }
        },
        {
            id: 1, data: {
                title: 'Research Associate co-op',
                company: 'York University',
                date: '2019/06 - 2019/12',
                description: '1. Improving performance of a deep learning algorithm\n2. Evaluated the output of a natural language processing algorithm.',
                logoPath: './logos/york.png'
            }
        },
        {
            id: 2, data: {
                title: 'Applicant Specialist co-op',
                company: 'Sanofi',
                date: '2018/09-2018/12',
                description: '1. Generated data reports from the database based on requests.\n2. Manipulated and updated database and control documents.',
                logoPath: './logos/sanofi.png'
            }
        },
        {
            id: 3, data: {
                title: 'Teaching Assistant',
                company: 'Northeastern University',
                date: '2017/09 - 2020/04',
                description: 'Teaching Assistant of Courses: \n1. Logic and Computation (CS2800) \n2. Information Science (IS2000) \n3. Programming with data (DS2000)',
                logoPath: './logos/neu.png'
            }
        },

    ]

    const skillSetLanguage = [
        {
            id: 0, data: {
                name: 'Python',
                year: '3',
                perc: '95%',
                logo: './logos/python.png'
            }
        },
        {
            id: 1, data: {
                name: 'Java',
                year: '3',
                perc: '85%',
                logo: './logos/java.png'
            }
        },
        {
            id: 2, data: {
                name: 'Javascript',
                year: '2',
                perc: '80%',
                logo: './logos/javascript.png'
            }
        },
        {
            id: 3, data: {
                name: 'SQL',
                year: '3',
                perc: '80%',
                logo: './logos/mysql.png'
            }
        },
        {
            id: 4, data: {
                name: 'DrRacket',
                year: '4',
                perc: '70%',
                logo: './logos/drracket.png'
            }
        },
        {
            id: 5, data: {
                name: 'C++',
                year: '2',
                perc: '50%',
                logo: './logos/cplus.png'
            }
        },
    ]

    const skillSetFramework = [
        {
            id: 0, data: {
                name: 'React',
                year: '2',
                perc: '80%',
                logo: './logos/react.png'
            }
        },
        {
            id: 1, data: {
                name: 'Scss',
                year: '2',
                perc: '65%',
                logo: './logos/Sass.png'
            }
        },
        {
            id: 2, data: {
                name: 'Pytorch',
                year: '2',
                perc: '75%',
                logo: './logos/pytorch.png'
            }
        },
        {
            id: 3, data: {
                name: 'SpringMVC',
                year: '1',
                perc: '50%',
                logo: './logos/spring.jpg'
            }
        },
        {
            id: 4, data: {
                name: 'Jira',
                year: '2',
                perc: '85%',
                logo: './logos/jira.svg'
            }
        },
        {
            id: 5, data: {
                name: 'Firebase',
                year: '2',
                perc: '70%',
                logo: './logos/firebase.png'
            }
        },
    ]


    return (
        <div className="verticalDisable">
            <BackgroundVideo />

            <div className="fixFullScreen">
                <animated.div className="normalPageContainer" style={{ transform: props.xy.interpolate(trans1) }}
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                    <animated.div style={slideInWelcome} style={{ marginLeft: '5vw' }} className="welcome">

                        <h1 className="name aboutme"> About Me </h1>
                        <h3 className="loveSlogn"> I love Technology, Design, <br /> and Travel </h3>

                    </animated.div>
                </animated.div>
                <div className="filmed"><span>Filmed in</span> <span style={{ fontWeight: '900' }}>Northeastern University,</span><span>Boston, 2019</span></div>
                <div className="scrollDownVert">Scroll Down </div>
            </div>

            <div className="fullScreen"></div>
            <div className="fullScreen" >
                <div className='sectionId idtitle'> 01 <span className='dash'>——</span></div>
                <div className='sectionId dash sectionTitle' style={{ right: '15%' }}> Who I Am</div>
                <div className='normalPageContainer'>

                    <div className='introduceContainer'>
                        <div className="introduceName">曹志远</div>
                        <div className="introduceName" style={{ fontSize: '1.3rem' }}>Zhiyuan Cao</div>
                        <div className="introduceDescription">I have completed my bachelor's degree in computer science from Northeastern University. (2020)
                <br />
                I have a solid background in applied mathematics and computer science, and I demonstrated the strong ability to transfer my knowledge
                from the classroom into real-world practice during my three co-op opportunities.
                <br />
                I enjoyed the industrial atmosphere and built up my communication skills.

                        </div>

                    </div>
                    <div className='personImage'></div>
                </div>

            </div>
            <div className="fullScreen">
                <div className='sectionId2 idtitle'> 02 <span className='dash'>——</span></div>
                <div className='sectionId2 dash sectionTitle2' style={{ right: '15%' }}> Work Experience</div>
                <div className="normalPageContainer workContainer">
                    {workExperience.map((e) =>
                        <a href="https://drive.google.com/file/d/1_Jwm8OBix1olmj43o93aeUzFrE4xm8r2/view?usp=sharing"
                            target="_blank"
                            id={e.id}
                            className='experience'>
                            <div className='experienceHeaderContainer'>
                                <div className='companyLogo' style={{ backgroundImage: `url(${e.data.logoPath})` }}> </div>
                                <div>
                                    <span className='experienceTitle'>
                                        {e.data.title}
                                    </span>
                                    <br />
                                    {e.data.company}
                                </div>
                                <div className='experienceTime'>{e.data.date}</div>
                            </div>
                            <div className='experienceDescription'>{e.data.description.split('\n').map((text, i) => <div key={i}>{text}</div>)} </div>
                        </a>
                    )}
                </div>
            </div>
            <div className="fullScreen">
                <div className='sectionId3 idtitle'> 03 <span className='dash'>——</span></div>
                <div className='sectionId3 dash sectionTitle' style={{ right: '15%' }}>SKILL SET</div>
                <div className='normalPageContainer'>
                    <div className='skillSetLanguageContainer'>
                        <div className="skillSetSectionTitle">Languages</div>
                        {skillSetLanguage.map((l) =>
                            <div id={l.id} className='skillSetLanguageItemContainer'>
                                <div className='skillLogo' style={{ backgroundImage: `url(${l.data.logo})` }}></div>
                                <div className="skillSetRightPart">
                                    <div className='skillHeader'>
                                        <span className='skillName'>{l.data.name}</span>
                                        <span className='skillYear'>{l.data.year} Year</span>
                                        <span className="skillPercNum">{l.data.perc}</span>
                                    </div>
                                    <div className='skillBlankPerc'> <div className='skillOccupyPerc' style={{ width: `${l.data.perc}` }}></div> </div>
                                </div>
                            </div>)}
                    </div>

                    <div className='skillSetFrameWorkContainer'>
                        <div className="skillSetSectionTitle skillSetSectionTitle2">Framework & Library</div>
                        {skillSetFramework.map((l) =>
                            <div id={l.id} className='skillSetLanguageItemContainer skillSetFrameworkItemContainer'>
                                <div className='skillLogo' style={{ backgroundImage: `url(${l.data.logo})` }}></div>
                                <div className="skillSetRightPart">
                                    <div className='skillHeader'>
                                        <span className='skillName frameworkName'>{l.data.name}</span>
                                        <span className='skillYear frameYear1'> {l.data.year}  <span className='frameYear'>Year</span></span>
                                        <span className="skillPercNum frameworkPerNum">{l.data.perc}</span>
                                    </div>
                                    <div className='skillBlankPerc'> <div className='skillOccupyPerc skillFrameworkOccupyPerc' style={{ width: `${l.data.perc}` }}></div> </div>
                                </div>
                            </div>)}
                    </div>
                </div>
                
            
            </div>
            <div className="fullScreen1">
            </div>
            <div className="fullScreen2">
                <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
                <div onClick={scrollTop} className="projectsTitle goTop"> Go Top</div>
                </div>
            </div>

           
        </div>
    )
}

export default AboutPage;