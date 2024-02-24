// Page.js
import React from "react";
import "./Page.css"; 

const Page = () => {
  return (
    <div className="main">
      <div className="c1">
       <p>Траектория обучения </p> 
      </div>
      <div className="c2">
        <div className="c2-1">
          <p>09.03.02 Информационные системы и технологии</p>
        </div>
        <div className="c2-2">
          <p>
            <span class="first-line">09.03.02</span>
            <br />
            Фуллстек разработка
          </p>
        </div>
        <div className="c2A">
          <div className="c2-3">
            <p>09.03.02 Компьютерный дизайн</p>
          </div>
          <div className="c2-4">
            <p>11.03.04 Электроника и наноэлектроника</p>
          </div>

        </div>

      </div>


    
    
    </div>
  );
};

export default Page;
