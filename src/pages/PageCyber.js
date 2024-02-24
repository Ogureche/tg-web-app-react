import React from "react"; 
import { Link } from "react-router-dom"; 
import "../styles/PageCyber.css";
const PageCyber = () => {
    // Ваша логика компонента здесь
    return (      
    <div className="main">
        <div className="d1">
            <p className="main-text">Киберспорт </p> 
        </div>    
        <div className="d2">
            <div className="d2-1">
                <p className="namegame"><span>Osu:</span></p>
                <p><span> Регистрация: </span> <span>31.01-7.02</span></p>
                <p><span>Дата начала турнира:</span> 26.02</p>
                <p><span>Главный судья:</span> Андрей <span>"Ankodo" Копырин</span></p>
            </div>
            <div className="d2-2">
                <p className="namegame"><span>HS:BG Solo:</span></p>
                <p><span> Регистрация:</span> <span> 01.02-07.02</span></p>
                <p><span>Дата начала турнира:</span> 08.02</p>
                <p><span>Главный судья:</span> Санджи <span>"S4NJ1" Локшаев</span></p>
            </div>
        </div>
        <div className="d2-A">
            <div className="d2-1">
                <p className="namegame"><span>League of Legends:</span></p>
                <p><span> Регистрация:</span> <span> 05.02-04.04</span></p>
                <p><span>Дата начала турнира:</span> 05.04</p>
                <p><span>Главный судья:</span> Максим <span>"qqOsir1s" Окороков</span></p>
            </div>        
            <div className="d2-2">
                <p className="namegame"><span>CS2:</span></p>
                <p><span> Регистрация:</span> <span> 08.02-14.02</span></p>
                <p><span>Дата начала турнира:</span> 15.02</p>
                <p><span>Главный судья:</span> Филипп <span>"Voken" Бронин</span></p>
            </div>

        </div>
        <div className="d2-A">
        <div className="d2-1">
            <p className="namegame"><span>Dota 2:</span></p>
            <p><span> Регистрация:</span> <span> 22.02-28.02</span></p>
            <p><span>Дата начала турнира:</span> 29.02</p>
            <p><span>Главный судья:</span> Фелиция <span>"REeHa" Гербольдт</span></p>
        </div>
       
        <div className="d2-2">
            <p className="namegame"><span>Valorant:</span></p>
            <p><span> Регистрация:</span> <span> 29.02-06.03</span></p>
            <p><span>Дата начала турнира:</span> 07.03</p>
            <p><span>Главный судья:</span> Ксения <span>"-sangr1a-" Жданова</span></p>
        </div>
        </div>
        <div className="d2-A">
        <div className="d2-1">
            <p className="namegame"><span>Фиджитал CS2:</span></p>
            <p><span> Регистрация:</span> <span> 07.03-13.03</span></p>
            <p><span>Дата начала турнира:</span> 14.03</p>
            <p><span>Главный судья:</span> Филипп <span>"Voken" Бронин</span></p>
        </div>

       
        <div className="d2-2">
            <p className="namegame"><span>Fortnite:</span></p>
            <p><span> Регистрация:</span> <span> 07.03-13.03</span></p>
            <p><span>Проведение:</span> 14.03-06.04</p>
            <p><span>Главный судья:</span> Алексей <span>"qqLex" Волков</span></p>
        </div>

        </div>            
    </div>
    );
  };
  
  export default PageCyber; 