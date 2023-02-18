import React from "react";
import bodycss from "../Body/Body.module.css";
import man from "../../pic/Final photo.png";
import web from "../../pic/Web design.png";
import moh from "../../pic/mohtava.png";
import ux from "../../pic/ux ui.png";
import seo from "../../pic/seo.png";

import abutus from "../../pic/about us.png";
const Body = () => {
  return (
    <>
      <div className={bodycss.bb}>
   


        <div className={bodycss.matn}>
         <h1>به اُ یک خوش آمدید</h1>
          <br></br>
          <p className={bodycss.tagehp}>
            برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم
            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
            طراحان گرافیک است. برای تغییر این متن بر روی دکمه ویرایش کلیک کنید.
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p> 
        </div>
        <div className={bodycss.pic}>
<img src={man}></img>


        </div>
      </div>

      <div className={bodycss.baner}>
        <div className={bodycss.text}>
          <h2>که هستیم؟</h2>
          <p>
            برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم
            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
            طراحان گرافیک است.
            <br></br>
            <br></br>
            برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم
            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
            طراحان گرافیک است.
          </p>
        </div>

        <div className={bodycss.aks}>
          <img src={abutus}></img>
        </div>
      </div>
    </>
  );
};

export default Body;
