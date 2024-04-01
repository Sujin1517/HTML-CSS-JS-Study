import './App.css';
// import {useState} fr om 'react';
// import Box from './components/Box';
// import {Person} from './components/Person';
import Counter from './components/Counter';

/*
const People = () => {
  const [age, setAge] = useState(12);

  return (
    <>
      <p style={{margin:'0px'}}>다들 몇살이에요?</p>
      <input onChange={e => setAge(e.target.value)}></input>
      <br/>
      <br/>
      <Person age={age} />
      <br/>
      <Person age={age} />
      <br/>
      <Person age={age} />
    </>
  );
};
*/

// html 태그를 리턴하는 파일을 jsx라고 부름(선택사항)

//      초기속도(접속시)  그후
// csr  느림              빠름
// ssr  빠름              느림

function App() {
  const index = "집에가고싶다";

  // const [width, setw] = useState(100);
  // const [height, seth] = useState(100);

  // console.log("app");

  return (
    <div className="App">
      <h1>{index}</h1>
      <Counter />
      {/* <br/>
      <input type='range' min='10' max='500' onChange={(e) => setw(e.target.value + "px")}></input>
      <input type='range' min='10' max='500' onChange={(e) => seth(e.target.value + "px")}></input>
      <br/>
      <Box width={width} height={height} />
      <br/>
      <br/>
      <People />
      <br/>
      <br/> */}
    </div>
  );
}

export default App;
