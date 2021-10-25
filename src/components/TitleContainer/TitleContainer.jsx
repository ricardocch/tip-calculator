import style from './TitleContainer.module.css';
import Title from './Title/Title';
function TitleContainer() {
  return (
    <div className={style.TitleContainer}>
        <Title text={"SPLITTER"}/>
    </div>
  );
}

export default TitleContainer;