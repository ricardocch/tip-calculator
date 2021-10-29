import style from './CalculatorContainer.module.css';
import OperationsContainer from './OperationsContainer/OperationsContainer'
import DisplayContainer from './DisplayContainer/DisplayContainer'
function CalculatorContainer() {
  return (
    <div className={style.CalculatorContainer}>
        <OperationsContainer/>
        <DisplayContainer/>
    </div>
  );
}

export default CalculatorContainer;