import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Portfolio, { portLoader } from "./pages/Portfolio"
import Home from "./pages/Home"
import Faq from "./pages/Faq"
import Page404 from "./pages/Page404"



function App() {

  const navRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={ <Home/>}  />
        <Route path="aboutus" element={ <AboutUs/>}  />
        <Route 
        loader={portLoader}
        path="portfolio" 
        element={ <Portfolio/>}  />
        <Route path="contactus" element={ <ContactUs/>} >
            <Route path="faq" element={<Faq/>}/>
        </Route>

        <Route path="*" element={<Page404/>}/>
        
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={navRouter} />
    </>
  )

}

export default App
