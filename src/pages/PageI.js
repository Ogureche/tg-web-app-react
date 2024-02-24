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
            <p>Преподаватели </p>
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
            <button>Траектория обучения</button> 
          </Link>
          <Link to="/страница-cyber">
        <button>Киберспорт</button>
          </Link> 
        </> 
      )} 
    </div> 
  ); 
}; 
 
export default PageI;
