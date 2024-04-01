import { useState } from 'react';
// 무조건 하나의 태그만 내보낼 수 있음. 감싼건 되지만 여러개는 안됨
const Box = ({width, height}) => {
    const [backgroundColor, setColor] = useState("#f00");
    // const [width, setw] = useState(100);
    // const [height, seth] = useState(100);
    const px = "px";

        // console.log("box");

    const rainbow = () => {
        let r = parseInt(backgroundColor.slice(1,2), 16)*1;
        let g = parseInt(backgroundColor.slice(2,3), 16)*1;
        let b = parseInt(backgroundColor.slice(3,4), 16)*1;
        console.log(backgroundColor, r, g, b);
        if (r == 15) {
            if (b>0) {
                b -= 1;
            } else if (g == 15) {
                r -= 1;
            } else {
                g += 1;
            }
        } else if (g == 15) {
            if (r>0) {
                r -= 1;
            } else if (b == 15) {
                g -= 1;
            } else {
                b += 1;
            }
        } else if (b == 15) {
            if (g>0) {
                g -= 1;
            } else if (r == 15) {
                b -= 1;
            } else {
                r += 1;
            }
        }
        setColor("#" + r.toString(16) + g.toString(16) + b.toString(16));
    };

    return (
        <>
            {/* <input type='color' onChange={e=>(setColor(e.target.value))}></input> */}
            {/* <input type='range' onChange={e=>(setw(e.target.value+px))}></input>
            <input type='number' onChange={e=>(seth(e.target.value+px))}></input> */}
            <input type='button' onClick={rainbow}></input>
            <div
                style={{
                    width,
                    height,
                    backgroundColor
                }}>
            </div>
        </>
    );
};
//default는 파일전체를 꺼냄, 없으면 객체로 꺼내고 받아야함 export {Box} / <Box.Box>
export default Box;