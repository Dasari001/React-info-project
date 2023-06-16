import React from "react";

const Navbar = () => ( 
 // in arrow function if there is no code except return. we can remove return  and replace it with paranthesis()
        <div id="navbar">
           <h2>Dasari Sai Babu</h2>
           {/* <p>About Skills Qualification Experiences Projects</p> */}
           <div id="menu">
             <a href="#">About</a>
             <a href="#">Skills</a>
             <a href="#">Qualification</a>
             <a href="#">Experiences</a>
             <a href="#">Projects</a>
           </div>
        </div>
    
)

export default Navbar;