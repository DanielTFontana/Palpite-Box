import React from "react";

const Footer = () =>{
    return (
        <div className="bg-gray-700 p-4">
            <div className="container mx-auto text-center font-bold text-white">
            Projeto desenvolvido por Daniel Tótola Fontana: 
            <a className="p-2 hover:underline" href=" https://www.linkedin.com/in/daniel-t%C3%B3tola-fontana-879364235/">Linkedin</a>/
            <a className="p-2 hover:underline" href="https://github.com/DanielTFontana/">Github</a>
                <div className="mt-2">
                    <img className="inline p-4 w-40" src="./logo_devpleno.png"/>
                    <img className="inline p-4 w-40" src="./logo_semana_fsm.png"/>
                </div>    
            </div>
        </div>
    )
}
export default Footer