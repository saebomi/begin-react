import React, { useState } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
      name: '',
      nickname: ''
    });
  
    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출  
    //const [text, setText] = useState('');

    const onChange = (e) => {
        const {value, name } = e.target; // 우선 e.target 에서 name과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name] : value // name 키를 가진 값을 value 로 설정
        });
        //setText(e.target.value);
        // e.target.value 조회 시 현재 input에 입력한 값을 알 수 있음
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname:'',
        })
        //setText('');
    };

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                {/*<b>값: {text}</b>*/}
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;