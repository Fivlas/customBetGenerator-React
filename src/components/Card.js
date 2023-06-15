import style from './Card.module.css';
import polska from '../assets/polska.svg';

const Card = (props) => {
    return (
        <div className={style.card}>
            <div className={style.cardContainer}>
                <div className={style.title}>
                <img src={polska} alt="polska" className={style.img}/>{props.title}
                </div>
                <div className={style.content}>
                    <div className={style.player}>{props.player1}</div>
                    <div className={style.timeContainer}>
                        <div className={style.time}>{props.time}</div>
                    </div>
                    <div className={style.player}>{props.player2}</div>
                </div>
                <div className={style.buttonsContainer}>
                    <div className={style.button}>
                        <span className={style.buttonText}>{props.player1}</span>
                        <span className={style.buttonKurs}>{props.kurs1}</span>
                    </div>
                    <div className={style.button}>
                        <span className={style.buttonText}>Remis</span>
                        <span className={style.buttonKurs}>{props.remis}</span>
                    </div>
                    <div className={style.button}>
                        <span className={style.buttonText}>{props.player2}</span>
                        <span className={style.buttonKurs}>{props.kurs2}</span> 
                    </div>
                </div>          
            </div>
        </div>
    )
}

export default Card;