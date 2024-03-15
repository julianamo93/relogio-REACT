import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
    const [time, setTime] = useState(new Date()); // para armazenar a hora atual

    useEffect(() => { // para atualizar a hora a cada segundo
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [])

    const options = {

        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long"
    }

    const dateString = time.toLocaleDateString("pt-BR", options) // usado para formatar a hora de acordo com as configurações regionais do usuário

    return (
        <div className="App">
            <h1>{time.toLocaleTimeString()}</h1>
            <p className="options">{dateString}</p>
        </div>
    );
}

export default Clock;