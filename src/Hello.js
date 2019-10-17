import React from 'react'; // 컴포넌트를 불러와서 사용하겠다

//컴포넌트 만드는 방법 1) 함수형태 2)클래스형태
function Hello({ color, name }) {
    return <div style={{ color }}>안녕하세요 {name}</div>
    // props > 객체 형태로 전달됨
    // name 값 조회 > props.name 을 조회
  }
  
  Hello.defaultProps = {
    name: '이름없음'
  }
export default Hello;
