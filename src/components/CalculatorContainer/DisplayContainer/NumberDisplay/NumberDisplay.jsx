import style from './NumberDisplay.module.css';

function NumberDisplay({text}) {
  return (
    <div className={style.NumberDisplay}>
        <div className={style.TextContainer}>
          <span className={style.textSepation}>{text}</span>
          <span>/ person</span>
        </div>
        <div className={style.NumberContainer}>
          <span>$0.00</span>
        </div>
    </div>
  );
}

export default NumberDisplay;