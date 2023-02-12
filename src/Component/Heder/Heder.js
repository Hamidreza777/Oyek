import React from 'react';
import ReactDOM from 'react-dom';
import Hedercss from "../Heder/Heder.module.css"
import logo from "../../pic/logo1.png"

const Heder=()=>{
return(
<>
<header>
  <nav>
  
  <ul>
  <li><img className={Hedercss.logo} src={logo}></img></li>

    <li><a>خانه</a> </li>
    <li><a>خدمات ما </a></li>
    <li><a>مقاله ها</a></li>
    <li><a>تماس  با ما</a></li>

   
  </ul>


  </nav>



   
    
</header>

</>

)

}
export default Heder;