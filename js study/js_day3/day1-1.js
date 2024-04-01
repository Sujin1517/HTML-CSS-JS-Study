const list = [1,4,5,21,42,1,3,57,9,5231];
// const isEvenList = [];
// list.forEach(e => {
//     isEvenList.push(e%2 == 0);
//});
const isEvenList = list.map((e) => e % 2 == 0);
console.log(isEvenList);

