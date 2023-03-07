import React from "react";
import bodycss from "../Body/Body.module.css";
import man from "../../pic/Final photo.png";
import web from "../../pic/Web design.png";
import uxui from "../../pic/ux ui.png";
import seo from "../../pic/seo.png";
import mohtava from "../../pic/mohtava.png";
import abutus from "../../pic/about us.png";
import pic from "../../pic/11.png";
import pic1 from "../../pic/33.png";

const Body = () => {
  return (
    <>
      <div className={bodycss.bb}>
        <div className={bodycss.matn}>
          <h1>به اُ یک خوش آمدید</h1>
          <br></br>
          <p className={bodycss.tagehp}>
          

با ما رتبه یک گوگل شوید!!
گروه برنامه نویسی اُ یک با ارائه متناسب قیمت و کیفیت در بسیاری از خدمات در خدمت مشتریان است.
ما با استفاده از بروز ترین متد ها به بررسی سایت شما میپردازیم و در عرض چند ماه با استاندارد های سئو سایت شما رو به رتبه اول گوگل تبدیل میکنیم .

نگران نباشید اگر کسب و کار خود را اینترنتی نکرده اید ! 
گروه طراحی سایت اُ یک با استفاده از استاندارد های به روز طراحی و برنامه نویسی ۰ تا ۱۰۰ سایت شمارو با بالاترین سرعت طراحی می‌کنند.
          </p>
        </div>

        <div className={bodycss.pic}>
          <img src={man}></img>
        </div>

        <div className={bodycss.khadamat}>
          <div className={bodycss.seo}>
            <img src={seo}></img>
            <h5>سئو</h5>
          </div>

          <div className={bodycss.mohtava}>
            <img src={mohtava}></img>
            <h5>تولید محتوا</h5>
          </div>

          <div className={bodycss.uiux}>
            <img src={uxui}></img>
            <h5>UX/UI</h5>
          </div>

          <div className={bodycss.desing}>
            <img src={web}></img>
            <h5>طراحی سایت</h5>
          </div>
        </div>
      </div>

      <h6>درباره ما</h6>
      <div className={bodycss.baner}>
        <div className={bodycss.text}>
          <h2>که هستیم؟</h2>
          <p>
          امروزه بیش تر کسب و کار ها اینترنتی شده است اگر شما همچنان تردید دارید به راه اندازی کسب و کار اینترنتی گروه پشتیبانی اُ یک درخدمت شما است تا بهترین راهنمایی را به شما انجام دهد .
گروه اُ یک ۰ تا ۱۰۰ سایت شمارو (پشتیبانی ، طراحی سایت ، سئو سایت ،  ui ux سایت و ...) انجام می‌دهد و همچنین با داشتن نمونه کار های متعدد باعث رضایت بسیاری از مراجعه کنندگان بوده است.
          </p>
        </div>

        <div className={bodycss.aks}>
          <img src={abutus}></img>
        </div>
      </div>
      <div className={bodycss.titr}>
        <h6>مراحل طراحی سایت</h6>
      </div>

      <div className={bodycss.marahel}>
        <div className={bodycss.div11}>
          <img src={pic}></img>
          <h4>دریافت خلاصه و بریف پروژه</h4>
          <strong>این یک سند کوتاه یک یا دو صفحه ای است که اهداف سایت : چالش ها ، پیام رسانی ، راه حل و سایر جزئیات یک پروژه را مشخص می‌کند
همچنین به راهنمایی تیم خلاق اُ یک درمورد چه گونگی دستیابی به اهداف پروژه کمک می‌کند.</strong>
        </div>
        <div className={bodycss.div22}>
          <img src={pic1}></img>
          <h4>ارائه نسخه اولیه</h4>
          <strong>در این مرحله ما نسخه اولیه از مطالب خواسته شده را در اختیار شما قرار می‌دهیم تا  از روند انجام پروژه مطلع باشید.</strong>
        </div>
        <div className={bodycss.div33}>
          <img src={pic}></img>
          <h4>ارائه نسخه اولیه</h4>
          <strong>بعد از تکمیل پروژه یک فایل تست در اختیار شما قرار می‌گیرد تا به بررسی پروژه بپردازید و در صورت مشکل به ما اطلاع بدهید تا تیم اُ یک به بررسی مشکل ایجاد شده بپردازد.</strong>
        </div>
      </div>
    </>
  );
};

export default Body;
