
import facebook from '../../../assets/footerIcon/facebookIcon.png'
import instagram from '../../../assets/footerIcon/instaramIcon.jpg'
import twitter from '../../../assets/footerIcon/twitterIcon.jpg'

const Footer = () => {
    return (
        <footer className=" p-10 bg-base-200 flex justify-center">
            <div className='text-center'>
                <h1 className="text-4xl text-green-700 mb-4"><span className="text-red-500" >O</span>C<span className="text-red-500" >H</span></h1>
                <p>Chirkut Industries Ltd.<br />Providing reliable tech since 2020</p>
                <div className="flex justify-center gap-4 mt-4">
                    <img className='h-7 w-7' src={facebook} alt="" />
                    <img className='h-7 w-7' src={instagram} alt="" />
                    <img className='h-7 w-7' src={twitter} alt="" />
                </div>
            </div>
            {/* <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div> */}
            
        </footer>
    );
};

export default Footer;