import { useState } from 'react';
import './App.css';
import React from 'react';
function App() {
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

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

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const buttons = [
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "−",
    "0", ".", "=", "+"
  ];

  const convertSymbol = (btn) => {
    switch (btn) {
      case "÷": return "/";
      case "×": return "*";
      case "−": return "-";
      default: return btn;
    }
  };

  const isOperator = (btn) => ["÷", "×", "−", "+", "="].includes(btn);

  return (
    <div className={`min-h-screen transition-colors duration-500 flex items-center justify-center font-mono ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-sky-100 to-white'}`}>
      <div className="relative bg-white/20 dark:bg-black/30 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-6 w-full max-w-sm transition-transform hover:scale-105 duration-300">
        
        {/* Glowing Border */}
        <div className="absolute -inset-1 rounded-3xl border-2 border-cyan-400 opacity-30 pointer-events-none animate-pulse"></div>

        {/* Toggle Theme */}
        <div className="flex justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-700 dark:text-white">🧮 Calculator </h1>
          <button
            onClick={toggleDarkMode}
            className="text-sm px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow transition"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Display */}
        <input
          type="text"
          value={input}
          readOnly
          className="w-full mb-6 text-4xl text-right font-bold bg-white/80 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl px-4 py-3 border border-gray-300 dark:border-gray-700 shadow-inner focus:outline-none transition-all duration-300 animate-pulse"
        />

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-4">
          {buttons.map((btn) => {
            let btnClasses = "w-16 h-16 rounded-full text-2xl font-bold shadow-md transition-transform hover:scale-110";

            if (btn === "=") {
              btnClasses += " bg-indigo-600 hover:bg-indigo-700 text-white";
            } else if (isOperator(btn)) {
              btnClasses += " bg-pink-500 hover:bg-pink-600 text-white";
            } else {
              btnClasses += " bg-white hover:bg-gray-100 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white";
            }

            return (
              <button
                key={btn}
                onClick={btn === "=" ? calculate : () => handleClick(convertSymbol(btn))}
                className={btnClasses}
              >
                {btn}
              </button>
            );
          })}
        </div>

        {/* Clear Button */}
        <button
          onClick={clearInput}
          className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition"
        >
          🧹 Clear
        </button>
      </div>
    </div>
  );
}

export default App;
