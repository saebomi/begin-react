import React, {useRef, useState} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
//import InputSample from './InputSample';
//import Counter from './Counter';
//import Hello from './Hello';
//import Wrapper from './Wrapper';
//import './App.css'

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
  setUsers([...users, user]);

  setInputs({
    username: '',
    email: ''
  });
  nextId.current +=1;
  };
  
  return (
    <>
    <CreateUser 
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    />
    <UserList users={users} />
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

