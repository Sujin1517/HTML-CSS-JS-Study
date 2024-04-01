const onclickRemove = () => {
    let bt = document.getElementById("bt");
    const re = document.getElementById("hide");
    if (re) {
        temp = re.remove();
        bt.innerText = "핫하 살아나라!"
        if(re.textContent == "되살아난 무고한 P"){
            alert("당신이 또 죽였어!!");
        } else {
            alert("당신이 죽였어..!");
        }
    } else {
        const body = document.getElementsByTagName("body");
        let p = document.createElement("p");
        p.id = "hide";
        p.innerText = "되살아난 무고한 P";
        body[0].append(p);
        bt.innerText = "핫하하 죽어라!"
    }
}