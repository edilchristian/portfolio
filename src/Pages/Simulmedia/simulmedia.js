import '../Softvan/Softvan.css';
import video0 from '../../Assests/intern-project.mp4'
import video1 from '../../Assests/firstdayintern.MOV'
import video2 from '../../Assests/internnyc.MOV'
import video3 from '../../Assests/tt2.mov'


import simullogo from '../../Assests/simulmedialogo.jpg'
import merch from '../../Assests/merch.jpg'
import simuldesk from '../../Assests/simuldesk.jpg'

import edsimul1 from '../../Assests/edsimul1.JPG'
import edsimul2 from '../../Assests/edsimul2.JPG'
import edsimul3 from '../../Assests/edsimul3.JPG'

document.body.style.backgroundColor = 'rgb(255,255,255)';

const Simulmedia = () => {

    return (

        <>
            <div className="company-info">

                <div className="company-title">
                    <h1>Software Engineering Intern (DevOps team), SIMULMEDIA</h1>
                </div>


                <div className="job-desc-simul">
                    <h3>
                    Git · Authentication and Authorization · Identity & Access Management (IAM) · DevOps Pipeline · Jenkins · Pagination · Command Line Interface · Version Control · Object-Oriented Programming (OOP) · Amazon Web Services (AWS) · Cloud Computing · Microservices · Amazon CloudWatch · Domain-Driven Design (DDD) · Python (Programming Language) · Design Patterns 
                    </h3>

                    <ul>
                        <li>Provided functionality for accessing and querying AWS Cloudwatch Logs from 4 different clusters for Ad Server.</li>
                        <li>Integrated Python scripts for accessing more than 50 real-time logs per minute inside the ECS Manager using Jenkins.</li>
                        <li>Improved support for finding most recent log groups.</li>
                        <li>Added access to display Real time Logs for the provided log groups and log streams</li>
                        <li>Followed the Design Patterns of the company</li>
                        <li>Adhered to the coding principles of Object Oriented Programming and Domain Driven Design</li>
                        <li>Worked to integrate my code inside the company repository</li>
                        <li>Integrated the following additional functionalities for displaying the resultant log events.</li>
                        <li>hide or show Log Stream name prefix.</li>
                        <li>include Timestamp in DateTime format of the log event (also added Time Zone behaviour).</li>
                        <li>on providing a StartTime and EndTime, all the log events in that time range are displayed.</li>
                        <li>last L lines, gives just the l number of log events for the cases when there are a huge no of logs.</li>
                        <li>follow/ no follow restricts showing the real time logs depending on the input.</li>
                        
                    </ul>
                </div>
            </div>

            <div className='videos'>
            <video className="videoclass" width="980" height="540" src={video0} controls></video>
            </div>

            <div className='videos'>
            <video className="videoclass" width="300" height="540" src={video2} controls></video>
            <video className="videoclass" width="300" height="540" src={video1} controls></video>
            <video className="videoclass" width="300" height="540" src={video3} controls></video>
            </div>

            <div className='videos'>
            <img className="videoclass" width="300" height="380" src={edsimul1} controls></img>
            <img className="videoclass" width="300" height="380" src={edsimul2} controls></img>
            <img className="videoclass" width="300" height="380" src={edsimul3} controls></img>
            </div>

            <div className='videos'>
            <img className="videoclass" width="300" height="540" src={simullogo} controls></img>
            <img className="videoclass" width="300" height="540" src={merch} controls></img>
            <img className="videoclass" width="300" height="540" src={simuldesk} controls></img>
            </div>
           

        </>
    )

}

export default Simulmedia;