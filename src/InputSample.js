import React, { useState } from 'react';

function InputSample(){
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
        // e.target.value 조회 시 현재 input에 입력한 값을 알 수 있음
    }

    const onRest = () => {
        setText('');
    };

    return(
        <div>
            <input />
            <button>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    );
}

export default InputSample;