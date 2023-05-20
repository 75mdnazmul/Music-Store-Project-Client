import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp'
import { FaAddressBook, FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div>
                <footer className='pt-5 bg-light mt-5' >
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-lg-5 pb-2" data-aos="fade-right"
                                data-aos-duration="2000" >
                                <div className="footer-logo-part">
                                    <div className="footer-logo">
                                        <Link to="/"><img style={{ width: "100px", height: '100px' }} src={logo} alt="" />
                                        </Link>
                                    </div>
                                    <p className="fs-5 pt-3">
                                        A kids toy store is a store that specializes in selling toys and games designed specifically for children.
                                    </p>
                                    <div >
                                        <p >
                                            <FaAddressBook></FaAddressBook>
                                            <span className="ps-2"><span className='fw-bold'>Addresss :</span>  4003 Cherry Tree Drive</span>
                                        </p>
                                        <p>
                                            <FaEnvelope></FaEnvelope>
                                            <span className="ps-2"><span className='fw-bold'>Email :</span> music@store.com</span>
                                        </p>
                                        <p>
                                            <FaPhoneAlt></FaPhoneAlt>
                                            <span className="ps-2"><span className='fw-bold'>Phone :</span> (012) 345 6789</span>
                                        </p>


                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-2 pt-3" data-aos="fade-left" 
                    data-aos-duration="2000" >
                                <div className="">
                                    <div className="footer-links">
                                        <h3>Quick Links</h3>
                                        <ul className="pt-3 ">
                                            <li><a href="#">Help Center</a></li>
                                            <li><a href="#">Redeem Voucher</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">Policies & Rules</a></li>
                                            <li><a href="#">Check Offer List</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-2 pt-3" data-aos="fade-left" 
                    data-aos-duration="2000" >
                                <div className="">
                                    <div className="">
                                        <h3>Information</h3>
                                    </div>
                                    <div className="footer-links">
                                        <ul className="pt-3">
                                            <li><a href="#">Product Support</a></li>
                                            <li><a href="#">Checkout</a></li>
                                            <li><a href="#">License Policy</a></li>
                                            <li><a href="#">Affiliate</a></li>
                                            <li><a href="#">About Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 pt-3" data-aos="fade-left" 
                    data-aos-duration="2000" >
                                <div className="">
                                    <div className="">
                                        <h3>Follow Us On</h3>
                                    </div>
                                    <div className="footer-links">
                                        <ul className="pt-3">
                                            <li><a href="#"><FaFacebookF style={{ color: '#04B4AE' }}></FaFacebookF><span className='ps-2'>facebook</span></a></li>
                                            <li><a href="#"><FaTwitter style={{ color: '#04B4AE' }}></FaTwitter><span className='ps-2'>twitter</span></a></li>
                                            <li><a href="#"><FaInstagram style={{ color: '#04B4AE' }}></FaInstagram><span className='ps-2'>instagram</span></a></li>
                                            <li><a href="#"><FaYoutube style={{ color: '#04B4AE' }}></FaYoutube><span className='ps-2'>youtube</span></a></li>
                                            <li><a href="#"><FaPinterestP style={{ color: '#04B4AE' }}></FaPinterestP><span className='ps-2'>pinterest</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" text-center pt-4 pb-2" style={{ backgroundColor: '#04B4AE' }} data-aos="zoom-in" data-aos-duration="2000">
                        <p className="container text-white fw-bold">
                            Copyright &#169; 2023 Fresh Food. All rights reserved
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;