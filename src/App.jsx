import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString()); 
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

 
  return (
   
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 flex items-center justify-center font-mono">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-6 w-80 transition-transform duration-300 hover:scale-105">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full mb-4 text-2xl text-right font-semibold bg-white/40 backdrop-blur-md rounded px-3 py-2 border border-white/50 shadow-inner focus:outline-none"
        />

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) =>
            btn === "=" ? (
              <button
                key={btn}
                onClick={calculate}
                className="col-span-1 bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-2 rounded-xl shadow-md hover:scale-105 transition"
              >
                {btn}
              </button>
            ) : (
              <button
                key={btn}
                onClick={() => handleClick(btn)}
                className="bg-white/30 text-gray-800 hover:bg-white/50 text-xl font-medium py-2 rounded-xl shadow-sm hover:scale-105 transition backdrop-blur"
              >
                {btn}
              </button>
            )
          )}
        </div>

        <button
          onClick={clearInput}
          className="mt-5 w-full flex justify-center items-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl shadow-lg hover:scale-105 transition"
        >
         
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
