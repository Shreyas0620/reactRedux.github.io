import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incCount,decCount } from './actions/index';
function App() {
  const dispatch = useDispatch();
  const valState = useSelector((state)=>state.updateCount)
  return (
    <>
  
    <button onClick={()=>dispatch(incCount())}>increament</button>
    <h1>{valState}</h1>
    <button onClick={()=>dispatch(decCount())}>decreament</button>
   
    </>
  );
}

export default App;
