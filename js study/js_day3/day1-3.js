//const calc = [0, sum, dif, div, mul];
const calc = [[0],
    (a)=> calc[0].push(calc[0][calc[0].length-1]+a),
    (a)=> calc[0].push(calc[0][calc[0].length-1]-a),
    (a)=> calc[0].push(calc[0][calc[0].length-1]/a),
    (a)=> calc[0].push(calc[0][calc[0].length-1]*a)
];

calc[1](4);
calc[2](1);
calc[4](10);
calc[3](2);
calc[1](4);
console.log(calc[0]);