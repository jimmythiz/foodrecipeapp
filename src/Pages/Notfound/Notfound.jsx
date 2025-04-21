import { Link } from "react-router-dom";
const Notfound = () => {
    return ( 
        <>
        <h1>Error page not found go back home</h1>
        <Link to="/">Go home</Link>
        </>
     );
}
 
export default Notfound;