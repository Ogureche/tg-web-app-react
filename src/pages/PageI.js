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
        </div>
        </section>
      <div className="b3">
          <div className="b3-1">
          <iframe src="https://vlabs.mirea.ru/mash/" width="100%" height="100%" margin-left="0px" padding-left="0" rel="noopener noreferrer">
        </iframe>
          
          </div>
          </div>

          </div>           
      
    
  ); 
}; 
 
export default PageI;
