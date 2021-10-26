import style from './DisplayContainer.module.css';
import NumberDisplay from './NumberDisplay/NumberDisplay'
function DisplayContainer() {
  return (
    <div className={style.DisplayContainer}>
        <NumberDisplay text="Tip Amount"/>
        <NumberDisplay text="Total"/>
        <div className={style.ButtonContainer}>
          <button>Reset</button>
        </div>
    </div>
  );
}

export default DisplayContainer;