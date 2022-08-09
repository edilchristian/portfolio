import './Intro.css';
import Typewriter from 'typewriter-effect';
import arrow from '../../Assests/down-arrow.png';
import Nav from '../Nav/Nav';
import { Component } from 'react';

import bim2 from "../../Assests/pinkblack.jpeg";

/*
const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }

    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }

    return "desktop";
};
*/
const browserType = () => {

    var ua = navigator.userAgent.toLowerCase(); 
    
    if (ua.indexOf('safari') !== -1) { 
        if (ua.indexOf('chrome') > -1) 
        {
            return "chrome" // Chrome
        } 
        
        else 
        {
            return "safari" // Safari
        }
    }
}

var ua = window.navigator.userAgent;
var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
var webkit = !!ua.match(/WebKit/i);
var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);


function returnMargin(){

    if (iOSSafari && browserType() !== "chrome") {
        return "4.5rem";
    }

    else{
        return "7.5rem";
    }
}

class Intro extends Component{

    state = {
        marginb: returnMargin()
    }

    render() {
        return (

        
            
            <section className="showcase" style={{marginBottom: this.state.marginb}}>
                <Nav/>
            
                <img src={bim2} alt="back imge"/> 
               
                <div class="overlay"></div>

                <div class="text">
                    <h2><a href="https://syde.social/" target="_blank" rel="noreferrer">Masters in Computer Science @ Rutgers University, New Brunswick (2021-2023)</a></h2>
                    <h1>Edil Christian</h1>
                    <h3>
                        <div className="typing">
                            <Typewriter
                                options={{
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 10

                                }}

                                onInit={(tw) => {

                                    tw.typeString('<a class="job" target="_blank" href="https://newbrunswick.rutgers.edu/">Currently a Masters in Computer Science student @ Rutgers University, New Brunswick</a>')
                                    tw.pauseFor(50)
                                    tw.deleteChars(83)
                                    tw.pauseFor(100)

                                    tw.typeString('<a class="job" target="_blank" href="https://www.simulmedia.com/">Software Engineering Intern Summer 2022 @ Simulmedia</a>')
                                    tw.pauseFor(100)
                                    tw.deleteChars(52)
                                    tw.pauseFor(100)

                                    tw.typeString('<a class="job" target="_blank" href="https://www.accenture.com/in-en">Software Development Associate @ Accenture 2020-2021</a>')
                                    tw.pauseFor(100)
                                    tw.deleteChars(56)
                                    tw.pauseFor(100)

                                    tw.typeString('Currently Seeking Summer 2023 Full-time Job Opportunities')
                                    tw.pauseFor(100)
                                    tw.deleteChars(45)
                                    tw.pauseFor(100)

                                    .start();

                                }}

                            />
                            </div>
                        </h3>
                </div>

                <div className="more-info" id="mi">
                    <img src={arrow} alt="arrow" />
                </div> 
            </section>
        )
    }
}

export default Intro;