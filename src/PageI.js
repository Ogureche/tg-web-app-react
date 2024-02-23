import React from "react"; 
import { Link } from "react-router-dom"; 
import "./PageI.css"; 
 
const PageI = ({ showButtons }) => { 
  return ( 
    <div> 
      <div className="a0">
        <p className="a0-1">StudBot | ИПТИП</p>     
      </div>
      <div className="a1"> 
        <img src="./image/iptip.svg" className="a2"/> 
      </div> 
      <section className="b">
        <div className="b1">
          <div className="b1-1">
            <p>Преподаватели </p>
          </div>
          <div className="b1-2">
            <p>Программа обучения</p>
          </div>        
        </div>
        <div className="b2">
          <div className="b2-1">
            <p>Хакатоны </p>
          </div>
          <div className="b2-2">
            <p>Киберспорт</p>
        </div> 

          </div>
      </section>
      <h1>Страница 1</h1> 
      {/* Содержимое первой страницы */} 
       
      {/* Условный рендеринг кнопок */} 
      {showButtons && ( 
        <> 
          <Link to="/страница-1"> 
            <button>Открыть Страницу 1</button> 
          </Link> 
          <Link to="/вторая-страница"> 
            <button>Открыть Вторую Страницу</button> 
          </Link> 
        </> 
      )} 
    </div> 
  ); 
}; 
 
export default PageI;
