import './Project.css';

const Experience = (props) => {

    return (
        <a href={props.path} className="project">
            
            <a className="image">
                <img src={props.image} />
            </a>

            <div className="info">
                <h3 className="e-title">{props.title}</h3>

                <h2 className="role">{props.role}</h2>

                <div className="tags">
                    <h5 style={{backgroundColor: props.color}}>{props.s1}</h5>
                    <h5 style={{backgroundColor: props.color}}>{props.s2}</h5>
                    <h5 style={{backgroundColor: props.color}}>{props.s3}</h5>
                    <h5 style={{backgroundColor: props.color}}>{props.s4}</h5>

                </div>

                <p className="description">
                    {props.desc}
                </p>

                <a href={props.webapppath} className="e-link">
                    Web App link &#8594;
                </a>
                <a href={props.githubpath} className="e-link">
                    Github code link &#8594;
                </a>

            </div>
        </a>
    );
}

export default Experience;