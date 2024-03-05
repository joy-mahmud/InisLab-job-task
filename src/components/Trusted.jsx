
import walmart from '../assets/walmart.png'
import cisco from '../assets/cisco.png'
import volvo from '../assets/volvo.png'
import deloite from '../assets/deloite.png'
import okta from '../assets/okta.png'
const Trusted = () => {
    return (
        <div className='my-14'>
            <h3 className='text-center font-medium text-xl mb-10'>Trusted by 45M+ users</h3>
            <div className='flex justify-around items-center '>
                <img src={walmart} alt="" />
                <img src={cisco} alt="" />
                <img src={deloite} alt="" />
                <img src={volvo} alt="" />
                <img src={okta} alt="" />
            </div>
        </div>
    );
};

export default Trusted;