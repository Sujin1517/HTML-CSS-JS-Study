let teams = [
    {
      rank: 1,
      img: "https://nng-phinf.pstatic.net/MjAyNDAxMTZfMjMz/MDAxNzA1Mzk0NTQxNTU1.NvRvq6xBdA91HHUsQvAXCG6Esr_GMMF-pdfrATG73Vgg.PEoXfnQjVTpshlFwdcXMhSlKHUQASkKDt79GmKDG7p0g.PNG/TgtSCeOGhDmtKJcYPMFx.png?type=f120_120",
      name: "담원 기아",
      win: 12,
      lose: 6,
      winLoseDiff: 15,
      kill: 607,
      death: 508,
      assist: 1386,
    },
    {
      rank: 2,
      img: "https://nng-phinf.pstatic.net/MjAyNDAyMTdfNTEg/MDAxNzA4MTQ1NjYwOTk4.IeqZ-I2JUp2513V-r6_Z5DHSKmJEUffyScLDbNYqLAIg.HyKiFSxpjNNvDg-UnTX_W23WwEFQZ5e6ltkWXWACjzcg.PNG/FbiVSngXvuCwIXkiBrce.png?type=f120_120",
      name: "농심",
      win: 12,
      lose: 6,
      winLoseDiff: 8,
      kill: 589,
      death: 513,
      assist: 1285,
    },
    {
      rank: 2,
      img: "https://nng-phinf.pstatic.net/MjAyMzExMzBfMTMx/MDAxNzAxMjkxMTQxOTI0.35KDbIgQhqzkTbLv0fpYha0lONR-361OV4H7e2B12AQg.f8N-nXoqv7PyhRMjQrutFrbxdkWqIsanyd2tVEpLiDIg.PNG/qMJJzeIENwyuXsYROOPC.png?type=f120_120",
      name: "젠지",
      win: 12,
      lose: 6,
      winLoseDiff: 8,
      kill: 605,
      death: 489,
      assist: 1367,
    },
    {
      rank: 4,
      img: "https://nng-phinf.pstatic.net/MjAyMzExMjFfMTkg/MDAxNzAwNTM5MzQyMTEx.Us_eFQthpJBOl1wtObn1jx9mu8xWwzjjfV5uSX2wnLIg.n_y-rzUkfZYKa6RMLtQ5cHDzlEVXdoNIsgP3y2X8-8cg.PNG/QDjIsYvDxwritmxpmHbm.png?type=f120_120",
      name: "T1",
      win: 11,
      lose: 7,
      winLoseDiff: 6,
      kill: 504,
      death: 447,
      assist: 1190,
    },
    {
      rank: 5,
      img: "https://nng-phinf.pstatic.net/MjAyNDAzMjNfMyAg/MDAxNzExMTgwNzAxMzcw.0Lxk2ZMpGjPvTn26rixHzpZWROCrYW2nVJvwgQeyxCsg.ZOxXZiI1lhZg70yPCrnK6KYDRwzpBVN5fa4MP2ErQQ0g.PNG/lEjmqZZltdVtVCIqCZNv.png?type=f120_120",
      name: "피어엑스",
      win: 11,
      lose: 7,
      winLoseDiff: 5,
  
      kill: 514,
      death: 568,
      assist: 1223,
    },
    {
      rank: 6,
      img: "https://nng-phinf.pstatic.net/MjAyMjEwMTdfMTAw/MDAxNjY1OTgxNzAwNzI3.Gxt5JMsakD4pMjXaeP-955KhiyaBr9uHNxVuhNxHczsg.BzR_8Ch09W0_KW3G8De_dCWikTyz5W7lq2tl63jazxQg.PNG/gYiOCoSyIjiCaqciaNLW.png?type=f120_120",
      name: "아프리카",
      win: 11,
      lose: 7,
      winLoseDiff: 4,
      kill: 530,
      death: 489,
      assist: 1324,
    },
    {
      rank: 7,
      img: "https://nng-phinf.pstatic.net/MjAyMzA4MTlfMjc5/MDAxNjkyNDQyNDYxNDgy.cBlE3Sb3Gp1z2HZHBdG0FIPf6tpFKweqHKQOzB_8RW0g.ZeyxGwH-HRGEhQx-0O2F3toKuiAhqIdM-JE7E_ed6KMg.PNG/NAIEIeJiaObEkzClVJwv.png?type=f120_120",
      name: "KT",
      win: 7,
      lose: 11,
      winLoseDiff: -4,
      kill: 495,
      death: 559,
      assist: 1281,
    },
    {
      rank: 8,
      img: "https://nng-phinf.pstatic.net/MjAyNDAxMDlfMjMy/MDAxNzA0Nzc3NjI1MTQ2.eGW1SDrSWl18jzPXlcvANpcCWKpYsf6IjimjGSDjoMQg.hlnvjyQsj9nIiMZeA4OhBE55kkwj5teP9EQv1jiyrdwg.PNG/nISCkMhXrbDUSwvvNBHU.png?type=f120_120",
      name: "한화 생명",
      win: 7,
      lose: 11,
      winLoseDiff: -9,
      kda: 2.89,
      kill: 495,
      death: 559,
      assist: 1122,
    },
    {
      rank: 9,
      img: "https://nng-phinf.pstatic.net/MjAyNDAxMDlfNzkg/MDAxNzA0Nzc3NjIzNzE0.ggqk_IRt-0UKOdF1dgczPjArzZMwB5lgtx3dL8MGW2Mg.GRnW5Zms76fG1kAZoeg_CU6nhQLdEzvBfDrldNW6E1Ag.PNG/sEAYkgonQtCbnyhRHAXb.png?type=f120_120",
      name: "OK저축은행",
      win: 5,
      lose: 13,
      winLoseDiff: -8,
  
      kill: 483,
      death: 514,
      assist: 1184,
    },
    {
      rank: 10,
      img: "https://nng-phinf.pstatic.net/MjAyNDAxMDlfMjU2/MDAxNzA0Nzc3NjI1NTA0.SKtMtPI2qdxYF5G11OvPo-CvPIqzYUw4C2UQy-QYsygg.CE3_sM5g3CWukjkIx4XAuQO8YHkY3t8PUa8EqdJ5-Asg.PNG/FbqNKUQHEjoWMLhgmXuQ.png?type=f120_120",
      name: "DRX",
      win: 2,
      lose: 16,
      winLoseDiff: -25,
      kill: 377,
      death: 630,
      assist: 858,
    },
];

let sortIsUpper = {
  rank:true,
  win:false,
  lose:true,
  winLoseDiff:false,
  winrate:true,
  kda:true,
  kill:false,
  death:false,
  assist:false
};

// const newCol = (e, id) => {
//   const elem = document.createElement("div");
//   elem.id = id;
//   elem.className = "sort";
//   elem.innerHTML = e;
//   return elem
// }
const newDiv = (e, s="col") => {
const elem = document.createElement("div");
elem.className = s;
elem.innerHTML = e;
return elem
}
const newImg = (e, s="img") => {
    const elem = document.createElement("img");
    elem.className = s;
    elem.src = e;
    elem.alt = "";
    return elem
}

const setBlue = (target) => {
  const rank = document.getElementById("rank");
  const win = document.getElementById("win");
  const lose = document.getElementById("lose");
  const winLoseDiff = document.getElementById("winLoseDiff");
  const winrate = document.getElementById("winrate");
  const kda = document.getElementById("kda");
  const kill = document.getElementById("kill");
  const death = document.getElementById("death");
  const assist = document.getElementById("assist");
  const cols = [rank,win,lose,winLoseDiff,winrate,kda,kill,death,assist];
  cols.forEach(e => {
    if (e.id == target){
      e.style = "color: Blue; font-weight: bolder;";
    } else {
      e.style = "";
    }
  });
}

window.onload = function() {
  table(teams);

  const rank = document.getElementById("rank");
  const win = document.getElementById("win");
  const lose = document.getElementById("lose");
  const winLoseDiff = document.getElementById("winLoseDiff");
  const winrate = document.getElementById("winrate");
  const kda = document.getElementById("kda");
  const kill = document.getElementById("kill");
  const death = document.getElementById("death");
  const assist = document.getElementById("assist");

  rank.addEventListener("click", () => {
    if (sortIsUpper.rank) teams = teams.sort((a,b) => (b.rank-a.rank));
    else teams = teams.sort((a,b) => (a.rank-b.rank));
    table();
    setBlue("rank");
    sortIsUpper.rank = sortIsUpper.rank ? false : true;
  });

  win.addEventListener("click", () => {
    if (sortIsUpper.win) teams = teams.sort((a,b) => (b.win-a.win));
    else teams = teams.sort((a,b) => (a.win-b.win));
    table();
    setBlue("win");
    sortIsUpper.win = sortIsUpper.win ? false : true;
  });

  lose.addEventListener("click", () => {
    if (sortIsUpper.lose) teams = teams.sort((a,b) => (b.lose-a.lose));
    else teams = teams.sort((a,b) => (a.lose-b.lose));
    table();
    setBlue("lose");
    sortIsUpper.lose = sortIsUpper.lose ? false : true;
  });

  winLoseDiff.addEventListener("click", () => {
    if (sortIsUpper.winLoseDiff) teams = teams.sort((a,b) => (b.winLoseDiff-a.winLoseDiff));
    else teams = teams.sort((a,b) => (a.winLoseDiff-b.winLoseDiff));
    table();
    setBlue("winLoseDiff");
    sortIsUpper.winLoseDiff = sortIsUpper.winLoseDiff ? false : true;
  });

  winrate.addEventListener("click", () => {
    if (sortIsUpper.win) teams = teams.sort((a,b) => (
      (b.win/(b.win+b.lose))-(a.win/(a.win+a.lose))
      ));
    else teams = teams.sort((a,b) => (
      (a.win/(a.win+a.lose))-(b.win/(b.win+b.lose))
      ));
    table();
    setBlue("winrate");
    sortIsUpper.win = sortIsUpper.win ? false : true;
  });

  kda.addEventListener("click", () => {
    if (sortIsUpper.win) teams = teams.sort((a,b) => (
      ((b.kill+b.assist)/b.death)-((a.kill+a.assist)/a.death)
      ));
    else teams = teams.sort((a,b) => (
      ((a.kill+a.assist)/a.death)-((b.kill+b.assist)/b.death)
      ));
    table();
    setBlue("kda");
    sortIsUpper.win = sortIsUpper.win ? false : true;
  });

  kill.addEventListener("click", () => {
    if (sortIsUpper.kill) teams = teams.sort((a,b) => (b.kill-a.kill));
    else teams = teams.sort((a,b) => (a.kill-b.kill));
    table();
    setBlue("kill");
    sortIsUpper.kill = sortIsUpper.kill ? false : true;
  });

  death.addEventListener("click", () => {
    if (sortIsUpper.death) teams = teams.sort((a,b) => (b.death-a.death));
    else teams = teams.sort((a,b) => (a.death-b.death));
    table();
    setBlue("death");
    sortIsUpper.death = sortIsUpper.death ? false : true;
  });

  assist.addEventListener("click", () => {
    if (sortIsUpper.assist) teams = teams.sort((a,b) => (b.assist-a.assist));
    else teams = teams.sort((a,b) => (a.assist-b.assist));
    table();
    setBlue("assist");
    sortIsUpper.assist = sortIsUpper.assist ? false : true;
  });
}


const table = (list) => {
  const content = document.getElementById("content");
  content.innerHTML = "";

  teams.forEach(e => {
    const div1 = document.createElement("div");
    div1.className = "row";
    
    div1.append(newDiv(e.rank));
    div1.append(newImg(e.img));
    div1.append(newDiv(e.name, "name"));
    div1.append(newDiv(e.win));
    div1.append(newDiv(e.lose));
    div1.append(newDiv(e.winLoseDiff));
    div1.append(newDiv(Math.floor((e.win/(e.win+e.lose))*100)/100));
    div1.append(newDiv(Math.floor((e.kill+e.assist)/e.death*100)/100));
    div1.append(newDiv(e.kill));
    div1.append(newDiv(e.death));
    div1.append(newDiv(e.assist));
    content.append(div1);
  });
}
