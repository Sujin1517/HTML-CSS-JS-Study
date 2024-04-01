let time = 0;
const timeUp = setInterval(() => {
    const txt = document.getElementById("txt");
    time++;
    txt.innerText = "Time: " + (Math.floor(time/100)) + "." + (time%100<10 ? "0"+(time%100) : (time%100));
},10);

// const hello = setInterval(()=>{
//     alert("hello");
// },1000);

// const asd = setInterval(()=>{
//     if (confirm("end?")) {
//         clearInterval.hello;
//         clearInterval.asd;
//     }
// },3000);