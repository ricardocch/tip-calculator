import { connect } from 'react-redux';
import style from './Tip.module.css';
import {setPercentage} from '../../../../actions/index'
function Tip({setPercentage,Percentage}) {
  let arrNumber = [5,10,15,25,50]

  function onClick(e) {
    setPercentage( Number(e.target.textContent.replace("%","")))
  }

  function onChange(e) {
    setPercentage(e.target.value === '' ? 0 : Number(e.target.value) )
  }

  return (
    <div className={style.Tip}>
        <span>Select Tip %</span>
        <div className={style.TipContainer}>
          {arrNumber.map((el,i) => <button key={i + 1} className={Percentage === el ? style.active : ''} onClick={(e) => onClick(e)}>{el}%</button>)}          
          <input type="text" placeholder="Custom"  onChange={(e) => onChange(e)}/>
        </div>
    </div>
  );
}

function mapStateToProps (state){
  return {
    Percentage:state.Percentage
  }
}

export default connect(mapStateToProps,{setPercentage})(Tip);