import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return ( 
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
     );
}
 
export default Layout;