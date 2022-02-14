import {Link} from 'react-router-dom'

function Tour(props,prop) {
    return (
            <>
            <h3  className = 'name'>Name : {props.tour.name}</h3>
            <Link key = {prop.key} to={`city/${props.tour.id}`}><img  className = 'img' src={props.tour.image} alt={props.tour.name} /></Link> 
            {/* <img  className = 'img' src={props.tour.image} alt={props.tour.name} /> */}
             <hr></hr>
            </>
    );
}

export default Tour;