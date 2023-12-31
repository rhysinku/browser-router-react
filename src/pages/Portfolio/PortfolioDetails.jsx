import { Link, useLoaderData } from "react-router-dom";


const PortfolioDetails = () => {

    const career = useLoaderData()
    return (
        <>
         <div className="portdetails m-9 bg-priColor p-5">

         <div className="career_details mb-5">
           <h2 className="text-4xl font-bold">{career.title}</h2>
            <p>Salary: <strong className="font-bold">{career.salary}</strong></p>
           <p>Address: <span className="inline font-bold">{career.location}</span></p>
           </div>
          <span className="hover:underline mt-5"> <Link to='/portfolio'>Go Back</Link></span>

         </div>
        </>
    );
}

export default PortfolioDetails;

export const careerDataLoader = async ({params})=>{
    const {id} = params

    const res = await fetch(`http://localhost:4000/Portfolio/${id}`)
    const data = res.json()

        
       if(!res.ok){
        throw Error(`${id} does not exist `)
       }
       return data
    

}
