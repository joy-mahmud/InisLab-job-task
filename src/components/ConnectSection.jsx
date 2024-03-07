import { FaLongArrowAltRight } from 'react-icons/fa';
import img from '../assets/connect.png'
const ConnectSection = () => {
    return (
        <div className='flex container gap-16 mx-auto justify-between items-center mt-20'>
            <div>
                <img className='w-[550px]' src={img} alt="" />
            </div>
            <div className='flex-1 space-y-3'>
                <h2 className='text-6xl font-bold'>Connect <br /> your tools, <br /> close your tabs</h2>
                <p className='text-xl'>Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
                <div className="flex gap-2 text-[#4262FF]">
                    <a className="underline text-xl font-medium" href="#">Learn more</a>
                    <FaLongArrowAltRight className="text-xl mt-2" />
                </div>
            </div>
        </div>
    );
};

export default ConnectSection;