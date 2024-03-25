function sum(a,b){
    return a+b;
}

// console.log(sum(3,5));

const diff = (a,b = 1) => a-b;
// console.log(diff(20));

const div = (a,b =2) => {
    const sum = () => a+b;
    return a/b;
}
// console.log(div(9,3));

const mult = (a,b = 2) => a*b;
// console.log(mult(20));

const sum2 = (a,b=2) => a+b;
const diff2 = (a,b=2) => a-b;

console.log(diff2(sum2(diff2(sum2(3)),10),4));

const list = [sum2, diff2, mult, div, (a) => a*a];
let total = 0;
for(let i=0; i<4; i++) {
    total += list[i](i,10);
}
console.log(total);
console.log((0+10)+(1-10)+(2*10)+(3/10));

const pow = list.pop();
console.log(pow(5));


const [sum3, diff3, mult3, div3, pow3] = list;