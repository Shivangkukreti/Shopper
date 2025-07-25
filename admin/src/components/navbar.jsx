import { useNavigate } from "react-router-dom";
import nav from "../assets/nav-logo.svg";
import profile from "../assets/nav-profile.svg";

function Nav() {
    return ( 
        <div className="sticky bg-white top-0 shadow py-2">
            <div className="container mx-auto px-10 flex items-center justify-between">
            <div><img  className="h-10 max-sm:h-7" src={nav} alt="" /></div>
            <div><img className="h-10 max-sm:h-7" src={profile} alt="" /></div>
            </div>
        </div>
     );
}

export default Nav;