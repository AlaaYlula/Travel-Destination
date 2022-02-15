import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../TourDetails/TourDetails.css';

import { Text } from "react-native";

function TourDetails(props) {
    const { id } = useParams();
    const NUM_OF_LINES = 3;

    const same = props.data.filter((travel) => {
        return (travel.id === id)
    });


    const [loadMore, setLoadMore] = useState(true);

    const handleLoad = () => {
        setLoadMore(!loadMore);
    }



    return (
        <>
        <div className='text'>

                <Link className="link" to='/'>  Home </Link>
                <br></br>
                <h3>{same[0].name}</h3>
                {loadMore ? <Text numberOfLines={NUM_OF_LINES} >{same[0].info}</Text> : <Text className="info">{same[0].info}</Text>}
                <button onClick={handleLoad}>  {loadMore ? "see More" : "see Less"}   </button>

       </div>

            {/* {same.map((travelid, idx) => {
                if (loadMore) {

                    return (
                        <div key={idx} className='text'>

                            <Link className="link" to='/'>  Home </Link>
                            <br></br>
                            <div className="info">
                               <h2>name : {travelid.name}</h2>
                                <Text numberOfLines={NUM_OF_LINES}  >{travelid.info}</Text>
                                <button onClick={handleLoad}>see More</button>
                                <h3>price : {travelid.price}</h3>
                                <img  className = 'img' src={travelid.image}alt={travelid.name} /> 
                            </div>

                        </div>
                    );
                } else {
                    return (
                        <div key={idx} className='text'>

                            <Link className="link" to='/'>  Home </Link>
                            <br></br>
                            <div className="info">
                                <h2>name : {travelid.name}</h2>
                                <Text className="info">{travelid.info}</Text>
                                <button onClick={handleLoad}>see less</button>
                                <h3>price : {travelid.price}</h3>
                                <img  className = 'img' src={travelid.image}alt={travelid.name} /> 

                            </div>

                        </div>
                    );
                }

            })}; */}

        </>
    );
}

export default TourDetails;