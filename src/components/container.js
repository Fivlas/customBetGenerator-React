import { useState } from "react";
import Card from "./Card";
import style from './container.module.css';


const Container = () => {
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [kurs1, setKurs1] = useState('');
    const [kurs2, setKurs2] = useState('');
    const [remis, setRemis] = useState('');

    const TitleHandler = (e) => {
        setTitle(e.target.value);
    };

    const TimeHandler = (e) => {
        setTime(e.target.value);
    };

    const Player1Handler = (e) => {
        setPlayer1(e.target.value);
    };
    
    const Player2Handler = (e) => {
        setPlayer2(e.target.value);
    };
    
    const Kurs1Handler = (e) => {
        setKurs1(e.target.value);
    };
    
    const RemisHandler = (e) => {
        setRemis(e.target.value);
    };
    
    const Kurs2Handler = (e) => {
        setKurs2(e.target.value);
    };

    const Reset = () => {
        setTitle('');
        setTime('');
        setPlayer1('');
        setPlayer2('');
        setKurs1('');
        setKurs2('');
        setRemis('');
    };

    return (
        <div>
            <div className={style.container}>
                <div className={style.content}>
                    <input className={style.input} onChange={TitleHandler} value={title} placeholder="Tytuł"></input>
                    <input className={style.input} onChange={TimeHandler} value={time} placeholder="Czas"></input> {/*time*/}
                    <input className={style.input} onChange={Player1Handler} value={player1} placeholder="1 Gracz"></input> {/*1 osoba*/}
                    <input className={style.input} onChange={Player2Handler} value={player2} placeholder="2 Gracz"></input> {/*2 osoba*/}
                    <input className={style.input} onChange={Kurs1Handler} value={kurs1} placeholder="Kurs 1"></input> {/*kurs 1*/}
                    <input className={style.input} onChange={RemisHandler} value={remis} placeholder="Kurs Remis"></input> {/*Remis*/}
                    <input className={style.input} onChange={Kurs2Handler} value={kurs2} placeholder="Kurs 2"></input> {/*kurs 2*/}
                    <button onClick={Reset}>Reset</button>
                </div>
            </div>
            <Card title={title} time={time} player1={player1} player2={player2} kurs1={kurs1} kurs2={kurs2} remis={remis}/>
        </div>
    )
};

export default Container;