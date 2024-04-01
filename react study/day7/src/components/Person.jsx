import { useState } from 'react';

const Person = ({age}) => {
    const [name, setName] = useState("집돌이");
    // const age = 99999;
    
    // console.log("person");

    return (
        <>
            <p style={{margin:'0px'}}>이름은 뭐에요?</p>
            <input onChange={e=>(setName(e.target.value))}></input>
            <p style={{margin:'0px'}}>이름: {name}</p> 
            <p style={{margin:'0px'}}>나이: {age}</p>
        </>
    );
};
export {Person};