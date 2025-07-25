
import logo from "../assets/logo.png";
import a from "../assets/instagram_icon.png";
import b from "../assets/pintester_icon.png";
import c from "../assets/whatsapp_icon.png";

function Footer() {
    return ( 
        <div className="border-t  border-gray-200 mt-20 h-30">
            <div className="container mx-auto px-10 py-5 flex flex-col items-center gap-3 ">

            <div className="flex items-center">
                <img src={logo} alt="" />
                <h2 className="text-2xl font-medium">Shopper</h2>
            </div>

                <div >
                    <ul className="flex gap-5">
                        <li><a>Company</a></li>
                        <li><a>Products</a></li>
                        <li><a>Offices</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>

                <div className="flex gap-5">
                    <img src={a} alt="" />
                    <img src={b} alt="" />
                    <img src={c} alt="" />
                </div>
                <hr className="text-gray-300 w-[80%]" />
                <p className="text-sm text-gray-700">Copyright @ 2025 - All rights Reserved .</p>
            </div>
        </div>
     );
}

export default Footer;