import React from 'react';
import Link from "next/link";
import useSWR from 'swr';
import PageTitle from './components/PageTitle';

const fetcher = (...args) => fetch(...args).then(res =>res.json())

const Index = () =>{
    const {data, error} = useSWR('/api/get-promo',fetcher)//parâmetros (uma Url para buscar os dados, e como irá buscar)
    return(
     <div>
        <PageTitle title='Seja Bem Vindo'/>
        <p className='mt-6 text-center'>Nosso restaurante está sempre em busca de atender melhor os nossos clientes.<br/>
         Por isso, sua opinião é muito importante para nós!</p>
    <div className='text-center my-12 '> 
        <Link href='/pesquisa'>
        <a className='bg-blue-500 p-4 rounded-md font-bold shadow-lg hover:shadow '>
            Dar opinião ou sugestão
        </a>
        </Link>
    </div>
    {!data && <p>Carregando...</p>}
    {data && data.showCoupon &&
    <p className='mt-12 text-center'>
        {data.message}
    </p>
    }
    </div>
)}   
export default Index