import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import ReactPageScroller from 'react-page-scroller';


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`

function HomeScrollPage() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    const slideInWelcome = useSpring({ config: { duration: 1000 }, from: { left: '-60%' }, left: '0%' })
    const slideInPor = useSpring({ config: { duration: 1000 }, from: { right: '-30%' }, right: '0%' })


    const [page, setPage] = useState(0)
    const handlePageChange = number => {
        setPage(number);
    };

    const { radians } = useSpring({
        // to: async next => {
        //     while (1) await next({ radians: 2 * Math.PI })
        // },
        // to:
        from: { radians: 0 },
        config: { duration: 3500 },
        reset: true,
    })
    return(
        <div className='scrollBackground'>
            <div className="homeBackground">
                <animated.div className="normalPageContainer" style={{ transform: props.xy.interpolate(trans1) }}
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                    <animated.div style={slideInWelcome} className="welcome">
                        <h3 className="welcomeWord">WELCOM  <span style={{ paddingLeft: '5vw' }} /> TO</h3>
                        <h1 className="name"> Zhiyuan <br />Cao </h1>
                        <div style={{fontFamily:'Optima', fontWeight:'200'}}> Software Developer <br/> Full-Stack Developer</div>
                    </animated.div>

                    <animated.div style={slideInPor} className="portfolio">
                        <h1 className="name1"> PORTFOLIO </h1>
                    </animated.div>
                    {/* <div class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                    <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
                    <animated.div class="card2" style={{ transform: props.xy.interpolate(trans2) }} />
                    <animated.div class="card3" style={{ transform: props.xy.interpolate(trans3) }} />
                    <animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} />
                </div> */}
                </animated.div>
                {/* <animated.div style={{ transform: radians.interpolate(interp)}} > */}
                <animated.div>
                {/* <h3 className='scroll'> ----- Scroll <AiFillDownCircle /> Down ----- </h3> */}
                </animated.div>
            </div>
            </div>
    )
}

export default HomeScrollPage;