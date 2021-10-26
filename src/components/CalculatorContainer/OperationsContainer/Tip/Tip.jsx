import style from './Tip.module.css';

function Tip() {
  return (
    <div className={style.Tip}>
        <span>Select Tip %</span>
        <div className={style.TipContainer}>
          <button>5%</button>
          <button>10%</button>
          <button>15%</button>
          <button>25%</button>
          <button>50%</button>
          <input type="text" placeholder="Custom"/>
        </div>
    </div>
  );
}

export default Tip;