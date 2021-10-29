import style from './NumberDisplay.module.css';


function NumberDisplay({text,total}) {
  return (
    <div className={style.NumberDisplay}>
        <div className={style.TextContainer}>
          <span className={style.textSepation}>{text}</span>
          <span>/ person</span>
        </div>
        <div className={style.NumberContainer}>
          <span>${total}</span>
        </div>
    </div>
  );
}

export default NumberDisplay;