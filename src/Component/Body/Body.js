import React from "react";
import ReactDOM from "react-dom";
import Bodycss from "../Body/Body.module.css";
import abutus from "../../pic/about us.png";

const Body = () => {
  return (
    <>
      <div className={Bodycss.baner}>
    
        <div className={Bodycss.text}>
<h2>
که هستیم؟
</h2>
<p>
  

برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
<br></br><br></br>
برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.

</p>



        </div>
        
        <div className={Bodycss.aks}>
          <img src={abutus}></img>
        </div>
      </div>
    </>
  );
};
export default Body;
