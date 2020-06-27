import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {AiFillLinkedin, AiFillGithub, AiFillMail} from "react-icons/ai"


function SocialLink() {
    return (
        <div style={{position: 'absolute', right:'4vw', top:'2vw', zIndex: '8'}}>
            
            <a href="https://www.linkedin.com/in/zhiyuan-cao-b91232157/" target="_blank" style={{color : '#840ced'}}> <AiFillLinkedin size={32}/> </a>
            <a href="https://github.com/q463746583" target="_blank" style={{color : '#211F1F'}}> <AiFillGithub size={32}/> </a>
            <Link to="contact" style={{color : '#B23121'}}> <AiFillMail size={32}/> </Link>
        </div>
    )
}

export default SocialLink;