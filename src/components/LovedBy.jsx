import { FaLongArrowAltRight } from "react-icons/fa";
import vmware from '../assets/vmware.png'
import docu from '../assets/docusign.png'
import frog from '../assets/frog.png'
import docuexpert from '../assets/docuexpert.png'
import vmexpert from '../assets/vmexpert.png'
import frogexpert from '../assets/frogexpert.png'



const LovedBy = () => {
    return (
        <div className="mt-20 container mx-auto">
            <div className="flex  flex-col items-center ">
                <h2 className="text-6xl font-bold mb-5">Loved By the world's best teams</h2>
                <button className="flex items-center border-2 border-[#4262FF] text-[#4262FF] hover:bg-[#4262FF]  hover:text-white transition-all duration-500 px-6 py-[16px] gap-3 rounded-[50px]"><span>See all customers stories</span> <FaLongArrowAltRight className="text-xl mt-1" /></button>
            </div>
            <div className="grid grid-cols-3 gap-20 mt-20">
                <div className="w-full flex flex-col justify-between">
                    <div>
                        <img className="h-[40px] mt-5 mb-10" src={vmware} alt="" />
                        <p className="text-xl text-[#504D74]">“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”</p>
                    </div>

                    <div className="flex mt-16 gap-3">
                        <img src={vmexpert} className="h-[60px] w-[60px] rounded-full" alt="" />
                        <div>
                            <p className="text-[18px] text-[#504D74]">Roxanne mostafe</p>
                            <p className="text-[18px] text-[#504D74]">Design Team lead at vmware</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-between">
                    <div>
                        <img className="h-[40px] mt-5 mb-10" src={docu} alt="" />
                        <p className="text-xl text-[#504D74]">“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”</p>
                    </div>
                    <div className="flex mt-16 gap-3">
                        <img src={docuexpert} className="h-[60px] w-[60px] rounded-full" alt="" />
                        <div>
                            <p className="text-[18px] text-[#504D74]">jane Ashley</p>
                            <p className="text-[18px] text-[#504D74]">Head design at docusign</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-between">
                    <div>
                        <img className="h-[40px] mt-5 mb-10" src={frog} alt="" />
                        <p className="text-xl text-[#504D74]">“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”</p>
                    </div>
                    <div className="flex mt-16 gap-3">
                        <img src={frogexpert} className="h-[60px] w-[60px] rounded-full" alt="" />
                        <div>
                            <p className="text-[18px] text-[#504D74]">Laura Baird</p>
                            <p className="text-[18px] text-[#504D74]">Associate design director at Frog</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LovedBy;