import React, { useState } from "react";

function Filter({ users, inputValue, checkbox }) {
  //   const [check, setChecked] = useState(Boolean);
  //   const switchIsChecked = (userCheck, user) => {
  //     setChecked((user.isChecked = !userCheck));
  //   };

  const names = users
    .filter(user => {
      // remove names that do not match current filter
      return (
        user.name.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0 &&
        user.isChecked === checkbox
      );
    })
    .map(user => (
      <p
        className="users"
        // onClick={() => switchIsChecked(user.isChecked, user)}
      >
        {user.name}
      </p>
    ));

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h2>Filter component</h2>
      {names}
    </div>
  );
}

export default Filter;
