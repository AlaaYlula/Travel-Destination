import '../tours/Tours.css'

import Tour from './tour/Tour'
import React from "react";


function Tours(props) {

    
   

  
   return (
        <>
            {props.data.map((travel,idx) => {
                return (
                //   <Link to={`city/${travel.id}`} key = {idx}> <Tour tour={travel} /></Link> 
                <Tour  tour={travel} key = {idx} />
                );
            })}
        </>
    );
}

export default Tours;