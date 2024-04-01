import { useState } from 'react';

const Count = () => {
    const [ii, setIi] = useState(0);
    const [i, setI] = useState(0);
    
    const onclickDiv = () => {
        if (ii == 0) alert("나누기 0은 안대!!");
        else setI(i/ii);
    }

    return (
        <>
            <h1>{i}</h1>
            <input onChange={e => setIi(e.target.value)}></input>
            <button onClick={e => setI(i*1+ii*1)}>+</button>
            <button onClick={e => setI(i-ii)}>-</button>
            <button onClick={e => setI(i*ii)}>x</button>
            <button onClick={e => {
                if (ii == 0) alert("나누기 0은 멈춰!");
                else setI(i/ii);
            }}>/</button>
            <button onClick={onclickDiv}>÷</button>
        </>
    );
};
export default Count;