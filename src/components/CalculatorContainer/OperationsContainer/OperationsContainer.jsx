import style from './OperationsContainer.module.css';
import Bill from './Bill/Bill'
import Tip from './Tip/Tip'
import TotalPeople from './TotalPeople/TotalPeople'
import { connect } from 'react-redux';

function OperationsContainer({People,Percentage}) {
  return (
    <div className={style.OperationsContainer}>
        <Bill/>
        <Tip calculate={!!People}/>
        <TotalPeople/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    People:state.People
  }
}

export default connect(mapStateToProps,{})(OperationsContainer);