import './Home.css';
import Intro from '../../Components/Intro/Intro'

import Experience from '../../Components/Experience/Experience';
import Softvanimg from '../../Assests/softvanlogo.jpeg';
import Accentureimg from '../../Assests/accenturelogo.jpeg';
import rutgerslogo from '../../Assests/rutgerslogo.png';
import btsgaon from '../../Assests/btsgaonimg.png';
import simulmedia from '../../Assests/simulmedialogo.png';

import Project from '../../Components/Project/Project';
import wildfire from '../../Assests/wildfireimg.png';
import personreid from '../../Assests/personreidimg.png';
import vietnumber from '../../Assests/vietnumberimg.png';

const SoftvanTitle = "SoftVan";
const SoftvanYear = "2019"
const SoftvanRole = "Machine Learning Intern";
const SoftvanS1 = "Python";
const SoftvanS2 = "Computer Vision";
const SoftvanS3 = "Machine Learning";
const SoftvanDesc = "Worked on using OpenCV to implement 2 Computer Vision tasks: Facial Recognition and Object Detection";
const SoftvanColor = "#09193D";
const SoftvanImage = Softvanimg;
const SoftvanPath = "/softvan"

const simulTitle = "Simulmedia";
const simulYear ="2022";
const simulRole = "Software Engineering Intern (DevOps Team) ";
const simulS1 = "Python";
const simulS2 = "AWS";
const simulS3 = "Cloudwatch Logs";
const simulDesc = "Provided functionality for accessing and querying AWS Cloudwatch Logs for the Ad Server and integrated them inside the ECS manager.";
const simulColor = "#4330C7";
const simulImage = simulmedia;
const simulPath = "/simulmedia"

const AccentureTitle = "Accenture";
const AccentureYear = "2020-2021"
const AccentureRole = "Software Development Associate";
const AccentureS1 = "Java";
const AccentureS2 = "REST APIs";
const AccentureS3 = "Spring Boot";
const AccentureS4 = "Spring MVC";
const AccentureDesc = "Carried out application development in Java";
const AccentureColor = "#A61AB2";
const AccentureImage = Accentureimg;
const AccenturePath = "/accenture";

const RutgersTitle = "Rutgers University, New Brunswick";
const RutgersYear = "2021-2022"
const RutgersRole = "Computer Science Grader";
const RutgersS1 = "C++";
const RutgersS2 = "C";
const RutgersS3 = "LaTex";
const RutgersDesc = "Graded homeworks, labs and quizzes in C and C++ on a weekly basis in a class of 127 students. ";
const RutgersColor = "#DA1010";
const RutgersImage = rutgerslogo;
const RutgersPath = "/rutgers";

const yvtype = "Mini project on the side";
const yvtitle = "Vietnumber - translating English numbers into Vietnamese words";
const yvs1 = "TypeScript";
const yvs2 = "HTML";
const yvs3 = "Vercel";
const yvs4 = "React"
const yvdesc = "An interactive webapp made using TypeScript and React to convert English numbers into a string of Vietnamese words.";
const yvcolor = "#E72EDC";
const yvpath = "https://vietnumber.vercel.app";
const yvpath2 = "https://github.com/edilchristian/vietnumber";

const dtype = "Interactive WebApp made using React";
const dtitle = "Wildfire tracker map";
const ds1 = "React";
const ds2 = "JavaScript";
const ds3 = "NASA EONET API";
const ds4 = "Google Maps API"
const ddesc = "Created a React App which displays the wildfire incidents across America and other countries too. I fetched the wildfire data from NASA EONET API and used Iconify library to visualize the fires using emoticons.";
const dcolor = "#287D0D";
const dpath = "https://wildfire-map-react.vercel.app/";
const dpath2 = "https://github.com/edilchristian/wildfire-map"

const ctype = "Final year project in Undergrad";
const ctitle = "Person Re-Identification using Video Surveillance";
const cs1 = "Python";
const cs2 = "Flask";
const cs3 = "Spring Boot";
const cs4 = "Java";
const cdesc = "Using ResNet and Object Detection, performed Person Re-Identification task and designed a web application using Spring Boot for day-to-day real-time video analysis every 1 hour";
const ccolor = "#1976CD";
const cpath = "https://www.youtube.com/watch?v=iTO70oF4r9Q";
const cpath2 = "https://github.com/edilchristian/person-reidentification";

const atype = "Using self created dataset, created a web app for visualization";
const atitle = "BTS on Gaon Music Chart";
const as1 = "Streamlit";
const as2 = "Python";
const as3 = "Kaggle";
const as4 = "Plotly"
const adesc = "Data Visualization for songs from BTS' studio album 'Map Of The Soul: 7' and analyzing the ranks, streams from the Gaon Digital Weekly Chart";
const acolor = "#000000";
const apath = "https://share.streamlit.io/edilchristian/bts-on-gaon-music-chart/main.py";
const apath2 = "https://github.com/edilchristian/bts-on-gaon-music-chart"

const Home = () => {

    return (
        <>
            <Intro/> 

            <div className="title" id="experience">
                <h1>Places I've Worked</h1>
            </div>  

            <div className="exp first">
                <Experience title={simulTitle} year={simulYear} role={simulRole} s1={simulS1} s2={simulS2} s3={simulS3} desc={simulDesc} color={simulColor} image={simulImage} path={simulPath} />
                <Experience title={AccentureTitle} year={AccentureYear} role={AccentureRole} s1={AccentureS1} s2={AccentureS2} s3={AccentureS3} s4={AccentureS4} desc={AccentureDesc} color={AccentureColor} image={AccentureImage} path={AccenturePath} />
                <Experience title={SoftvanTitle} year={SoftvanYear} role={SoftvanRole} s1={SoftvanS1} s2={SoftvanS2} s3={SoftvanS3} desc={SoftvanDesc} color={SoftvanColor} image={SoftvanImage} path={SoftvanPath} />
                <Experience title={RutgersTitle} year={RutgersYear} role={RutgersRole} s1={RutgersS1} s2={RutgersS2} s3={RutgersS3} desc={RutgersDesc} color={RutgersColor} image={RutgersImage} path={RutgersPath} />
            </div>

            <div className="title">
                <h1>Some Things I've Built</h1>
            </div>

            <div className="projs">
                    <Project title={dtype} role={dtitle} s1={ds1} s2={ds2} s3={ds3} s4={ds4} desc={ddesc} color={dcolor} image={wildfire} webapppath={dpath} githubpath={dpath2} />
                    <Project title={atype} role={atitle} s1={as1} s2={as2} s3={as3} s4={as4} desc={adesc} color={acolor} image={btsgaon} webapppath={apath} githubpath={apath2}/>
                    <Project title={ctype} role={ctitle} s1={cs1} s2={cs2} s3={cs3} s4 = {cs4} desc={cdesc} color={ccolor} image={personreid} webapppath={cpath} githubpath={cpath2}/>
                    <Project title={yvtype} role={yvtitle} s1={yvs1} s2={yvs2} s3={yvs3} s4={yvs4} desc={yvdesc} color={yvcolor} image={vietnumber} webapppath={yvpath} githubpath={yvpath2} />
                    <a className="linkclass" href="https://github.com/edilchristian" target="_blank">
                    More Projects &#8594;
                </a>
            </div> 

            {/* <div className="more-projs">
                <a href="https://github.com/edilchristian" target="_blank">
                    More Projects &#8594;
                </a>
            </div>  */}
        </>
    );
}

export default Home;