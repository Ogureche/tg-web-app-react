import React from "react"; 
import { Link } from "react-router-dom"; 
import "../styles/PageCyber.css";
const PageCyber = () => {
    // Ваша логика компонента здесь
    return (      
    <div className="main">
      <div className="c1">
       <p>Киберспорт </p> 
      </div>    
      <div className="c2">
        <div className="d2-1">
        <p><span>Osu:</span></p>
        <p><span> Регистрация: </span> <span>31.01-7.02</span></p>
        <p><span>Дата начала турнира:</span> 26.02</p>
        <p><span>Главный судья:</span> Андрей <span>"Ankodo" Копырин</span></p>

        </div>
        <div className="d2-2">
        <p><span>HS:BG Solo:</span></p>
        <p><span> Регистрация:</span> <span> 01.02-07.02</span></p>
        <p><span>Дата начала турнира:</span> 08.02</p>
        <p><span>Главный судья:</span> Санджи <span>"S4NJ1" Локшаев</span></p>
        </div>
        </div>      
    </div>
    );
  };
  
  export default PageCyber; 