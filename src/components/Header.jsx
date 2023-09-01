import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { FaBars, FaCircleUser, FaGlobe } from 'react-icons/fa6';
import SearchBar from './SearchBar';
const Header = () => {

    return (
        <div className="navbar bg-base-100 flex justify-between items-start">
            <div className="flex">
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div>
               <SearchBar></SearchBar>
            </div>
            <div className="flex-none gap-3">
                <h4 className='font-semibold'>Airbnb your home</h4>
                <div><FaGlobe className='w-7 h-7'></FaGlobe></div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className=" flex items-center gap-1 border-2 px-4 py-2 rounded-3xl">
                        <FaBars></FaBars>
                        <FaCircleUser className='w-7 h-7'></FaCircleUser>

                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                           <Link to='add-category'>Add Category</Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;