import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo 2.jpg';
import CountryDropdown from '../CountryDropdown';
// import { Button } from 'bootstrap';
import { FaRegUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox';



const Header = () => {
    return (
        <>
           {/* Hello this is Hritik  */}
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Welcome to <b>BuzzBuy</b></p>
                    </div>
                </div>
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-1 mb-5  ">
                                <Link to={'/'}><img src={Logo} alt='Logo 2' /></Link>
                            </div>
                            <div className='col-sm-10 d-flex align-items-center part2'>
                                <CountryDropdown />

                                <SearchBox />

                                <div className='part3 d-flex align-items-center ml-auto  mb-5 ml-5'>
                                    <button className='circle'><FaRegUser /></button>
                                    <div className='price'>$3.29</div>
                                    <div className='ml-auto cartTab'>
                                        <div class="float-left">
                                            <button className='circle ml-2'><IoBagOutline /></button>
                                        </div>


                                    </div>



                                </div>


                            </div>



                        </div>
                    </div>
                </header>

               


            </div>


        </>
    )
}

export default Header;