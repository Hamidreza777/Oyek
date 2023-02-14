import React from 'react';
import ReactDOM from 'react-dom';
import Hedercss from "../Heder/Heder.module.css"
import font from "../../font/Yekan.ttf"
import logo from "../../pic/logo.png"


const Heder=()=>{
return(
<>
<header>
<nav>

<img className={Hedercss.logo} src={logo}></img>
<ul>
<li><a>خانه</a></li>
<li><a>خدمات ما</a></li>
<li><a>مقاله ها</a></li>
<li><a>تماس با ما</a></li>


</ul>
<b className={Hedercss.call}>تماس:09920136476 </b>
</nav>


</header>
</>

)




}
export default Heder;