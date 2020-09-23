import React, { useState } from "react";
import { users } from "./userMock";
import Filter from "./components/filter";

import "./App.css";

function App() {
  const usersMock = users;

  const [value, setValue] = useState("");

  const valueHandler = e => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="type the name"
        onChange={e => valueHandler(e)}
      />
      <Filter users={usersMock} inputValue={value} />
    </div>
  );
}

export default App;
