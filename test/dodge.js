const w = 800;
const h = 600;
const tick = 20;    // update time

const speed = 4;    // player move speed
const rSpeed = 4;   // player rotate speed
let xPos = w/2;        // player x pos
let yPos = h/2;        // player y pos
let rota = 0;          // player rotate

let timer = 0;      // how long time to play
let state = 0;      // 0:stop, 1:playing
let leftKeydown = false;    // turn left key down
let rightKeydown = false;   // turn right key down

let enemyObjects = [];      // enemy array          { type, color, xPos, yPos, rotation, speed, shotNum, shotDelay, timeCount }
let projectiles = [];       // projectile array     { type, color, xPos, yPos, rotation, speed }
const baseCreateDelay = 5000;
let createDelay = 1;

//임시 발사체
// projectiles.push({
//     type: "line",
//     color: "#f00",
//     xPos:200,
//     yPos:100,
//     rotation:90,
//     speed:2
// });


// 임시
window.onload = function() {
    canvas = document.getElementById("canvas");
    canvas.setAttribute("width", w);
    canvas.setAttribute("height", h);
    c = canvas.getContext("2d");
    drawInit();

    state = 1;
    gameStart();
}



//// 키입력 ////
document.addEventListener('keypress', (e) => {
    if (e.key == "a" || e.key == "ArrowLeft" ) {
        leftKeydown = true;
    } else if (e.key == "d" || e.key == "ArrowRight" ) {
        rightKeydown = true;
    }
});
document.addEventListener('keyup', (e) => {
    if (e.key == "a" || e.key == "ArrowLeft" ) {
        leftKeydown = false;
    } else if (e.key == "d" || e.key == "ArrowRight" ) {
        rightKeydown = false;
    }
});



//// 그리기 ////
const drawInit = () => {
    c.fillStyle = "#fff"
    c.fillRect(0,0,w,h);
}
const drawBack = () => {
    c.fillStyle = "#000"
    c.globalAlpha = 0.2;
    c.fillRect(0,0,w,h);
    c.globalAlpha = 1;
}
const drawPlayer = () => {
    const x = xPos;
    const y = yPos;
    const r = rota;

    c.strokeStyle = "#fff";
    c.lineWidth = 3;
    c.beginPath();
    c.moveTo(x+Math.cos((r/180)%360*Math.PI)*7, y+Math.sin((r/180)%360*Math.PI)*7);
    c.lineTo(x+Math.cos((r+145)%360/180*Math.PI)*7, y+Math.sin((r+145)%360/180*Math.PI)*7);
    c.lineTo(x+Math.cos((r+215)%360/180*Math.PI)*7, y+Math.sin((r+215)%360/180*Math.PI)*7);
    c.lineTo(x+Math.cos((r/180)%360*Math.PI)*7, y+Math.sin((r/180)%360*Math.PI)*7);
    c.closePath();
    
    c.stroke();
    c.fillStyle = "#fff"
    c.fill();
}
// 안만듦
const drawObject = () => {
    enemyObjects.forEach(e => {
        c.fillStyle = e.color;
        c.lineWidth = 2;
        c.strokeStyle = e.color;
        c.beginPath();
        const x = e.xPos;
        const y = e.yPos;
        const r = e.rotation;
        switch (e.type) {
            case 0:
                c.arc(x, y, 5, 0, 2*Math.PI);
                c.arc(x, y, 12, 0, 2*Math.PI);
                c.stroke();
                c.fillRect(x-1,y-12,2,6);
                c.fillRect(x-1,y+6,2,6);
                c.fillRect(x-12,y-1,6,2);
                c.fillRect(x+6,y-1,6,2);
                break;

            case 1:
                c.moveTo(x, y+11);
                c.lineTo(x-11, y);
                c.lineTo(x, y-11);
                c.lineTo(x+11, y);
                c.lineTo(x, y+11);
                c.moveTo(x, y+4);
                c.lineTo(x-4, y);
                c.lineTo(x, y-4);
                c.lineTo(x+4, y);
                c.lineTo(x, y+4);
                c.stroke();
                break;

            case 2:
                c.arc(x, y, 10, 0, 2*Math.PI);
                c.stroke();
                c.closePath();
                c.beginPath();
                c.moveTo(x, y+7);
                c.lineTo(x-7, y);
                c.lineTo(x, y-7);
                c.lineTo(x+7, y);
                c.lineTo(x, y+7);
                c.fill();
                break;

            case 3:
                c.arc(x, y, 12, 0, 2*Math.PI);
                c.moveTo(x-1,y);
                c.arc(x-5, y, 4, 0, 2*Math.PI);
                c.moveTo(x+4,y-5);
                c.arc(x, y-5, 4, 0, 2*Math.PI);
                c.moveTo(x+9,y);
                c.arc(x+5, y, 4, 0, 2*Math.PI);
                c.moveTo(x+4,y+5);
                c.arc(x, y+5, 4, 0, 2*Math.PI);
                c.stroke();
                break;
            
            default:
                console.log("Error: undefined enemy object type.");
        }
        c.closePath();
    });
}
const drawProjectile = () => {
    projectiles.forEach(e => {
        c.fillStyle = e.color;
        c.strokeStyle = e.color;
        c.beginPath();
        const x = e.xPos;
        const y = e.yPos;
        const r = e.rotation;
        switch (e.type) {
            case "flat":
                c.arc(x, y, 5, 0, 2*Math.PI);
                c.fill();
                break;
            
            case "ring":
                c.lineWidth = 2;
                c.arc(x, y, 6, 0, 2*Math.PI);
                c.stroke();
                break;
            
            case "line":
                c.moveTo(x+Math.cos((r+150)%360/180*Math.PI)*6, y+Math.sin((r+150)%360/180*Math.PI)*6);
                c.lineTo(x+Math.cos((r+30)%360/180*Math.PI)*6, y+Math.sin((r+30)%360/180*Math.PI)*6);
                c.lineTo(x+Math.cos((r+330)%360/180*Math.PI)*6, y+Math.sin((r+330)%360/180*Math.PI)*6);
                c.lineTo(x+Math.cos((r+210)%360/180*Math.PI)*6, y+Math.sin((r+210)%360/180*Math.PI)*6);
                c.lineTo(x+Math.cos((r+150)%360/180*Math.PI)*6, y+Math.sin((r+150)%360/180*Math.PI)*6);
                c.fill();
                break;


            case "square":
                c.moveTo(x+Math.cos((r+45)%360/180*Math.PI)*7, y+Math.sin((r+45)%360/180*Math.PI)*7);
                c.lineTo(x+Math.cos((r+135)%360/180*Math.PI)*7, y+Math.sin((r+135)%360/180*Math.PI)*7);
                c.lineTo(x+Math.cos((r+225)%360/180*Math.PI)*7, y+Math.sin((r+225)%360/180*Math.PI)*7);
                c.lineTo(x+Math.cos((r+315)%360/180*Math.PI)*7, y+Math.sin((r+315)%360/180*Math.PI)*7);
                c.lineTo(x+Math.cos((r+45)%360/180*Math.PI)*7, y+Math.sin((r+45)%360/180*Math.PI)*7);
                c.fill();
                break;

            case "diamond":
                c.moveTo(x-6.5, y);
                c.lineTo(x, y-6.5);
                c.lineTo(x+6.5, y);
                c.lineTo(x, y+6.5);
                c.lineTo(x-6.5, y);
                c.fill();
                break;

            default:
                console.log("Error: undefined projectile type.");
        }
        c.closePath();
    });
}
const drawTimer = () => {
    c.beginPath();
    c.fillStyle = "#fff";
    c.font = "16px serif";
    c.textAlign = "left";
    c.textBaseline = "top";
    c.fillText(Math.floor(timer/100)%10 == 0 ? Math.floor(timer/100)/10 + ".0": Math.floor(timer/100)/10, 5, 5);
    c.closePath();
}



//// 이동 ////
const getDist = (x1,y1,x2,y2) => {
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt(dx*dx+dy*dy);
}
const hitCheck = (px,py) => {
    // if(px > xPos-4 && px < xPos+4 && py > yPos-4 && py < yPos+4){
    if(getDist(px,py,xPos,yPos) < 8){
        state = 0;
        alert("기록\n" + (timer/1000) + "초")
    }
}
const projectileMove = () => {
    for(let i=0; i<projectiles.length; i++) {
        projectiles[i].xPos += Math.cos(projectiles[i].rotation/180*Math.PI) * projectiles[i].speed;
        projectiles[i].yPos += Math.sin(projectiles[i].rotation/180*Math.PI) * projectiles[i].speed;
        if (projectiles[i].xPos < -10 || projectiles[i].xPos > 810 || projectiles[i].yPos < -10 || projectiles[i].yPos > 610) {
            projectiles.splice(i,1);
            i--;
            continue;
        }
        hitCheck(projectiles[i].xPos, projectiles[i].yPos);
    }
}
const ObjectMove = () => {
    for(let i=0; i<enemyObjects.length; i++) {
        if (enemyObjects[i].speed < 0.4) {
            enemyObjects[i].speed = 0;
            continue;
        }
        enemyObjects[i].xPos += Math.cos(enemyObjects[i].rotation/180*Math.PI) * enemyObjects[i].speed;
        enemyObjects[i].yPos += Math.sin(enemyObjects[i].rotation/180*Math.PI) * enemyObjects[i].speed;
        enemyObjects[i].speed *= 0.95;
    }
}
const playerMove = () => {
    rota -= leftKeydown ? rSpeed : 0;
    rota += rightKeydown ? rSpeed : 0;
    rota = (rota+360)%360;
    xPos += Math.cos(rota/180*Math.PI) * speed;
    yPos += Math.sin(rota/180*Math.PI) * speed;
    // console.log(x,y,r,rkeydown);
}



//// 발사하는 오브젝트 업데이트 ////
const createEnemy = () => {
    const shotNumByType = [
        6, 6, 15, 4
    ];
    const shotDelayByType = [
        1100, 800, 300, 1500
    ];
    const objectColorByType = [
        "#00f", "#ff0", "#f0f", "#0f0"
    ];
    const enemyType = Math.floor(Math.random()*shotNumByType.length);
    let x = 0;
    let y = 0;
    let r = 0;

    if (Math.round(Math.random())) {
        x = w * Math.round(Math.random());
        y = Math.round(Math.random()*h);
    } else {
        y = h * Math.round(Math.random());
        x = Math.round(Math.random()*h);
    }
    r = calcRote(x,y,xPos,yPos);
    
    // { type, color, xPos, yPos, rotation, speed, shotNum, shotDelay, timeCount }
    const enemy = {
        type:enemyType,
        color:objectColorByType[enemyType],
        xPos:x,
        yPos:y,
        rotation:r,
        speed:Math.random()*3+2,
        shotNum:shotNumByType[enemyType],
        shotDelay:shotDelayByType[enemyType],
        timeCount:tick
    }
    enemyObjects.push(enemy);
    
    createDelay *= 0.90;
    console.log("Log: create enemy object. type:" + enemyType + ". now delay value is:" + Math.round(createDelay*1000)/1000);
    if (state == 1) setTimeout(createEnemy, baseCreateDelay*createDelay);
}
const enemyObjectsTimer = () => {
    for(let i=0; i<enemyObjects.length; i++) {
        // if ((enemyObjects[i].timeCount / (enemyObjects[i].shotDelay*createDelay)) >= enemyObjects[i].shotNum) {
        if (enemyObjects[i].shotNum == 0) {
            enemyObjects.splice(i,1);
            i--;
            continue;
        }
        enemyObjects[i].timeCount += tick;
    }
}
const enemyObjectsShot = () => {
    // enemy array          { type, color, xPos, yPos, rotation, speed, shotNum, shotDelay, timeCount }
    // createProjectile     (x=-1,y=-1,r=0, s=3, pjcolor="#f00", pjtype="flat")
    const pjSpeedbyEnemyType = [
        6, 4, 4.5, 2.5
    ];
    const pjTypebyEnemyType = [
        "line", "square", "diamond", "ring"
    ];
    enemyObjects.forEach(e => {
        if (e.timeCount % (e.shotDelay) < tick) {
            if (e.type == 0) {
                const createProjectileTemp = (c, r) => {
                    createProjectile(e.xPos, e.yPos, r, pjSpeedbyEnemyType[e.type], e.color, pjTypebyEnemyType[e.type], false);
                    if(c > 0) setTimeout(createProjectileTemp, 100, c-1, r);
                }
                createProjectileTemp(3, e.rotation);
            } else if (e.type == 1) {
                createProjectile(e.xPos, e.yPos, (e.rotation-9+360)%360, pjSpeedbyEnemyType[e.type], e.color, pjTypebyEnemyType[e.type], false);
                createProjectile(e.xPos, e.yPos, (e.rotation-6+360)%360, pjSpeedbyEnemyType[e.type], e.color, pjTypebyEnemyType[e.type], false);
                createProjectile(e.xPos, e.yPos, (e.rotation-3+360)%360, pjSpeedbyEnemyType[e.type], e.color, pjTypebyEnemyType[e.type], false);
                createProjectile(e.xPos, e.yPos, e.rotation, pjSpeedbyEnemyType[e.type], e.color, pjTypebyEnemyType[e.type], false);
                createProjectile(e.xPos, e.yPos, (e.rotation+3)%360, pjSpeedbyEnemyType[e.type], e.color, pjTypebyEnemyType[e.type], false);
                createProjectile(e.xPos, e.yPos, (e.rotation+6)%360, pjSpeedbyEnemyType[e.type], e.color, pjTypebyEnemyType[e.type], false);
                createProjectile(e.xPos, e.yPos, (e.rotation+9)%360, pjSpeedbyEnemyType[e.type], e.color, pjTypebyEnemyType[e.type], false);
            } else if (e.type == 3) {
                createProjectile(e.xPos, e.yPos, (e.rotation-50+360)%360, pjSpeedbyEnemyType[e.type], e.color, pjTypebyEnemyType[e.type], false);
                createProjectile(e.xPos, e.yPos, (e.rotation-25+360)%360, pjSpeedbyEnemyType[e.type], e.color, pjTypebyEnemyType[e.type], false);
                createProjectile(e.xPos, e.yPos, e.rotation, pjSpeedbyEnemyType[e.type], e.color, pjTypebyEnemyType[e.type], false);
                createProjectile(e.xPos, e.yPos, (e.rotation+25)%360, pjSpeedbyEnemyType[e.type], e.color, pjTypebyEnemyType[e.type], false);
                createProjectile(e.xPos, e.yPos, (e.rotation+50)%360, pjSpeedbyEnemyType[e.type], e.color, pjTypebyEnemyType[e.type], false);
            } else {
                createProjectile(e.xPos, e.yPos, 0, pjSpeedbyEnemyType[e.type], e.color, pjTypebyEnemyType[e.type]);
            }
            e.shotNum--;
        }
    });
}
const enemyObjectsUpdate = () => {
    enemyObjectsTimer();
    enemyObjectsShot();
    ObjectMove();
}



//// 그 외 업데이트 ////
const calcRote = (cx, cy, ex, ey) => {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    //if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
}
const createProjectile = (x=-1,y=-1,r=0, s=3, pjcolor="#f00", pjtype="flat", homing=true) => {
    if (x==-1 && y==-1) {
        let rand = Math.round(Math.random());
        if (rand) {
            x = w * Math.round(Math.random());
            y = Math.round(Math.random()*h);
        } else {
            y = h * Math.round(Math.random());
            x = Math.round(Math.random()*h);
        }
    }
    r = homing ? (calcRote(x,y,xPos,yPos) + r + 360)%360 : r;
    const projectile = {
        type: pjtype,
        // color: "#" + Math.floor(Math.random()*12+4).toString(16) + Math.floor(Math.random()*12+4).toString(16) + Math.floor(Math.random()*12+4).toString(16),
        color: pjcolor,
        xPos: x,
        yPos: y,
        rotation: r,
        speed: s
        // { type, color, xPos, yPos, rotation, speed }
    }
    projectiles.push(projectile);
    // console.log("Log: create projectile", projectile);

}
const createHomingProjectile = () => {
    createProjectile();
    if (state == 1) setTimeout(createHomingProjectile, 2000*createDelay);
}

const drawUpdate = () => {
    drawBack();
    drawPlayer();
    drawObject();
    drawProjectile();
    drawTimer();
}
const moveUpdate = () => {
    playerMove();
    projectileMove();
    // ObjectMove(); // moved to enemyObjectUpdate();
}

const gameUpdate = () => {
    timer += tick;
    
    moveUpdate();
    drawUpdate();
    enemyObjectsUpdate();

    if (state == 1) setTimeout(gameUpdate, tick);
}

const gameStart = () => {
    gameUpdate();
    createEnemy();
    createHomingProjectile();
}