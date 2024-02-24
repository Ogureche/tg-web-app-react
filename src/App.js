import React, { useEffect, useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes, useLocation, Navigate } from "react-router-dom";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import PageI from "./pages/PageI"; // Импортируйте новую страницу
import Page from "./pages/Page"; // Импортируйте новую страницу
import PageCyber from "./pages/PageCyber";

function App() {
  const { onToggleButton, tg } = useTelegram();
  const location = useLocation();
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    tg.ready();
  }, []);

  const handleButtonClick = () => {
    onToggleButton();
    setShowButtons(false);
  };

  return (
    <div className="App">
      <Header />

      {/* Используйте Switch и Route для отображения различных страниц */}
      <Routes>
        {/* Redirect, чтобы автоматически перенаправить пользователя на страницу-1 */}
        <Route path="/" element={<Navigate to="/страница-1" />} />
        <Route path="/страница-1" element={<PageI showButtons={showButtons} />} />
        <Route path="/вторая-страница" element={<Page />} />
        <Route path="/страница-cyber" element={<PageCyber />} />
      </Routes>

      {/* Кнопки будут отображаться только на странице-1, если showButtons === true */}
      {location.pathname === "/страница-1" && showButtons && (
        <>
          <Link to="/страница-1">
            <button onClick={handleButtonClick}>Открыть Страницу 1</button>
          </Link>
          <Link to="/вторая-страница">
            <button>Траектория обучения</button>
          </Link>
          <Link to="/страница-cyber">
            <button>Киберспорт</button> {/* Добавлена кнопка для третьей страницы */}
          </Link>
        </>
      )}
    </div>
  );
}

export default App;
