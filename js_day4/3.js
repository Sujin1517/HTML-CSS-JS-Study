const st = [
    {n:"김부자", a:22},
    {n:"조진호", a:32},
    {n:"김세현", a:15},
    {n:"정희석", a:33}
];
const adultList = st.map((e) => {
    return sss = {...e, isAdult: e.a > 19};
});
const ageup = st.map((e) => {
    return sss = {...e, a:e.a+1};
});
console.log(st);
console.log(adultList);
console.log(ageup);

// 콜백 함수
const ageUpFunc = (e) => ({...e, a:e.a+1});
const aaa = st.map(ageUpFunc);
console.log("----");
console.log(aaa);

const kim = st.filter((e) => e.n.charAt("0") == "김");
console.log("----");
console.log(kim);