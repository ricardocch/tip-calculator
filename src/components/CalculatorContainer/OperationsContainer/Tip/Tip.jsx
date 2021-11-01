import { connect } from 'react-redux';
import style from './Tip.module.css';
import {setPercentage,calculateTip} from '../../../../actions/index'
import { useState } from 'react';
function Tip({setPercentage,calculate,calculateTip,Percentage}) {
  let arrNumber = [5,10,15,25,50]
  let [buttonActive,setButtonActive] = useState(false)
  function onClick(e) {
    calculate ? calculateTip(Number(e.target.textContent.replace("%",""))) : setPercentage( Number(e.target.textContent.replace("%","")))
    setButtonActive(true)
  }

  function onChange(e) {
    
    setPercentage(e.target.value === '' ? 0 : Number(e.target.value) )
    setButtonActive(false)
  }

  function onBlur(e) {
    
    if(calculate)  calculateTip( e.target.value === '' ? 0 : Number(e.target.value) )  
  }

  return (
    <div className={style.Tip}>
        <span>Select Tip %</span>
        <div className={style.TipContainer}>
          {arrNumber.map((el,i) => <button key={i + 1} className={Percentage === el ? style.active : ''} onClick={(e) => onClick(e)}>{el}%</button>)}          
          <input type="number" placeholder="Custom"  onChange={(e) => onChange(e)} onBlur={(e)=> onBlur(e)} value={Percentage > 0 && !buttonActive ? Percentage : ''}/>
        </div>
    </div>
  );
}

function mapStateToProps (state){
  return {
    Percentage:state.Percentage
  }
}

export default connect(mapStateToProps,{setPercentage,calculateTip})(Tip);