import { NavLink, Outlet } from "react-router-dom";
import Breadkcrumbs from "../components/Breadkcrumbs";


const RootLayout = () => {
    return (
        <>
         <div >
         <header>
                  <div className="flex justify-between items-center bg-priColor p-2">
               <div> <NavLink to="/"><h1>Home</h1></NavLink></div>
                <nav className="nav-dsgn flex gap-x-5">
                <NavLink to="aboutus">About Us</NavLink>
                <NavLink to="portfolio">Portfolio</NavLink>
                <NavLink to="contactus">Contact Us</NavLink>
                </nav>
                </div>

                <Breadkcrumbs/>

            </header>

            <main className="w-full px-5 py-3">
                <Outlet></Outlet>
            </main>
         </div>
        </>
    );
}

export default RootLayout;
