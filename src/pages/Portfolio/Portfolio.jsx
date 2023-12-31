import { useLoaderData, Link } from 'react-router-dom';


const Portfolio = () => {

    const careersInfo  = useLoaderData()

    if(!careersInfo){
        return(
            <>
                <p>Oh no!!!!</p>
            </>
        )
    }

    return (
        <>
        
            <h3 className='text-center'>Portfolio Card</h3>
            <div className="port_box flex justify-evenly gap-x-1 my-1">
        {
            careersInfo.map(career =>(
                <section key={career.id} className='hover:underline'>
                <Link to={career.id.toString()} > <h2>{career.title}</h2></Link>
                </section>
            ))
        }
            </div>
        </>
    )

}

export default Portfolio;


export const portLoader = async () => {
       try{
        const res = await fetch('http://localhost:4000/Portfolio')
        if(!res.ok){ throw Error('Inside the Try error') }

            const data = await res.json()
            return data
       }

       catch{
        throw Error('Fetching Error')
       }
}   