import { connect } from 'react-redux';
import style from './DisplayContainer.module.css';
import NumberDisplay from './NumberDisplay/NumberDisplay'
import {reset} from '../../../actions/index'
function DisplayContainer({Tip,Total,reset}) {
  return (
    <div className={style.DisplayContainer}>
        <NumberDisplay text="Tip Amount" total={ Tip === 0 ? '0.00' : Tip}/>
        <NumberDisplay text="Total" total={Total === 0 ? '0.00' : Total}/>
        <div className={style.ButtonContainer}>
          <button onClick={reset}>Reset</button>
        </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    Tip: state.Tip,
    Total: state.Total
  }
}
export default connect(mapStateToProps,{reset})(DisplayContainer);