const teams = [
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

window.onload = function() {
    const div = document.getElementById("divTable");
    teams.forEach(e => {
        const div1 = document.createElement("div");

        div1.className = "row";
        
        div1.append(newDiv(e.rank));
        div1.append(newImg(e.img));
        div1.append(newDiv(e.name, "name"));
        div1.append(newDiv(e.win));
        div1.append(newDiv(e.lose));
        div1.append(newDiv(e.winLoseDiff));
        div1.append(newDiv(Math.floor(((e.win+e.lose)/e.win)*100)/100));
        div1.append(newDiv(Math.floor((e.kill+e.assist)/e.death*100)/100));
        div1.append(newDiv(e.kill));
        div1.append(newDiv(e.death));
        div1.append(newDiv(e.assist));
        div.append(div1);
    });
}