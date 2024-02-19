import React from "react";
import { Link } from "react-router-dom";
import "./PageI.css";

const PageI = ({ showButtons }) => {
  return (
    <div>
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
