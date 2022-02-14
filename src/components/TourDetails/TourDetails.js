import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../TourDetails/TourDetails.css';

import { Text } from "react-native";

function TourDetails(props) {
    const { id } = useParams();
    const NUM_OF_LINES = 3;

    const isSame = props.data.filter((travel) => {
        return (travel.id === id)
    });


    const [loadMore, setLoadMore] = useState(true);

    const handleLoad = () => {
        setLoadMore(!loadMore);
    }



    return (
        <>
            {isSame.map((travelid, idx) => {
                if (loadMore) {

                    return (
                        <div key={idx} className='text'>

                            <Link className="link" to='/'>  Home </Link>
                            <br></br>
                            <p className="info">
                                <Text numberOfLines={NUM_OF_LINES}  >{travelid.info}</Text>
                            </p>
                            <button onClick={handleLoad}>see More</button>

                        </div>
                    );
                } else {
                    return (
                        <div key={idx} className='text'>

                            <Link className="link" to='/'>  Home </Link>
                            <br></br>
                            <p className="info">
                                <Text className="info">{travelid.info}</Text>
                            </p>
                            <button onClick={handleLoad}>see less</button>

                        </div>
                    );
                }

            })};

        </>
    );
}

export default TourDetails;