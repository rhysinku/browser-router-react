import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error)

    return (
        <>
            <div className="errorCon">
                <h1>404</h1>
                <span>Not Found</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione in ea voluptate cumque perspiciatis eum, illo rem mollitia velit possimus natus reiciendis sapiente, harum similique perferendis laboriosam soluta, ipsa consectetur?</p>
          

                <p>Return <Link index>Home</Link></p>
            </div>
        </>
    );
}

export default ErrorPage;
