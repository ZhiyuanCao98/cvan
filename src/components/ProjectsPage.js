import React, { Component, useState, useEffect } from 'react';


function ProjectItem(props) {
    const [hover, setHover] = useState(false);
    const data = props.data
    const path = data.backgroundPath
    // var backGroundImg1 = require(`${path}`);

    if (data.hasLink) {
        return (
            <a id={props.id} href={data.href}
                target="_blank" className="projectItemContainer"
                onMouseEnter={() => { setHover(true) }}
                onMouseLeave={() => { setHover(false) }}
            >
                <div style={{
                    // backgroundImage: `url(require(${data.backgroundPath}))`,
                    backgroundImage: `url(${path})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}

                    className='projectItem'>
                </div>

                {hover ? <div className='projectWord'>
                    <div className='projectTitle'>{data.title}</div>
                    <div> Click to View More</div>
                </div> :
                    <div>
                        <div className='projectTitle'>{data.title}</div>
                        <div className='projectDate'>{data.date}</div>
                        {data.color ? <div className='projectDescription' style={{color: data.color}}>{data.description}</div>
                        : <div className='projectDescription'>{data.description}</div>}
                        
                    </div>
                }
            </a>
        )
    }
    else {
        return (
            <div
                className="projectItemContainer"
                onMouseEnter={() => { setHover(true) }}
                onMouseLeave={() => { setHover(false) }}
            >
                <div style={{
                    backgroundImage: `url(${path})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}

                    className='projectItem'>
                </div>

                {hover ? <div className='projectWord'>
                    <h1> Click to View More</h1>
                </div> :
                    <div>
                        <div className='projectTitle'>{data.title}</div>
                        <div className='projectDate'>{data.date}</div>
                        <div className='projectDescription'>{data.description}</div>
                    </div>
                }
            </div>
        )
    }

}

function ProjectsPage() {
    const projects = [
        {
            id: 0, data: {
                hasLink: true,
                href: 'https://github.com/q463746583/EmojiUFace',
                title: 'EmojiUFace',
                description: 'This program can instantly recognizes user’s facial expression from camera and generate a corresponding emoji.',
                backgroundPath: "/projects/emojiUFace.png",
                date: '2020-04',
                color: '#17C8FF'
            }
        },
        {
            id: 1,
            data: {
                hasLink: true,
                href: 'https://github.com/q463746583/AI-Learning',
                title: 'AI-Pacman',
                description: 'Based on the pacman projects, to implement Search, multi agent and reinforcement learning',
                backgroundPath: "/projects/pacman.png",
                date: '2020-03',
                color: '#17C8FF',
            }
        },
        {
            id: 5,
            data: {
                hasLink: true,
                href: 'https://github.com/q463746583/Raft-Implementation/tree/master',
                title: 'Raft-Implementation',
                description: 'Based on the Raft Conseum Algorithm, build a distributed, Replicated key-value storage',
                backgroundPath: "/projects/raft.png",
                date: '2019-04'
            }
        },
        {
            id: 2,
            data: {
                hasLink: true,
                href: 'https://pocketbook-nbvubjznln.now.sh/',
                title: 'Expensify App',
                description: 'Allows user login via Google account, adding, editing, deleting expense in the dashboard, including a searchand filter system.',
                backgroundPath: "/projects/expensifyApp.png",
                date: '2018-12'
            }
        },

        {
            id: 4, data: {
                hasLink: true,
                href: "https://chatroomcvan.herokuapp.com/",
                title: 'Chat Room',
                description: 'A platform permits user create or access a room, and then chat with each other or share personal location.',
                backgroundPath: "/projects/chatRoom.png",
                date: '2018-11'
            }
        }

    ]

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div>
        <div class="projectPageContainer"> </div>
            <div className="normalPageContainer">
                <div className='projectTitleContainer'>
                    {/* <div className="projectsTitle"><h2>Projects Page</h2></div> */}

                </div>
                <div className='rightBar'>
                    {projects.map((project) =>
                        <a href={"#" + project.id} className='barItem'>
                            <div style={{
                                backgroundImage: `url(${project.data.backgroundPath})`,
                                width: '80%',
                                height: '80%',
                                backgroundSize: 'contain',
                            }}></div>
                            <div className='smallTitle'>{project.data.title.substring(0, 4)}</div>
                        </a>)}

                    <div onClick={scrollTop} className="projectsTitle"> Go Top</div>
                </div>
                <div style={{ height: '5rem' }} />
                {projects.map((project) => <ProjectItem id={project.id.toString()} key={project.id} data={project.data} />)}
            </div>
        </div>
    )
}

export default ProjectsPage;