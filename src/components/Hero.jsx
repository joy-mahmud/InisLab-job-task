/* eslint-disable react/no-unescaped-entities */
import { FaLongArrowAltRight } from "react-icons/fa";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import SwiperSlider from "./swiper/SwiperSlider";
import Svgs from "./Svgs";

const Hero = () => {
    return (
        <div className="container mx-auto mt-14">
            <div className=" flex items-center">
                <div className="flex-1 inline-block mr-[3%] ">
                    <h2 className="text-6xl font-bold">Take ideas from better to best</h2>
                    <p className="text-xl text-[#8E8CA5] my-3">Miro is your team's visual platform to connect, collaborate, and create — together. </p>


                    <div className="space-y-2 mb-12">
                        <input type="text" className="w-full border-2 mt-5 px-5 py-3 rounded-[50px] text-xl" placeholder="Enter your work email" name="" id="" />
                        <button className="flex items-center justify-center text-xl w-full bg-[#4262FF] text-white px-6 py-[16px] gap-3 rounded-[50px]"><span>Sign up free</span> <FaLongArrowAltRight className="text-xl mt-2" /></button>
                        <p className="text-[#8E8CA5]">
                            Collaborate with your team within minutes
                        </p>
                    </div>
                    <div className="p-2 rounded-md bg-[#F5F5F7] inline-block">
                        <div className="flex gap-10 px-3">
                            <Stack spacing={1}>
                                <Rating sx={{ fontSize: 25 }} name="size-large" defaultValue={4.6} precision={0.5} />
                                <p className="text-xl font-medium">Based on 5149+ reviews:</p>
                            </Stack>
                            <Svgs></Svgs>
                        </div>

                    </div>

                </div>
                <div className="w-[750px]">
                    <SwiperSlider></SwiperSlider>
                </div>
            </div>
        </div>
    );
};

export default Hero;