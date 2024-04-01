import { useState } from 'react';

const Count = () => {
    const [color, setColor] = useState("#f11");
    const [ii, setIi] = useState(0);
    const [i, setI] = useState(0);
    const [logs, setLogs] = useState([]);

    const rainbow = () => {
        let r = parseInt(color.slice(1,2), 16)*1;
        let g = parseInt(color.slice(2,3), 16)*1;
        let b = parseInt(color.slice(3,4), 16)*1;
        if (r === 15) {
            if (b>2) {
                b -= 2;
            } else if (g === 15) {
                r -= 2;
            } else {
                g += 2;
            }
        } else if (g === 15) {
            if (r>1) {
                r -= 2;
            } else if (b === 15) {
                g -= 2;
            } else {
                b += 2;
            }
        } else if (b === 15) {
            if (g>1) {
                g -= 2;
            } else if (r === 15) {
                b -= 2;
            } else {
                r += 2;
            }
        }
        setColor("#" + r.toString(16) + g.toString(16) + b.toString(16));
    };

    const onclickAdd = () => {
        rainbow();
        setLogs([...logs, `${i} + ${ii} = ${(Number)(i)+(Number)(ii)}`]);
        setI((Number)(i)+(Number)(ii));
    }
    const onclickDiff = () => {
        rainbow();
        setLogs([...logs, `${i} - ${ii} = ${i-ii}`]);
        setI((i-ii));
    }
    const onclickMulti = () => {
        rainbow();
        setLogs([...logs, `${i} * ${ii} = ${i*ii}`]);
        setI((i*ii));
    }
    const onclickDiv = () => {
        rainbow();
        if (ii === 0) {
            alert("나누기 0은 안대!!");
            return;
        }
        setLogs([...logs, `${i} / ${ii} = ${i/ii}`]);
        setI((i/ii));
    }
    const onclickReset = () => {
        rainbow();
        setI(0);
        setLogs([]);
    }

    // console.log(logs);

    return (
        <>
            <h1>{i}</h1>
            <input style={{
                    color,
                }} onChange={e => setIi(e.target.value)}></input>
            <button onClick={onclickAdd}>+</button>
            <button onClick={onclickDiff}>-</button>
            <button onClick={onclickMulti}>x</button>
            <button onClick={onclickDiv}>÷</button>
            <button onClick={onclickReset}>reset</button>

            {logs.map((e, i) => <p key={i}>{e}</p>)}
        </>
    );
};
export default Count;