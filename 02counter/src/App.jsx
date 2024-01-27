import { useState } from "react";

function App() {
  let [counter, setcounter] = useState(15);
  //  let counter = 15;
  const addValue = () => {
    //console.log("updated", counter);
    //counter = counter + 1;
    setcounter(counter + 1);
  };
  const removevalue = () => {
    setcounter(counter - 1);
  };

  return (
    <>
      <h1>counter project</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>add value{counter}</button>
      <br />
      <button onClick={removevalue}>decrease value{counter}</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
