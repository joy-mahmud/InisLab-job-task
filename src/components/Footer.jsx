
import facebook from '../assets/facebook.png'
import twiteer from '../assets/twiter.png'
import youtube from '../assets/youtube.png'

const Footer = () => {
    return (
        <div className="bg-[#02033B] px-24 py-16 text-white mt-20">
            <div className='flex gap-16 mb-16'>
                <div>
                    <h2 className="text-2xl font-bold">Scan.Detect.Remove.</h2>
                    <div className='flex mt-4 gap-8'>
                        <img src={twiteer} className='h-[36px] w-[36px] rounded-lg' alt="" />
                        <img src={facebook} className='h-[36px] w-[36px] rounded-lg' alt="" />
                        <img src={youtube} className='h-[36px] w-[36px] rounded-lg' alt="" />
                    </div>

                    <div className='my-12 space-x-10'>
                        <a className='underline' href="#">Privacy policy</a>
                        <a className='underline' href="#">Terms of service</a>
                    </div>

                    <p className='mb-4'>Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
                    <p>Designed & developed by <a className="underline" href="#"> Bigger Picture</a></p>
                </div>
                <div className='w-[188px]'>
                    <h2 className='text-5xl font-bold pb-5'>Miro.</h2>
                    <hr />
                    <div className='space-y-5 text-yellow-400 font-bold text-xl mt-16'>
                        <p>— iphone</p>
                        <p>— Android</p>
                        <p>— Help</p>
                        <p>— About</p>
                        <p>— Insights</p>
                    </div>

                </div>
                <div>
                    <div className='p-6 bg-yellow-400 rounded-3xl w-[436px] text-black space-y-5'>
                        <h2 className='text-2xl font-bold'>signup to our newsletter</h2>
                        <p className=''>Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                        <div className='flex '>
                            <input type="" className='px-3 flex-grow rounded-l-full' />
                            <button className='bg-[#02033B]  rounded-r-full px-5 text-white py-2'>Submit</button>
                        </div>
                    </div>


                </div>
            </div>
            <p className='w-[58%]'>Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
        </div>
    );
};

export default Footer;