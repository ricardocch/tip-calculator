import style from './Title.module.css';

function Title({text}) {
  return (
    <div className={style.Title}>
        {text.substring(0,Math.floor(text.length/2))}<br/>{text.substring(Math.floor(text.length/2),text.length)}
    </div>
  );
}

export default Title;