import React, { useState } from "react";
import { users } from "./userMock";
import Filter from "./components/filter";

import "./App.css";

function App() {
  const usersMock = users;

  const [value, setValue] = useState("");
  const [isTrue, setIsTrue] = useState(true);

  const valueHandler = e => {
    setValue(e.target.value);
  };

  const radioHandler = e => {
    setIsTrue(!e.target.checked);
    // console.log(e.target.checked);
  };

  return (
    <div className="App">
      <input type="text" onChange={e => valueHandler(e)} />
      <p>Checked?</p>
      <input type="checkbox" onClick={e => radioHandler(e)} />
      <Filter users={usersMock} inputValue={value} checkbox={isTrue} />
    </div>
  );
}

export default App;
