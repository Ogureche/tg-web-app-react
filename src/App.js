import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";


function App() {

    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className="App">
            <Header />
            <img src="/image/iptip.png" alt="Моя фотография" />
            
            <button onClick = {onToggleButton}>toggle</button>
      </div>
    );
}

export default App;
