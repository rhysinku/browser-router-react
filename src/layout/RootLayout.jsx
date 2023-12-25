import { NavLink, Outlet } from "react-router-dom";


const RootLayout = () => {
    return (
        <>
         <div >
         <header className="bg-priColor p-1">
                  <div className="flex justify-between items-center">
               <div> <NavLink to="/"><h1>Home</h1></NavLink></div>
                <nav className="nav-dsgn flex gap-x-5">
                <NavLink to="aboutus">About Us</NavLink>
                <NavLink to="portfolio">Portfolio</NavLink>
                <NavLink to="contactus">Contact Us</NavLink>
                </nav>
                </div>  
            </header>

            <main className="w-full px-5 py-3">
                <Outlet></Outlet>
            </main>
         </div>
        </>
    );
}

export default RootLayout;
