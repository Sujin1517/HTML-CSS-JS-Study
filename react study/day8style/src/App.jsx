import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { css } from '@emotion/css'

const color = 'white'

function App() {
  const [w, setw] = useState("200px");
  const [h, seth] = useState("80px");

  return (
    <>
      <input type='range' max="400" min="10" onChange={e => setw(e.target.value + "px")}/>
      <input type='range' max="400" min="10" onChange={e => seth(e.target.value + "px")}/>
      <div
        className={css`
          width:${w};
          height:${h};
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            transform: rotate(360deg);
            transition: 1s;
            animation-direction: alternate;
            color: ${color};
        }`}
      >
        Hover to change color.
      </div>
    </>
  )
}

export default App
