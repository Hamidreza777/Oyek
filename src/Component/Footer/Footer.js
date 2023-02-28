import React from 'react';
import ReactDOM from 'react-dom';
import Fotercss from '../Footer/Footer.module.css'
import logo from '../../pic/logo.png'
import { BsInstagram } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { AiOutlineGithub } from "react-icons/ai";
import { ImTelegram } from "react-icons/im";



const Footer=()=>{
return(
    <>
 <footer>
 <div className={Fotercss.logo}>
<img src={logo}></img>

</div>
<div className={Fotercss.text}>
<h3>درباره ما</h3>
<p>برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.

برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.


</p>

</div>

<div className={Fotercss.shabakeh}>

<BsInstagram className={Fotercss.insta} />

<CiMail className={Fotercss.gmail} />

<AiOutlineGithub className={Fotercss.git} />

<ImTelegram/>
</div>




 </footer>
    </>
)}
export default Footer;