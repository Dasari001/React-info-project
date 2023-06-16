import React from "react";

const Info = ({title,description}) =>{
    return(
      <div id="info">
        <h2>{title}</h2>
        <p>{description}</p>
        <hr />
    </div>
    )
}

export default Info;


// loops => hof (map, filter, reduce)
// if else => ternary operator