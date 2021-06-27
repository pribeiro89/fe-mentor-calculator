import React from 'react'

const Toggle = ({ selectedTheme, selectTheme }) => {
  return (
    <div className="flex flex-col w-20">
      <ul className="flex justify-between px-3 py-1 cursor-pointer">
        <li onClick={() => selectTheme(0)}>1</li>
        <li onClick={() => selectTheme(1)}>2</li>
        <li onClick={() => selectTheme(2)}>3</li>
      </ul>
      <div className="bg-keypad w-full h-7 rounded-full p-1.5 flex items-center">
        <button
          className={`rounded-full w-4 h-4 transform translate-x-0 ${selectedTheme !== 0 ? 'bg-transparent' : 'bg-result-key'}`}
          onClick={() => selectTheme(0)}
        ></button>
        <button
          className={`rounded-full w-4 h-4 transform translate-x-2 ${selectedTheme !== 1 ? 'bg-transparent' : 'bg-result-key'}`}
          onClick={() => selectTheme(1)}
        ></button>
        <button
          className={`rounded-full w-4 h-4 transform translate-x-4 ${selectedTheme !== 2 ? 'bg-transparent' : 'bg-result-key'}`}
          onClick={() => selectTheme(2)}
        ></button>
      </div>
    </div>
  )
}

export default Toggle
