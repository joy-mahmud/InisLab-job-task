import { FaLongArrowAltRight } from "react-icons/fa";
import img from '../assets/wework.png'

const WeWork = () => {
    return (
        <div className="flex container mx-auto items-center gap-16">
            <div className="w-[45%] space-y-4">
                <h2 className="text-6xl font-bold">Work together, wherever you work</h2>
                <p className="text-xl font-regular">In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                <div className="flex gap-2 text-[#4262FF]">
                    <a className="underline text-xl font-medium" href="#">Learn more</a>
                    <FaLongArrowAltRight className="text-xl mt-2" />
                </div>
            </div>
            <div>
                <img className="w-[650px]" src={img} alt="" />
            </div>
        </div>
    );
};

export default WeWork;