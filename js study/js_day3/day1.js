// var num = 0;
// var str = "asdf"
// var isTrue = false;
// console.log(num);
// console.log(str);
// console.log(isTrue);

// var name = "Sujin";
// var str = "asdf"
// console.log(str+ " " +name);
// console.log(str, name);

// var num1 = 1;
// var num2 = "10";
// console.log(num1 + num2);
// console.log(num2 + num1);
// console.log(num1 - num2);
// console.log(num2 - num1);
// console.log(num1 * num2);
// console.log(num2 * num1);
// console.log(num1 / num2);
// console.log(num2 / num1);
// console.log(num1 + num2*1);
// console.log(name / num2);

// for(var i=0; i<10; i++){
//     console.log(i);
// }
// console.log(i);
// var num = 123;
// console.log(num);

// for(let j=0; j<10; j++){
//     console.log(j);
// }
// try {
//     console.log(j);   
// } catch (error) {
//     console.log("j is notting");
// }

// for(let j=0; j<=10; j++){
//     if(j==="0"){
//         console.log(j);
//     } else if (j===0)
//     console.log(true);
// }

//v1
// var time = Date.now();
// for(let i=2; i<=300000; i++){
//     let check = true;
//     for(let j=2; j<i/2; j++){
//         if(i%j == 0){
//             check = false;
//             break;
//         }
//     }
//     //if (check) console.log(i);
// }
// console.log("V1: " + (Date.now() - time) + "ms");

////////////

//v2
// time = Date.now();
// const num = [2];
// // console.log(2);
// for(let i=3; i<=300000; i++){
//     let check = true;
//     for(let j=0; j<num.length; j++){
//         if(num[j] > i/2) break;
//         if(i%num[j] == 0){
//             check = false;
//             break;
//         }
//     }
//     if(check) {
//         // console.log(i);
//         num.push(i);
//     }
// }
// console.log("V2: " + (Date.now() - time) + "ms");


// const list = [1,2,3];
// console.log(list);
// list.push(55);
// console.log(list);
// list.unshift(111);
// console.log(list);
// list.push(list.shift());
// console.log(list);
// list.pop();
// console.log(list);

// const obj = {};
// obj.name = "asdf";
// obj.age = 123;
// console.log(obj.name);
// console.log(obj.age);


// const arr = [1,2,3,4,5,6,7,8,9,10];
// arr.forEach(e => {
//     console.log(e);
// });
// console.log(arr.unshift(arr.pop()));
// console.log(arr);

// fail
// const result = [];
// for(let i=1; i <= 50; i++){
//     if (i%3 == 0){
//         result.push("짝");
//     } else if (Math.floor(i/10)%3 == 0 && i > 10) {
//         result.push("짝");
//     } else {
//         result.push(i);
//     }
// }
// console.log(result);

// const result = [];
// for(let i=1; i <= 500; i++){
//     if ((i+"").includes(3) || (i+"").includes(6) || (i+"").includes(9)){
//         result.push("짝");
//     } else {
//         result.push(i);
//     }
// }
// console.log(result);

// for(let i=1; i <= 40; i++) console.log(((i+"").includes(3) || (i+"").includes(6) || (i+"").includes(9)) ? "짝" : i);


// const list = [];
// const list369 = [];
// for(let i=100; i<=1000; i++) {
//     list.push(i);
//     list369.push(((i+"").includes(3) || (i+"").includes(6) || (i+"").includes(9)) ? "짝" : i);
// }
// console.log(list369);


const list = [];
for(let i=100; i<=1000; i++) list.push(i);
const list369 = list.slice();
for(let i=0; i<list369.length; i++) {
    let num = list369[i]
    list369[i] =(((num+"").includes(3) || (num+"").includes(6) || (num+"").includes(9)) ? "짝" : num);
}
console.log(list369);