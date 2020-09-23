import React,{useState} from 'react';
import { users } from './userMock';
import Filter from './components/filter';

import './App.css';

function App() {

  const [value , setValue] = useState('');

  const usersMock = users;

  const filterHandler = (e) => {
    setValue(e);
    console.log('Value -> ' , value)
  }
  
  return (
    <div className="App">
        <Filter users={usersMock} filter={filterHandler}/>
        {usersMock.map((user) => (
          <p className="users">{user.name}</p>
        ))}

        
    </div>
  );
}

export default App;
