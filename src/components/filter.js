import React from "react";

function Filter({ users, inputValue }) {
  const names = users
    .filter(user => {
        // remove names that do not match current filter
      return user.name.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0;
    })
    .map(user => <p className="users">{user.name}</p>);

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h2>Filter component</h2>
      {names}
    </div>
  );
}

export default Filter;
