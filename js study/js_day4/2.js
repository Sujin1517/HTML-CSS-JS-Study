console.log("--------------");

const cr = {
    student :[
        {name: "asd", age:1},
        {name: "qwe", age:2}
    ]
};
console.log("원본", cr);

cr.student.forEach(e => {
    e.age += 1
});
console.log("한살먹음", cr);

const ageup = cr.student.map((e) => {
    return student = {name:e.name, age:e.age+1};
});
console.log("원본", cr);
console.log("한살또먹음", ageup);

// 리스트로
const [a,b] = ageup;
console.log(a,b);

// 변수로
const {name, age} = a;
console.log(name, age);



console.log("------------");

const st = [
    {n:"김부자", a:22},
    {n:"조진호", a:32},
    {n:"김세현", a:15},
    {n:"정희석", a:33}
];
const adultList = st.map((e) => {
    return sss = {...e, isAdult: e.a > 19 ? true : false};
});
console.log(st);
console.log(adultList);