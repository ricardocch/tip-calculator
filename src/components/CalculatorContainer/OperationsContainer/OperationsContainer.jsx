import style from './OperationsContainer.module.css';
import Bill from './Bill/Bill'
import Tip from './Tip/Tip'
import TotalPeople from './TotalPeople/TotalPeople'
function OperationsContainer() {
  return (
    <div className={style.OperationsContainer}>
        <Bill/>
        <Tip/>
        <TotalPeople/>
    </div>
  );
}

export default OperationsContainer;