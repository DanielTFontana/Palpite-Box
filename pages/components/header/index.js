import React from "react";
import styles from './styles.module.css'
import Link from "next/link";

const Header = () =>{
    return (
<React.Fragment>
    <div className={styles.wrapper} > 
    
        <div className="place-content-center flex flex-row">
            
                <img className="w-32" src="./interrogation-removebg-preview.png" />
            <Link href='/'>
                <a> <h1 className="text-5xl font-extrabold text-center">Palpite <br></br>Box </h1> </a>
            </Link>
                <img className="w-32" src="./ligth-removebg-preview.png"/>            
        </div>
    </div>
    <div className="bg-gray-400 text-center p-4">
            <Link href='/contato'>
                <a className="px-2 hover:underline">Contato</a>
            </Link>
            <Link href='/sobre'>
                <a className="px-2 hover:underline">Sobre</a>
            </Link>
            <Link href={'/pesquisa'}>
            <a className="px-2 hover:underline">Pesquisa</a>
            </Link>        
    </div>
</React.Fragment>
    )
}
export default Header