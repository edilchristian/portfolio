import './Experience.css';

const Experience = (props) => {

    return (
        <a href={props.path} className="experience">
            <div className="info">
                
                <h3 className="e-title">{props.title}</h3>
                <h2>{props.year}</h2>

                <h2 className="role">{props.role}</h2>

                <div className="tags">
                    <h5 style={{backgroundColor: props.color}}>{props.s1}</h5>
                    <h5 style={{backgroundColor: props.color}}>{props.s2}</h5>
                    <h5 style={{backgroundColor: props.color}}>{props.s3}</h5>
                </div>

             
                <p className="description">
                    {props.desc}
                </p>

                <a href={props.path} className="e-link">
                    Check it out &#8594;
                </a>
            </div>


            <a className="image">
                <img src={props.image} />
            </a>
        </a>
    );
}

export default Experience;