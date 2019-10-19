import React, { useState } from 'react';

function Counter(){
    /* 이벤트 설정 */
    const onIncrease = () => {
        console.log('+1')
    }
    const onDecrease = () => {
        console.log('-1');
    }
    return(
        <div>
            <h1>0</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}
export default Counter;