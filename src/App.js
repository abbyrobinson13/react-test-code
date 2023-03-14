import { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WordByWord />
    </div>
  );
}

const WordByWord = () => {
  const [inputtedText, setInputtedText] = useState("");
  const [arrayOfWords, setArrayOfWords] = useState([]);
  const [word, setWord] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const wordsArray = inputtedText.split(" ");
    setArrayOfWords(wordsArray);
    setWord(1);
    setInputtedText("");
  };

  useEffect(() => {
    if (arrayOfWords && word < arrayOfWords.length) {
      const time = setTimeout(() => setWord(word + 1), 500);
      return () => clearTimeout(time);
    }
  }, [arrayOfWords, word]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <form onSubmit={onSubmit}>
        <h1> Word by Word: By Abigail Robinson</h1>
        <h2>Please enter a phrase: </h2>
        <input
          required
          type="text"
          style={{ marginTop: 40, width: 300 }}
          value={inputtedText}
          onChange={(e) => setInputtedText(e.target.value)}
        />
      </form>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {arrayOfWords.slice(0, word).map((item) => (
          <h2 style={{ paddingRight: 4 }}>{item}</h2>
        ))}
      </div>
    </div>
  );
};

export default App;

// function WordByWord() {
//   const [word, setWord] = useState("");

//   function handleChange(event) {
//     setWord(event.target.value);
//   }

//   const words = word.split(" ");
//   console.log(words);

//   let displayWords;
//   if (words.length >= 2) {
//     displayWords = words.slice(0, words.length - 1).map((w) => <p>{w}</p>);
//   } else {
//     displayWords = null;
//   }

//   return (
//     <div className="App">
//       <input type="text" placeholder="Type something" onChange={handleChange} />
//       <span>{displayWords} </span>
//     </div>
//   );
// }
