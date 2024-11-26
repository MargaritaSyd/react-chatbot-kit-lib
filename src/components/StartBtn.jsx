import './styles.css'

const StartBtn = (props) => {
  console.log(props)
  const initialAction = () => {
    console.log(props.actions, 'oko');
    // props.actions.initialAction();
  }
  // onClick={() => initialAction()}
  return (
  <div>
    <button className="start-btn" onClick={() => initialAction()}>Let's get Started</button>
  </div>
)};

export default StartBtn;
