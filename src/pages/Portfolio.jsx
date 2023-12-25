import { useLoaderData, Link } from 'react-router-dom';


const Portfolio = () => {

    const careers = useLoaderData()

    return (
        <>
        
            <h3 className='text-center'>Portfolio Card</h3>

            <div className="port_box flex justify-evenly gap-x-1 my-1">

{
    careers.map(career =>(
        <section key={career.id} className='hover:underline'>
           <Link to={career.id.toString()} > <h2>{career.title}</h2></Link>
        </section>
    ))
}
          

            </div>


        </>
    );
}

export default Portfolio;


export const portLoader = async () => {
    const res = await fetch('http://localhost:4000/Portfolio')
    const data = await res.json()
    try{
        return data
    }

    catch(err){
        console.error(err)
    }
}   