import { FaLongArrowAltRight } from 'react-icons/fa';
import img from '../assets/the way we work.png'
import img2 from '../assets/builtForWeWork.png'
import img3 from '../assets/builtforwork2.png'
import { FaCheck } from "react-icons/fa6";
import ruby from '../assets/ruby.png'
import xd from '../assets/xd.png'
import figma from '../assets/figma.png'
import n from '../assets/n.png'

const TheWayWeWork = () => {
    return (
        <div className=' transition-all duration-500'>
            <section>
                <div className='relative container mx-auto'>
                    <img className="w-full" src={img} alt="" />
                    <div className='absolute top-[40%] space-y-4 right-[8%]'>
                        <h2 className='text-4xl font-bold'>The way we work</h2>
                        <p className='text-xl'>How has our relationship with work changed?</p>
                        <button className="flex items-center trnasition-all duration-500 hover:bg-[#2B3E9E] bg-[#4262FF] text-white px-6 py-[16px] gap-3 rounded-[50px]"><span>View the report</span> <FaLongArrowAltRight className="text-xl mt-1" /></button>
                    </div>
                </div>
            </section>
            <section>
                <div className='container mx-auto mt-12 '>
                    <h2 className='text-6xl font-bold my-5'>
                        Built for the way we work
                    </h2>
                    <div className='flex gap-3 justify-between'>
                        <button className=' hover:bg-[#F1F3FD] px-3 py-2 text-[18px] font-medium border-2 border-[#F1F3FD] rounded-[50px]'>Brainstorming</button>
                        <button className='hover:bg-[#F1F3FD] px-3 py-2 text-[18px] font-medium border-2 border-[#F1F3FD] rounded-[50px]'>Diagramming</button>
                        <button className='hover:bg-[#F1F3FD] px-3 py-2 text-[18px] font-medium border-2 border-[#F1F3FD] rounded-[50px]'>Meeting and workshops</button>
                        <button className='hover:bg-[#F1F3FD] px-3 py-2 text-[18px] font-medium border-2 border-[#F1F3FD] rounded-[50px]'>Scrum events</button>
                        <button className='hover:bg-[#F1F3FD] px-3 py-2 text-[18px] font-medium border-2 border-[#F1F3FD] rounded-[50px]'>Mapping</button>
                        <button className='hover:bg-[#F1F3FD] px-3 py-2 text-[18px] font-medium border-2 border-[#F1F3FD] rounded-[50px]'>Research and planning</button>
                        <button className='hover:bg-[#F1F3FD] px-3 py-2 text-[18px] font-medium border-2 border-[#F1F3FD] rounded-l-[50px] border-r-0'>Strategic planning</button>
                    </div>
                </div>
                <div className='flex my-8 gap-10 container mx-auto'>
                    {/* <p>Build low-fi wireframes</p>
                    <p>Involve stakeholders in the design process</p>
                    <p>Run engaging design workshops</p> */}
                    <div>
                        <h2 className='text-2xl font-medium mb-5 mt-5'>BrainStorming</h2>
                        <p className='text-[18px] text-[#504D74]'>Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</p>
                        <div className="flex gap-2 text-[#4262FF]">
                            <a className=" text-xl font-medium" href="#">Learn more</a>
                            <FaLongArrowAltRight className="text-xl mt-2" />
                        </div>
                    </div>

                    <img className="w-[700px] h-[517px] flex-grow" src={img2} alt="" />

                </div>
            </section>
            <section>
                <div className='container mx-auto mt-12 '>
                    <h2 className='text-6xl font-bold my-5'>
                    Built for all kinds of teams
                    </h2>
                    <div className='flex gap-3'>
                        <button className=' hover:bg-[#F1F3FD] px-3 py-2 text-[18px] font-medium border-2 border-[#F1F3FD] rounded-[50px]'>Ux&Design</button>
                        <button className='hover:bg-[#F1F3FD] px-3 py-2 text-[18px] font-medium border-2 border-[#F1F3FD] rounded-[50px]'>Marketing</button>
                        <button className='hover:bg-[#F1F3FD] px-3 py-2 text-[18px] font-medium border-2 border-[#F1F3FD] rounded-[50px]'>Product management</button>
                        <button className='hover:bg-[#F1F3FD] px-3 py-2 text-[18px] font-medium border-2 border-[#F1F3FD] rounded-[50px]'>Engineering</button>
                        <button className='hover:bg-[#F1F3FD] px-3 py-2 text-[18px] font-medium border-2 border-[#F1F3FD] rounded-[50px]'>Consultants</button>
                        <button className='hover:bg-[#F1F3FD] px-3 py-2 text-[18px] font-medium border-2 border-[#F1F3FD] rounded-[50px]'>Agile coaches</button>
                        <button className='hover:bg-[#F1F3FD] px-3 py-2 text-[18px] font-medium border-2 border-[#F1F3FD] rounded-[50px]'>Sales</button>
                    </div>
                </div>
                <div className='flex justify-between my-8 gap-14 container mx-auto'>

                    <div>

                        <div className='flex gap-2 items-center mt-10'><FaCheck></FaCheck><p className='text-xl text-[#504D74] mb-2'>Build low-fi wireframes</p></div>
                       <div className='flex gap-2 items-center'> <FaCheck></FaCheck><p className='text-xl text-[#504D74] mb-2'>Involve stakeholders in the design process</p></div>
                       <div className='flex gap-2 items-center'> <FaCheck></FaCheck><p className='text-xl text-[#504D74]'>Run engaging design workshops</p></div>
                        <div className="flex gap-2 text-[#4262FF] mt-5">
                            <a className=" text-xl font-medium" href="#">Learn more</a>
                            <FaLongArrowAltRight className="text-xl mt-2" />
                        </div>
                        <h3 className='text-2xl text-[#504D74] mt-10 mb-4'>Integrate your favourite tools</h3>
                        <div className='flex gap-6 '>
                            <img src={ruby} className='h-[40px] w-[45px]' alt="" />
                            <img src={xd} className='h-[40px] w-[45px]' alt="" />
                            <img src={figma} className='h-[40px] w-[45px]' alt="" />
                            <img src={n} className='h-[40px] w-[45px]' alt="" />
                        </div>
                    </div>

                    <img className="w-[750px] h-[517px]" src={img3} alt="" />

                </div>
            </section>
        </div>

    );
};

export default TheWayWeWork;