import { Link, useLoaderData } from "react-router-dom";


const PortfolioDetails = () => {

    const career = useLoaderData()
    return (
        <>
           <div className="career_details mb-5">
           <h2 className="text-4xl font-bold">{career.title}</h2>
            <p>Salary: <strong className="font-bold">{career.salary}</strong></p>
           <p>Address: <address className="inline font-bold">{career.location}</address></p>
           </div>
          <span className="hover:underline"> <Link to='/portfolio'>Go Back</Link></span>
        </>
    );
}

export default PortfolioDetails;

export const careerDataLoader = async ({params})=>{
    const {id} = params

    const res = await fetch(`http://localhost:4000/Portfolio/${id}`)
    const data = res.json()
    try{
        console.log(data)
        return data
    }
    catch(err){
        console.log(err)
    }
}
