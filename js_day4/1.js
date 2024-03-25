const list = [];
for (let i=1; i<=10; i++) {
    list.push(i);
}
console.log(list);

list[4] = "10";
console.log(list);

const cr = {
    student :[
        {name: "asd", age:1},
        {name: "qwe", age:2}
    ],
    manager :[
        {name: "zxc", age:3}
    ],
};

console.log(cr.student[1].name);

cr.list = list;
cr.list[0] = 100;

console.log(list, cr);

