import React, { useState } from 'react';
/* 리액트 패키지에서 useState 라는 함수를 불러옴 */

function Counter(){
    const [number, setNumber] = useState(0);
    /* usestate 를 사용할 때는 상태의 기본값을 파라미터로 넣어서 호출 */

    /* 이벤트 설정  */
    const onIncrease = () => {
        setNumber(number+1);
    }
    const onDecrease = () => {
        setNumber(number-1);
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}
export default Counter;