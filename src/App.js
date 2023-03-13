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
  const [words, setWords] = useState([]);
  const [displayIndex, setDisplayIndex] = useState(0);

  useEffect(() => {
    // split will take the input string and split it into individual words in an array
    const newWords = inputtedText.trim().split(/\s+/);
    setWords(newWords);

    //clears text when the input box is different
    setDisplayIndex(0);
  }, [inputtedText]);

  useEffect(() => {
    //make words show up every half second
    const interval = setInterval(() => {
      setDisplayIndex((prevIndex) => prevIndex + 1);
    }, 500);

    // clear screen when the entire sentence is finished
    if (displayIndex === words.length) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [displayIndex, words]);

  const handleChange = (event) => {
    setInputtedText(event.target.value);
  };

  console.log(words);

  return (
    <div style={{ paddingTop: 40 }}>
      <input
        onChange={handleChange}
        value={inputtedText}
        style={{ width: 300 }}
      />
      <h2>{words.slice(0, displayIndex).join(" ")}</h2>
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
