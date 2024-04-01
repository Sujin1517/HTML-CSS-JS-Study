import { useState } from 'react'
import './App.css'

const teams = [
  {
    rank: 1,
    name: "담원 기아",
    win: 12,
    lose: 6,
    winLoseDiff: 15,
    rate: 0.0,
    kda: 0.0,
    kill: 607,
    death: 508,
    assist: 1386,
  },
  {
    rank: 2,
    name: "농심",
    win: 12,
    lose: 6,
    winLoseDiff: 8,
    rate: 0.0,
    kda: 0.0,
    kill: 589,
    death: 513,
    assist: 1285,
  },
  {
    rank: 2,
    name: "젠지",
    win: 12,
    lose: 6,
    winLoseDiff: 8,
    rate: 0.0,
    kda: 0.0,
    kill: 605,
    death: 489,
    assist: 1367,
  },
  {
    rank: 4,
    name: "T1",
    win: 11,
    lose: 7,
    winLoseDiff: 6,
    rate: 0.0,
    kda: 0.0,
    kill: 504,
    death: 447,
    assist: 1190,
  },
  {
    rank: 5,
    name: "피어엑스",
    win: 11,
    lose: 7,
    winLoseDiff: 5,
    rate: 0.0,
    kda: 0.0,
    kill: 514,
    death: 568,
    assist: 1223,
  },
  {
    rank: 6,
    name: "아프리카",
    win: 11,
    lose: 7,
    winLoseDiff: 4,
    rate: 0.0,
    kda: 0.0,
    kill: 530,
    death: 489,
    assist: 1324,
  },
  {
    rank: 7,
    name: "KT",
    win: 7,
    lose: 11,
    winLoseDiff: -4,
    rate: 0.0,
    kda: 0.0,
    kill: 495,
    death: 559,
    assist: 1281,
  },
  {
    rank: 8,
    name: "한화 생명",
    win: 7,
    lose: 11,
    winLoseDiff: -9,
    rate: 0.0,
    kda: 0.0,
    kill: 495,
    death: 559,
    assist: 1122,
  },
  {
    rank: 9,
    name: "OK저축은행",
    win: 5,
    lose: 13,
    winLoseDiff: -8,
    rate: 0.0,
    kda: 0.0,
    kill: 483,
    death: 514,
    assist: 1184,
  },
  {
    rank: 10,
    name: "DRX",
    win: 2,
    lose: 16,
    winLoseDiff: -25,
    rate: 0.0,
    kda: 0.0,
    kill: 377,
    death: 630,
    assist: 858,
  },
];
const keys = [...Object.keys(teams[0])];

function App() {
  // const [teamarr, setTeam] = useState(teams);
  // const searchTeamName = (t) => {
  //   let temp = [];
  //   teams.forEach(e => {if(e.name.includes(t)) temp.push(e)});
  //   setTeam(temp);
  // }
  const [txt, setxt] = useState("");
  const [option, setOption] = useState("rank");
  let ttt = txt;
  let ooo = option;

  console.log("reload");

  return (
    <>
      <div>
        {/* <input placeholder='name을 입력해라 애송이' onChange={e => searchTeamName(e.target.value)}/> */}
        {/* <input placeholder='값을 입력해라 애송이' onChange={e => setxt(e.target.value)}/> */}
        <input placeholder='값을 입력해라 애송이' onChange={e => ttt = e.target.value}/>
        {/* <select onChange={e => setOption(e.target.value)}>
          {keys.map(e => <option value={e}>"{e}"</option>)}
        </select> */}
        <select onChange={e => ooo = e.target.value}>
          {keys.map(e => <option value={e}>"{e}"</option>)}
        </select>
        <button onClick={() => {setxt(ttt); setOption(ooo)}}>실-행</button>
        <p/>
        <table>
          <thead>
            <th>팀 순위</th>
            <th></th>
            <th>승</th>
            <th>패</th>
            <th>득실차</th>
            <th>승률</th>
            <th>KDA</th>
            <th>킬</th>
            <th>데스</th>
            <th>어시스트</th>
          </thead>
          <tbody></tbody>
          <tbody>
            {/* {teamarr.map((e) =>  */}
            {teams
            .filter(e => e[option].toString().includes(txt))
            .sort((a,b) => a[option]-b[option])
            .map((e, i) => 
              <tr key={i}>
                <td>{e.rank}</td>
                <td>{e.name}</td>
                <td>{e.win}</td>
                <td>{e.lose}</td>
                <td>{e.winLoseDiff}</td>
                <td>{Math.round(e.win/(e.win+e.lose)*100)/100}</td>
                <td>{Math.round(((e.kill+e.assist)/e.death)*100)/100}</td>
                <td>{e.kill}</td>
                <td>{e.death}</td>
                <td>{e.assist}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
