import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";

const CountryDropdown = () => {
    return (
        <>
            <Button className='countryDrop mb-5 headerr' >
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>India</span>
                </div>
                <span className='ml-auto nitin'><FaAngleDown /></span>
            </Button>
        </>
    );
}

export default CountryDropdown;
