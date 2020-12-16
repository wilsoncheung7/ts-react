import React from 'react';
import Main from './Main';

// interface Props {
//     name: string;
//     name2:string;
// }

// const Mains: React.FC<Props> = (props) => {
//     return (
//         <h1>Hello,{props.name} {props.name2}</h1>
//     )
// }

const Mains:React.FC<any>=()=>{
    return(
        <Main/>
    )
}

export default Mains;