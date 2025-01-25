import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg'
const Header = () => {
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Welcome to <b>BuzzBuy</b></p>
                    </div>
                </div>
                <div className="header">
                    <div classname="container">
                        <div className="row">
                            <div className="logoWrapper col-sm-1">
                                <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;