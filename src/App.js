import React, {useRef, useState} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email:''
  });
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  };

  const [users, setUsers] = useState([
    {
      id:1,
      username:'saebom',
      email:'saebomi000324@gmail.com'
    },
    {
      id:2,
      username:'tester',
      email:'tester@example.com'
    },
    {
      id:3,
      username:'liz',
      email:'liz@example.com'
    }
  ]);

  const nextId = useRef(4); 
  // useRef()를 사용할 때 파라미터를 넣어주면, 이 값이 .current 값의 기본값!
  const onCreate = () => {
    const user={
      id: nextId.current,
      username,
      email
  };
  setUsers(users.concat(user));

  setInputs({
      username: '',
      email: ''
    });
    nextId.current +=1;
  };

  const onRemove = id =>{
    // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };
  const onToggle = id =>{
    setUsers(
      users.map(user =>
        user.id === id ? {...user, active: !user.active } :user)
    );
  };

  return (
    <>
    <CreateUser 
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}
  /*return(
    <UserList />
    /*<Wrapper>
    <Hello name="react" color="red" isSpecial={true}/>
    // isSpecial 이름만 넣어주면 isSpecial={true} 와 동일한 의미
    <Hello color="pink"/>
    </Wrapper>
    <Counter />
    <InputSample />
  );
}*/
export default App;

