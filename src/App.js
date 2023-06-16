import React from "react";
import Navbar from "./Components/Navbar.js";
import "./style.css";
import About from "./Components/About.js";
import Info from "./Components/Info.js";
import Footer from "./Components/Footer.js";

let info_data = [
  { title:"skills",  
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Tempora ad officia dignissimos debitis m voluptas aut sit dolor voluptatum qui. Amet maxime, quidem exercitationem voluptat dolor itaque obcaecati vel ea est velit ul dicta nostrum, voluptatibus odit autem omni libero laborum ad. Dolorum, fugiat soluta Quasi aspernatur optio delectus maiordolor itaque obcaecati vel ea est velit uldicta nostrum, voluptatibus odit autem omnis libero laborum ad. Dolorum, fugiat soluta.  Quasi aspernatur optio delectus maiores?dolor itaque obcaecati vel ea est velit ullam dicta nostrum, voluptatibus odit autem omnis  libero laborum ad. Dolorum, fugiat soluta.  Quasi aspernatur optio delectus maiores?" },
  { title:"Qualification", 
   description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Tempora ad officia dignissimos debitis m voluptas aut sit dolor voluptatum qui. Amet maxime, quidem exercitationem voluptat dolor itaque obcaecati vel ea est velit ul dicta nostrum, voluptatibus odit autem omni libero laborum ad. Dolorum, fugiat soluta Quasi aspernatur optio delectus maiordolor itaque obcaecati vel ea est velit uldicta nostrum, voluptatibus odit autem omnis libero laborum ad. Dolorum, fugiat soluta.  Quasi aspernatur optio delectus maiores?dolor itaque obcaecati vel ea est velit ullam dicta nostrum, voluptatibus odit autem omnis  libero laborum ad. Dolorum, fugiat soluta.  Quasi aspernatur optio delectus maiores?" },
  { title:"Experiences",  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Tempora ad officia dignissimos debitis m voluptas aut sit dolor voluptatum qui. Amet maxime, quidem exercitationem voluptat dolor itaque obcaecati vel ea est velit ul dicta nostrum, voluptatibus odit autem omni libero laborum ad. Dolorum, fugiat soluta Quasi aspernatur optio delectus maiordolor itaque obcaecati vel ea est velit uldicta nostrum, voluptatibus odit autem omnis libero laborum ad. Dolorum, fugiat soluta.  Quasi aspernatur optio delectus maiores?dolor itaque obcaecati vel ea est velit ullam dicta nostrum, voluptatibus odit autem omnis  libero laborum ad. Dolorum, fugiat soluta.  Quasi aspernatur optio delectus maiores?" },
  { title:"Projects",  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Tempora ad officia dignissimos debitis m voluptas aut sit dolor voluptatum qui. Amet maxime, quidem exercitationem voluptat dolor itaque obcaecati vel ea est velit ul dicta nostrum, voluptatibus odit autem omni libero laborum ad. Dolorum, fugiat soluta Quasi aspernatur optio delectus maiordolor itaque obcaecati vel ea est velit uldicta nostrum, voluptatibus odit autem omnis libero laborum ad. Dolorum, fugiat soluta.  Quasi aspernatur optio delectus maiores?dolor itaque obcaecati vel ea est velit ullam dicta nostrum, voluptatibus odit autem omnis  libero laborum ad. Dolorum, fugiat soluta.  Quasi aspernatur optio delectus maiores?" },
]

const App = () =>{

    return (
        <div>
          <Navbar/>
          <About/>
           
           {
            info_data.map((value)=>{

            return  <Info 
                  title = {value.title}
                  description = {value.description}
              />
            })
           }

           <Footer/>
        </div>
    )
}

export default App;