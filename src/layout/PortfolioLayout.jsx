import { Outlet } from "react-router-dom";

const PortfolioLayout = () => {
    return (
        <>
                <h1>Portfolio</h1>

                <Outlet/>
        </>
    );
}

export default PortfolioLayout;
