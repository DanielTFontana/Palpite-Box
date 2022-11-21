import PageTitle from "./components/PageTitle";
import React, {useState} from "react";


const Pesquisa = () =>{
    
    const [form, setForm] = useState({
        Nome:'',
        Email: '',
        Whatsapp:'',
        Nota:0,
    })

const Notas = [0,1,2,3,4,5]
const [sucess, setSucess] = useState(false)
const [retorno, setRetorno] = useState({})

    const save = async() => {
        try{
            const response = await fetch('/api/save',{
                method:'POST',
                body:JSON.stringify(form)
            })
            const data = await response.json()
            setSucess(true)
            setRetorno(data)
        }catch(err){
        
        }
    }
   
    const onChange = evt =>{
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old, //pegar tudo que está no form antigo e copiar
            [key]: value
        }))
    }

    return (
    <div className="pt-6">
        <PageTitle title='Pesquisa'/>
    <h1 className="font-bold text-center my-4 text-2xl">Críticas e sugestões</h1>
        <p className='text-center mb-6'>
            Nosso restaurante está sempre em busca de atender melhor os nossos clientes.<br/>
            Por isso, sua opinião é muito importante para nós!
        </p>
        { !sucess && <div className="w-1/5 mx-auto">
            <label className="font-bold">                Nome:            </label>
            <input className="p-4 my-2 bg-blue-200 rounded" type='text' placeholder="Nome" onChange={onChange} name='Nome' value={form.Nome}/> <br></br>
            <label className="font-bold">                E-mail:            </label>
            <input className="p-4 my-2 bg-blue-200 rounded" type='text' placeholder="E-mail" onChange={onChange} name='Email' value={form.Email} />
            <label className="font-bold">                Whatsapp:            </label>
            <input className="p-4 my-2 bg-blue-200 rounded" type='text' placeholder="Whatsapp" onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
            <label className="font-bold">                Nota:            </label>
            <div className="flex "> 
            {Notas.map (nota => {
                return (                
                    <label className="w-1/6 p-4">
                        {nota}<input type='radio'name="Nota" onChange={onChange} value={nota}/>
                    </label>
                )
                })
            }
            </div>
            
            <button className="bg-blue-500 p-4 rounded-md font-bold shadow-lg hover:shadow mb-6" onClick={save}>Salvar</button>
        </div>}
        {sucess && <div className="w-1/5 mx-auto"> 
        <p className=" text-center mb-6 bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3">Agradecemos sua contribuição.</p>
        {
            retorno.showCoupon && <div className="text-center border border-green-500 p-4">
                Seu cupom: <br/>
                <span className="font-bold text-2xl">{retorno.Cupom}</span>
            </div>
        }
        {
            retorno.showCoupon && <div className="text-center border border-green-500 p-4 mt-4 mb-4">
                <span className="font-bold block ">{retorno.Promo}</span>
                <br/>
                <span className="italic">Apresente este código ao garçom para garantir seu desconto.</span>
            </div>
        }
        
         </div>}
        
    </div>
)}
export default Pesquisa