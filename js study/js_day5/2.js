const observer = new IntersectionObserver((entries, observer) =>{
    entries.forEach(e => {
        if(e.isIntersecting) {
            e.target.className = "show";
        } else {
            e.target.className = "box";
        }
        // console.log(e);
    });
    // console.log({entries, observer});
});


for(let i =0; i<7; i++){
    const target = document.getElementsByClassName("box")[i];
    observer.observe(target);
}