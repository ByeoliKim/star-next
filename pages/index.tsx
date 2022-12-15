import Head from 'next/head'
import { useState } from "react";
import NavBar from '../components/NavBar';

export default function Main () {
    const [counter, setCounter] = useState(0);
    return (
        <>
        <NavBar />
        <div>
            헬로 넥스트~ {counter}
        </div>
        <button onClick={() => setCounter((prev) => prev+1)}>+</button>
        </>

    )
}