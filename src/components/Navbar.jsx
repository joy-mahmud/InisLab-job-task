import logo from "../assets/logoMiro.png"
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoGlobeOutline } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
const Navbar = () => {

    return (
        <div className="py-5 border-b flex items-center justify-between px-10">
            <div className="flex items-center gap-4 ">
                <img className="" src={logo} alt="" />
                <ul className="flex items-center gap-3">
                    <li className="flex items-center justify-start text-xl font-medium"><span>Product</span><RiArrowDropDownLine className="text-4xl mt-2"/></li>
                    <li className="flex items-center justify-start text-xl font-medium"><span>Solutions</span><RiArrowDropDownLine className="text-4xl mt-2"/></li>
                    <li className="flex items-center justify-start text-xl font-medium"><span>Resources </span><RiArrowDropDownLine className="text-4xl mt-2"/></li>
                    <li className="text-xl font-medium">Enterprise</li>
                    <li className="text-xl font-medium">Pricing</li>
                </ul>
            </div>
            <div>
                <ul className="flex items-center gap-4 text-xl font-medium">
                    <li className="flex items-center gap-2"><IoGlobeOutline className="text-3xl" /><span>EN</span></li>
                    <li>Contact</li>
                    <li>Sales</li>
                    <li>Login</li>
                    <li><button className="flex items-center bg-[#4262FF] trnasition-all duration-500 hover:bg-[#2B3E9E] text-white px-6 py-[16px] gap-3 rounded-[50px]"><span>Sign up free</span> <FaLongArrowAltRight className="text-xl mt-1" /></button></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;