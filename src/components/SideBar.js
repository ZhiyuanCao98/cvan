import React, { useState } from 'react';
import { BrowserRouter, Route, NavLink, Link } from "react-router-dom";
import {useSpring, animated} from 'react-spring'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 10, (x - window.innerWidth / 2) / 10, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const trans1 = (o) => `opacity(o)`
const MeumItem = (props) => {
    return (
        <NavLink style={{ textDecoration: 'inherit', color: 'inherit' }} exact to={props.to} activeClassName="active">{props.title}</NavLink>
    )
}

    function SideBar() {
        const nameSlide = useSpring({config: {duration: 1000 }, to: {top: 10, left: 10, opacity: 1}, from: {top: 0, left:0, opacity: 0}})
        const opChange = useSpring({config: {duration: 2000}, from : {opacity:0}, opacity: 1})
        const [meumprops, setMeumprops] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 20, tension: 300, friction: 100 } }))
        const [meumprops1, setMeumprops1] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 20, tension: 300, friction: 100 } }))
        const [meumprops2, setMeumprops2] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 20, tension: 300, friction: 100 } }))
        const [meumprops3, setMeumprops3] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 20, tension: 300, friction: 100 } }))
    return (
        <div className="sideBarContainer">
            <animated.div style={nameSlide} className="nameLogo">
                <Link className="nameLink" exact to="/" ><h1>Zhiyuan<br />Cao</h1> </Link>
            </animated.div>
            
            <nav className="navbar">
                <animated.div 
                      onMouseMove={({ clientX: x, clientY: y }) => setMeumprops({ xys: calc(x, y) })}
                      onMouseLeave={() => setMeumprops({ xys: [0, 0, 1] })}
                      style={opChange, {marginTop: '10rem', transform: meumprops.xys.interpolate(trans)}}
                        // {
                        //   marginTop: '10rem', 
                    //   transform: meumprops.xys.interpolate(trans)
                    // }}
                        // marginTop: "10rem" , 
                        // transform: meumprops.xys.interpolate(trans)
                    
                      ><MeumItem to="/" title="Home" /></animated.div>
                <animated.div 
                      onMouseMove={({ clientX: x, clientY: y }) => setMeumprops1({ xys: calc(x, y) })}
                      onMouseLeave={() => setMeumprops1({ xys: [0, 0, 1] })}
                      style={{ 
                      transform: meumprops1.xys.interpolate(trans) }}
                      ><MeumItem to="/about" title="About" /></animated.div>
                <animated.div 
                      onMouseMove={({ clientX: x, clientY: y }) => setMeumprops2({ xys: calc(x, y) })}
                      onMouseLeave={() => setMeumprops2({ xys: [0, 0, 1] })}
                      style={{ 
                      transform: meumprops2.xys.interpolate(trans) }}
                      ><MeumItem to="/projects" title="Projects" /></animated.div>
                <animated.div 
                      onMouseMove={({ clientX: x, clientY: y }) => setMeumprops3({ xys: calc(x, y) })}
                      onMouseLeave={() => setMeumprops3({ xys: [0, 0, 1] })}
                      style={{ transform: meumprops3.xys.interpolate(trans) }}
                      ><MeumItem to="/contact" title="Contact" /></animated.div>

            </nav>
        </div>
    )
}

export default SideBar;