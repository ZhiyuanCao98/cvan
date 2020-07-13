import React, { useState, useEffect, useCallBack } from 'react';
import { BrowserRouter, Route, NavLink, Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring'
import { AiOutlineVerticalAlignTop, AiFillCloseCircle,AiOutlineSend, AiFillFilePdf, AiOutlineBars, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Draggable from 'react-draggable';
import { BsChevronDoubleDown } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";
import { TiBackspaceOutline } from "react-icons/ti";
import { IoIosMail } from "react-icons/io";
import emailjs from 'emailjs-com';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";


const calc = (x, y) => [-(y - window.innerHeight / 2) / 10, (x - window.innerWidth / 2) / 10, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const trans1 = (o) => `opacity(o)`


const ContactBox = (props) => {
    const [stack, setStack] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const templateId = 'sendtome';

    // Initializing didMount as false
    const [didMount, setDidMount] = useState(false)

    // Setting didMount to true upon mounting
    useEffect(() => setDidMount(true), [])

    useEffect(() => {
        if (didMount) {
            if (email.includes("@") && name !== "") {
                document.getElementById("sendBtn").style.filter = "blur(0px)";
                document.getElementById("sendBtn").style.cursor = "pointer";
                document.getElementById("incomplete").style.display = 'none';
                document.getElementById("clear").style.display = 'inline';
                document.getElementById("nameNotify").style.color = '#5cc760';
                document.getElementById("emailNotify").style.color = '#5cc760';
            }
            else {
                document.getElementById("sendBtn").style.cursor = "no-drop";
                document.getElementById("sendBtn").style.filter = "blur(3px)";
                document.getElementById("nameNotify").style.color = 'red';
                document.getElementById("emailNotify").style.color = 'red';
                document.getElementById("incomplete").style.display = 'auto';
                document.getElementById("clear").style.display = 'none';
                if (email.includes("@")) {
                    document.getElementById("emailNotify").style.color = '#5cc760';
                }
                if (name !== "") {
                    document.getElementById("nameNotify").style.color = '#5cc760';
                }
            }
        }

    }, [email, name])

    const sendMail = () => {
        console.log('message seding')
        emailjs.send('mailgun', 'sendtome', {name,email,message}, 'user_HnQjDoFIAJnaqpNwnJ97O')
        .then((response) => {
            console.log('Successfully Received', response.status, response.text);
        });
        setStack(2);
    }

    return (
        <div className='contactContainer'>
            <div onClick={props.close} className='blurEffect'>
            </div>
            <BrowserView>
            {stack === 0 &&
                <Draggable axis="y">
                    <div className='contactWrapper'>
                        <div onClick={props.close} className='contactClose'>
                            <h4> DRAG </h4>
                            <BsChevronDoubleDown className="closeBnt" size={30} />
                            <h4> CLOSE </h4>
                        </div>
                        <h2 style={{ fontFamily: 'Copperplate', fontWeight: '900', marginBottom: '1rem' }}>CONTACT ME</h2>
                        <div className="socialAccount">
                            <div ><a className="socialIcon" href="https://www.linkedin.com/in/zhiyuan-cao-b91232157/" target="_blank" style={{ color: '#0E76A8' }}> <AiFillLinkedin size={40} /><div> Linkedin </div> </a>
                            </div>
                            <div ><a className="socialIcon" href="https://github.com/q463746583" target="_blank" style={{ color: '#211F1F' }}> <AiFillGithub size={40} /> <div> Github </div></a>
                            </div>
                            <div ><a className="socialIcon" href="https://drive.google.com/file/d/1_Jwm8OBix1olmj43o93aeUzFrE4xm8r2/view?usp=sharing" target="_blank" style={{ color: '#D16BA5' }}> <AiFillFilePdf size={40} /><div> CV </div> </a>
                            </div>
                            <div ><a className="socialIcon" href="mailto:zhiyuancao.zc@gmail.com" target="_blank" style={{ color: '#D44638' }}> <IoIosMail size={40} /><div> Gmail</div> </a>
                            </div>
                        </div>
                        <div>-- or --</div>
                        <div className="socialIcon" style={{ width: '8rem' }} onClick={() => setStack(1)}>
                            <MdContactMail style={{ color: '#7326ad' }} size={40} />
                            <div> Levae A message </div>
                        </div>
                    </div>
                </Draggable>
            }
            {stack === 1 &&
                <Draggable axis="y">

                    <div className='contactWrapper'>
                        <div onClick={props.close} className='contactClose'>
                            <h4> DRAG </h4>
                            <BsChevronDoubleDown className="closeBnt" size={30} />
                            <h4> CLOSE </h4>
                        </div>
                        <div onClick={() => setStack(0)} className="backBnt"><TiBackspaceOutline size={30} /></div>
                        <h2 style={{ fontFamily: 'Copperplate', fontWeight: '900', marginTop: '2rem' }}>CONTACT ME</h2>
                        {/* <h3>Via Social Account</h3> */}

                        <label style={{ fontFamily: 'Copperplate' }}>Name <span style={{ color: 'red' }}>*</span></label>
                        <div>
                            <input type='text' value={name} onChange={e => { setName(e.target.value); }} className='normalInput' />
                        </div>
                        <label style={{ fontFamily: 'Copperplate' }}>Email <span style={{ color: 'red' }}>*</span></label>
                        <div>
                            <input type='email' value={email} onChange={e => { setEmail(e.target.value) }} className='normalInput' />
                        </div>
                        <label style={{ fontFamily: 'Copperplate' }}>Message</label>
                        <div><textarea value={message} onChange={e => { setMessage(e.target.value) }} className='normalInput' style={{ height: '5.5rem', resize: 'none' }} /></div>


                        <div id="sendBtn" className="socialIcon" style={{ width: '8rem', marginBottom: 'none', filter: 'blur(3px)', cursor: 'no-drop' }} onClick={sendMail}>
                            <AiOutlineSend style={{ color: '#5cc760' }} size={40} />
                            <div> Send </div>
                        </div>
                        <div id="incomplete" className="notify">
                            <span style={{ color: '#D44638' }} id="nameNotify">Name </span>
                            <span style={{ color: '#D44638' }} id="emailNotify"> Email</span> incomplete
                        </div>
                        <div id="clear" className="notify" style={{ display: 'none' }}><span style={{ color: '#5cc760', fontWeight: '900' }}>All clear</span></div>
                    </div>
                </Draggable>
            }
            {stack === 2 &&
                <Draggable axis="y">

                    <div className='contactWrapper'>
                        <div onClick={props.close} className='contactClose'>
                            <h4> DRAG </h4>
                            <BsChevronDoubleDown className="closeBnt" size={30} />
                            <h4> CLOSE </h4>
                        </div>
                        <div onClick={() => setStack(0)} className="backBnt"><TiBackspaceOutline size={30} /></div>
                        <h2 style={{ fontFamily: 'Copperplate', fontWeight: '900', marginTop: '2rem' }}>DELIVERED</h2>
                        <div style={{ fontFamily: 'Optima', fontWeight: '200' }}>
                            <div style={{ alignSelf: 'flex-start', marginLeft: '0rem', marginBottom: '1rem' }}>Dear <span style={{ fontWeight: '800' }}>{name}</span>:</div>
                            <div style={{ alignSelf: 'flex-start', marginLeft: '2rem' }}> Thanks so much for reaching out! </div>
                            <div style={{ alignSelf: 'flex-start', marginLeft: '2rem' }}>  I will get back to you shortly! </div>
                            <div style={{ alignSelf: 'flex-start', marginTop: '1.5rem', marginLeft: '15rem' }}>Best,</div>
                            <div style={{ alignSelf: 'flex-start', marginLeft: '15rem' }}>Zhiyuan</div>
                        </div>
                    </div>
                </Draggable>
            }
            </BrowserView>
            <MobileView>
            {stack === 0 &&
                    <div className='contactWrapper'>
                        <div onClick={props.close} className='contactClose'>
                            <h4> Click </h4>
                            <AiFillCloseCircle className="closeBnt" size={30} />
                            <h4> CLOSE </h4>
                        </div>
                        <h2 style={{ fontFamily: 'Copperplate', fontWeight: '900', marginBottom: '1rem' }}>CONTACT ME</h2>
                        <div className  ="socialAccount">
                            <div ><a className="socialIcon" href="https://www.linkedin.com/in/zhiyuan-cao-b91232157/" target="_blank" style={{ color: '#0E76A8' }}> <AiFillLinkedin size={40} /><div> Linkedin </div> </a>
                            </div>
                            <div ><a className="socialIcon" href="https://github.com/q463746583" target="_blank" style={{ color: '#211F1F' }}> <AiFillGithub size={40} /> <div> Github </div></a>
                            </div>
                            <div ><a className="socialIcon" href="https://drive.google.com/file/d/1_Jwm8OBix1olmj43o93aeUzFrE4xm8r2/view?usp=sharing" target="_blank" style={{ color: '#D16BA5' }}> <AiFillFilePdf size={40} /><div> CV </div> </a>
                            </div>
                            <div ><a className="socialIcon" href="mailto:zhiyuancao.zc@gmail.com" target="_blank" style={{ color: '#D44638' }}> <IoIosMail size={40} /><div> Gmail</div> </a>
                            </div>
                        </div>
                        <div>-- or --</div>
                        <div className="socialIcon" style={{ width: '8rem' }} onClick={() => setStack(1)}>
                            <MdContactMail style={{ color: '#7326ad' }} size={40} />
                            <div> Levae A message </div>
                        </div>
                    </div>
            }
            {stack === 1 &&
                    <div className='contactWrapper'>
                        <div onClick={props.close} className='contactClose'>
                            <h4> Click </h4>
                            <AiFillCloseCircle className="closeBnt" size={30} />
                            <h4> CLOSE </h4>
                        </div>
                        <div onClick={() => setStack(0)} className="backBnt"><TiBackspaceOutline size={30} /></div>
                        <h2 style={{ fontFamily: 'Copperplate', fontWeight: '900', marginTop: '2rem' }}>CONTACT ME</h2>
                        {/* <h3>Via Social Account</h3> */}

                        <label style={{ fontFamily: 'Copperplate' }}>Name <span style={{ color: 'red' }}>*</span></label>
                        <div>
                            <input type='text' value={name} onChange={e => { setName(e.target.value); }} className='normalInput' />
                        </div>
                        <label style={{ fontFamily: 'Copperplate' }}>Email <span style={{ color: 'red' }}>*</span></label>
                        <div>
                            <input type='email' value={email} onChange={e => { setEmail(e.target.value) }} className='normalInput' />
                        </div>
                        <label style={{ fontFamily: 'Copperplate' }}>Message</label>
                        <div><textarea value={message} onChange={e => { setMessage(e.target.value) }} className='normalInput' style={{ height: '5.5rem', resize: 'none' }} /></div>


                        <div id="sendBtn" className="socialIcon" style={{ width: '8rem', marginBottom: 'none', filter: 'blur(3px)', cursor: 'no-drop' }} onClick={() => setStack(2)}>
                            <AiOutlineSend style={{ color: '#5cc760' }} size={40} />
                            <div> Send </div>
                        </div>
                        <div id="incomplete" className="notify">
                            <span style={{ color: '#D44638' }} id="nameNotify">Name </span>
                            <span style={{ color: '#D44638' }} id="emailNotify"> Email</span> incomplete
                        </div>
                        <div id="clear" className="notify" style={{ display: 'none' }}><span style={{ color: '#5cc760', fontWeight: '900' }}>All clear</span></div>
                    </div>
            }
            {stack === 2 &&

                    <div className='contactWrapper'>
                        <div onClick={props.close} className='contactClose'>
                            <h4> Click </h4>
                            <AiFillCloseCircle className="closeBnt" size={30} />
                            <h4> CLOSE </h4>
                        </div>
                        <div onClick={() => setStack(0)} className="backBnt"><TiBackspaceOutline size={30} /></div>
                        <h2 style={{ fontFamily: 'Copperplate', fontWeight: '900', marginTop: '2rem' }}>DELIVERED</h2>
                        <div style={{ fontFamily: 'Optima', fontWeight: '200' }}>
                            <div style={{ alignSelf: 'flex-start', marginLeft: '0rem', marginBottom: '1rem' }}>Dear <span style={{ fontWeight: '800' }}>{name}</span>:</div>
                            <div style={{ alignSelf: 'flex-start', marginLeft: '2rem' }}> Thanks so much for reaching out! </div>
                            <div style={{ alignSelf: 'flex-start', marginLeft: '2rem' }}>  I will get back to you shortly! </div>
                            <div style={{ alignSelf: 'flex-start', marginTop: '1.5rem', marginLeft: '15rem' }}>Best,</div>
                            <div style={{ alignSelf: 'flex-start', marginLeft: '15rem' }}>Zhiyuan</div>
                        </div>
                    </div>
            }
            </MobileView>
        </div >
    )
}

const MeumItem = (props) => {

    return (
        <NavLink style={{ textDecoration: 'inherit', color: 'inherit' }} exact to={props.to} activeClassName="active">{props.title}</NavLink>
    )
}

function SideBar() {
    const nameSlide = useSpring({ config: { duration: 1000 }, to: { top: 10, left: 10, opacity: 1 }, from: { top: 0, left: 0, opacity: 0 } })
    const opChange = useSpring({ config: { duration: 2000 }, from: { opacity: 0 }, opacity: 1 })
    const [meumprops, setMeumprops] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 20, tension: 300, friction: 100 } }))
    const [meumprops1, setMeumprops1] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 20, tension: 300, friction: 100 } }))
    const [meumprops2, setMeumprops2] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 20, tension: 300, friction: 100 } }))
    const [meumprops3, setMeumprops3] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 20, tension: 300, friction: 100 } }))
    const [fold, setFold] = useState(true)
    const [contactShow, setContactShow] = useState(false)
    const closeContact = () => {
        setContactShow(!contactShow);
    }

    
    return (
        <div>
            <div className="sideBarContainer">
                <animated.div style={nameSlide} className="nameLogo">
                    <Link className="nameLink" exact to="/" ><h1><span className='nameInit'>Z</span>hiyuan<br /><span className='nameInit'>C</span>ao</h1> </Link>
                </animated.div>
                {fold ?
                    <div>
                        <AiOutlineVerticalAlignTop className="dropDownMenu" onClick={() => { setFold(!fold) }} size={35} />
                        <nav className="navbar">

                            <animated.div
                                className="navFont"
                                onMouseMove={({ clientX: x, clientY: y }) => setMeumprops({ xys: calc(x, y) })}
                                onMouseLeave={() => setMeumprops({ xys: [0, 0, 1] })}
                                style={opChange, { marginTop: '10rem', transform: meumprops.xys.interpolate(trans) }}
                            ><MeumItem to="/" title="Home" /></animated.div>
                            <animated.div
                                className="navFont"
                                onMouseMove={({ clientX: x, clientY: y }) => setMeumprops1({ xys: calc(x, y) })}
                                onMouseLeave={() => setMeumprops1({ xys: [0, 0, 1] })}
                                style={{
                                    transform: meumprops1.xys.interpolate(trans)
                                }}
                            ><MeumItem to="/about" title="About" /></animated.div>
                            <animated.div
                                className="navFont"
                                onMouseMove={({ clientX: x, clientY: y }) => setMeumprops2({ xys: calc(x, y) })}
                                onMouseLeave={() => setMeumprops2({ xys: [0, 0, 1] })}
                                style={{
                                    transform: meumprops2.xys.interpolate(trans)
                                }}
                            ><MeumItem to="/projects" title="Projects" /></animated.div>
                            <animated.div
                                className="navFont"
                                onMouseMove={({ clientX: x, clientY: y }) => setMeumprops3({ xys: calc(x, y) })}
                                onMouseLeave={() => setMeumprops3({ xys: [0, 0, 1] })}
                                style={{ transform: meumprops3.xys.interpolate(trans), cursor: 'pointer' }}
                                onClick={closeContact}
                            >
                                Contact
                            </animated.div >

                        </nav> </div>
                    :

                    <AiOutlineBars className="dropDownMenu" onClick={() => { setFold(!fold) }} size={35} />

                }

            </div >
            {contactShow && <ContactBox close={closeContact} />}
        </div>
    )
}

export default SideBar;