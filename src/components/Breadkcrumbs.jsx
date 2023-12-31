import {  NavLink, useLocation } from "react-router-dom";

const Breadkcrumbs = () => {

    const location = useLocation();

    let currentLink = ''

    const crumb = location.pathname.split('/').filter( crumb => crumb !== '')
    .map(
        crumb => {
            currentLink += `/${crumb}`
            return(
                <div className="crumbItem capitalize inline-block hover:underline" key={crumb}>
                    <NavLink to={currentLink}>{crumb}</NavLink>
                </div>
            )
        }
    )

    return (
        <>
            <div className="breadcrumbs_con m-5">
                {crumb}
            </div>
        </>
    );
}

export default Breadkcrumbs;
