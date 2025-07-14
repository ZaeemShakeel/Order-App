import React from "react";

function Practice() {
  let count = 0;

  function incCount() {
    count += 1;
    console.log(count);
  }
  return (
    <>
      <h1>Count = {count} </h1>
      <button onClick={incCount}>Click to Increase</button>
    </>
  );
}

export default Practice;
