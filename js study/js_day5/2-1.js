const b1 = document.getElementsByClassName("box1")[0];
const b2 = document.getElementsByClassName("box2")[0];
const b3 = document.getElementsByClassName("box3")[0];

const observer = new IntersectionObserver((entries, observer) =>{
    entries.forEach(e => {
        if(e.isIntersecting) {
            e.target.className = "show";
        } else {
            e.target.className = "box2";
            b1.style.height = "0vh";
            b3.style.height = "0vh";
            b1.style.height = "100vh";
            b3.style.height = "100vh";
        }
    });
});


observer.observe(b2);