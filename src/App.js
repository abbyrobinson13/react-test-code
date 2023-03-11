import { useState, useEffect } from "react";
import "./App.css";

function App() {
  return <WordByWord />;
}

function WordByWord() {
  const [word, setWord] = useState("");

  function handleChange(event) {
    setWord(event.target.value);
  }

  const words = word.split(" ");
  console.log(words);

  let displayWords;
  if (words.length >= 2) {
    displayWords = words.slice(0, words.length - 1).map((w) => <p>{w}</p>);
  } else {
    displayWords = null;
  }

  return (
    <div className="App">
      <input type="text" placeholder="Type something" onChange={handleChange} />
      <span>{displayWords} </span>
    </div>
  );
}

export default App;
