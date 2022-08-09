import '../Softvan/Softvan.css';
import video1 from '../../Assests/firstdayintern.MOV'
import video2 from '../../Assests/internnyc.MOV'
import video3 from '../../Assests/tt2.mov'


import simullogo from '../../Assests/simulmedialogo.jpg'
import merch from '../../Assests/merch.jpg'
import simuldesk from '../../Assests/simuldesk.jpg'

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
                        Technologies: Python, AWS, CloudWatch Logs, 
                    </h3>

                    <ul>
                        <li>Provided functionality for accessing and querying AWS Cloudwatch Logs for the Ad server and integrated them inside the ECS manager.</li>
                        <li>Improved support for finding most recent log groups.</li>
                        <li>Added access to display Real time Logs for the provided log groups and log streams.</li>
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
            <video className="videoclass" width="300" height="540" src={video2} controls></video>
            <video className="videoclass" width="300" height="540" src={video1} controls></video>
            <video className="videoclass" width="300" height="540" src={video3} controls></video>
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