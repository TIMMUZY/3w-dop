import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { trigger ,guess,restart} from '../../store/actions/actions';
// import {randomSlice} from '../../../src/store/reducers/randomSlice';

const App = () => {
    const {count,txt,randomNumber,tries} = useSelector((state) => state);
    const dispatch = useDispatch();
    const [inputValue,setInputValue] = useState(0)
    

    // const butt = dispatch(randomNumber(Math.random()*100));

   
    const onIncrement = () => dispatch(trigger(Math.floor(Math.random()*50)));
    const onDecrement = () => dispatch(trigger(Math.floor(-Math.random()*50)));
    const onGuess = () => dispatch(guess(+inputValue));
    const onRestart = () => {dispatch(restart()) ;
        setInputValue('')}

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrement}>INC</button>
            <button onClick={onDecrement}>DEC</button>
          <div>
            <input type="text" value={inputValue} onChange={(event)=>setInputValue(event.target.value)} />
            <h1>{txt}</h1>
            <h1>осталось попыток {tries}</h1>
            <button onClick={onGuess}>Отгадать</button>
            </div>  
            <button onClick={onRestart}> Заново </button>
        </div>
    );
}

export default App;
