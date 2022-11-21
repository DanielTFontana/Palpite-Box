import Link from "next/link";
import React from "react";
import PageTitle from "./components/PageTitle";


const Sobre = () =>{
    return (
        
    <div>
        <PageTitle title='Sobre'/>
    <h1>Sobre</h1>
        <div>
            <Link href='/'>
                <a>Início</a>
            </Link>
        </div>
    </div>
)}
export default Sobre