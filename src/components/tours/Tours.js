import '../tours/Tours.css'

function Tours(props){
    return(
        <>
        {props.data.map(travel => {
                return (
                    <div>
                        <h3  className = 'name'>Name : {travel.name}</h3>
                        <img  className = 'img' src={travel.image} alt={travel.name} />
                        <hr></hr>
                    </div>
                );
            })}
        </>
    );
}

export default Tours;