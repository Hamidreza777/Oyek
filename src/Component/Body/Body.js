import React from 'react';
import ReactDOM from 'react-dom';
import bodycss from "../Body/Body.module.css"
import man from "../../pic/Final photo.png"

const Body=()=>{
return(
   <div>
   <div className={bodycss.contaner}>
      <div className={bodycss.image1}>
           <img src={man} alt=""></img>
      </div>
       <div className={bodycss.h}>
         <h1>به اُیک خوش آمدید</h1>
       
      
         <p>
         برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.

برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.

         </p>
         </div>
         </div>
   
   

   </div>
   
)



}
export default Body;