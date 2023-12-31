import { Link, useRouteError } from "react-router-dom";

const PortfolioError = () => {
    const error = useRouteError()
    return (
        <>
        <div className="error_con">
        <h1 className="text-9xl mb-5" >404 Error</h1>
         <p className="italic"><strong className="font-bold">Info:</strong> {error.message}</p>

       <div className="mt-20 hover:underline"> <Link to='/'>Back to homepage</Link></div>
        </div>
        </>
    );
}

export default PortfolioError;
