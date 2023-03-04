import React from 'react';
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import { incNum , decNum , divNum, multiNum } from './Redux/actions/Actions';


const App = () => {
 
  const myState = useSelector((state) => state.ChangeNumber )
  const mySecState = useSelector((state) => state.ChangeNewNumber)

  const dispatch = useDispatch();

  return (
     <>
       <div className='main-div'>
         <h1>INCREMENT/DECREMENT COUNTER USING REDUX</h1>
    
    <div className='inner-div'>
    <button onClick={() => dispatch(decNum()) }>-</button>
    <input className='input-box' type="text" value={myState}></input>
    <button onClick={()=> dispatch(incNum())}>+</button> <br/><br/><br/>

    <center><h1>DIVIDE / MULTIPLY USING REDUX</h1></center>
    <button className="newBtn" onClick={()=> dispatch(divNum())}>/</button>
    <input className='input-box' type="text" value={mySecState}></input>
    <button className='newBtn' onClick={()=> dispatch(multiNum())}>*</button> <br/>



    </div>

       </div>
     </>
  )
}

export default App;



