import React from "react"; 
import { Link } from "react-router-dom"; 
import "../styles/PageI.css"; 

 
const PageI = ({ showButtons }) => { 
  return ( 
    <div className="main"> 
      <div className="a1"> 
        <img src="./image/iptip.svg" className="a2"/> 
      </div> 
      <section className="b">
        <div className="b1">
          <div className="b1-1">
            <p className="text-button">Преподаватели </p>
          </div>
          <div className="b1-2">
          <Link to="/вторая-страница"> 
            <button>Траектория обучения</button> 
          </Link>
          </div>        
        </div>
        <div className="b2">
          <div className="b2-1">
            <p>Хакатоны </p>
          </div>
          <div className="b2-2">
            <Link to="/страница-cyber">
        <button>Киберспорт</button>
          </Link> 
        </div> 

        <div className="b3">
          <div className="b3-1">
          <a href="https://vlabs.mirea.ru/mash/" target="_blank" rel="noopener noreferrer">
        <button>Лаборатории</button>
        </a>
          
          </div>
        </div>

          </div>
      </section>
      {/* Содержимое первой страницы */} 
       
      {/* Условный рендеринг кнопок */} 
      {showButtons && ( 
        <> 
          <Link to="/страница-1"> 
            <button>Открыть Страницу 1</button> 
          </Link> 
        </> 
      )} 
    </div> 
  ); 
}; 
 
export default PageI;
