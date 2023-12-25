import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';


const Portfolio = () => {

    const careers = useLoaderData()

    return (
        <div>
            <h1>Protfolio</h1>

            <div className="port_box flex justify-evenly gap-x-1">

{
    careers.map(career =>(
        <section key={career.id} className='hover:underline'>
           <Link to='/' > <h2>{career.title}</h2></Link>
        </section>
    ))
}
          

            </div>


        </div>
    );
}

export default Portfolio;


export const portLoader = async () => {
    const res = await fetch('http://localhost:4000/Portfolio')
    const data = await res.json()
    try{
        console.log(data)
        return data
    }

    catch(err){
        console.error(err)
    }
}   