import { FaLongArrowAltRight } from "react-icons/fa";


const Collaborate = () => {
    return (
        <div className="container mx-auto mb-14">
            <div>
                <p className="bg-yellow-300 rounded-md transform ml-[63%] rotate-12 text-center font-medium inline-block px-2">Your idea starts here</p>
                <div className="flex flex-col justify-center items-center ">

                    <h2 className="text-6xl font-bold">Collaborate without </h2>
                    <h2 className="text-6xl font-bold">constraints</h2>
                </div>
                <div className="flex gap-16 mt-10">
                    <div>
                        <h2 className="text-2xl font-semibold mb-5">Easy integrations</h2>
                        <p className="text-xl font-medium text-[#8E8CA5]">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See <a href="" className=" text-[#7189FF]">ourpricing plans</a> for more features.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-5">Security first</h2>
                        <p className="text-xl font-medium text-[#8E8CA5]">Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our <a href="" className=" text-[#7189FF]">MarketPlans</a></p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-5"> Free forever</h2>
                        <p className="text-xl font-medium text-[#8E8CA5]">We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more
                            at our <a href="" className=" text-[#7189FF]">Trust center</a></p>
                    </div>
                </div>
                <div className="flex justify-center mt-12">
                    <button className="flex items-center bg-[#4262FF] text-white px-8 py-[16px] gap-3 rounded-[50px]"><span>Sign up free</span> <FaLongArrowAltRight className="text-xl mt-1" /></button>
                </div>
            </div>
        </div>
    );
};

export default Collaborate;