import { NavLink, Outlet } from "react-router-dom";


const ContactUs = () => {
    return (
        <>
            <h1 className="color-pColor">Contact Us</h1>
            <nav className="nav-dsgn my-10">
                <NavLink to="faq">Faq</NavLink>
            </nav>

            <div>
                <Outlet/>
            </div>
            
        </>
    );
}

export default ContactUs;
