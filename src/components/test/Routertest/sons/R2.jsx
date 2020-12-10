import React from 'react';
import S2 from './S/S2'
function F1(props) {
    console.log(props)
    return <div>
        {String(true)}
    </div>
}
const R2 = () => {
    return (
        <div>
            这是R2
            <F1><p>this p</p>{(a) => { return <p>这是{a}</p> }}asfdasdf</F1>
            <S2 />
        </div>
    );
}

export default R2;
