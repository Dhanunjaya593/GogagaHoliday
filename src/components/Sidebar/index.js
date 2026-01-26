import PakageTaps from '../PakageTaps';
import './index.css' 
import { MdHome } from "react-icons/md";
import { MdFilterAlt } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCloud } from "react-icons/fa";
import { MdBorderOuter } from "react-icons/md";
import { IoCalculator } from "react-icons/io5";
import { BiSolidReport } from "react-icons/bi";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { GoShareAndroid } from "react-icons/go";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaIntercom } from "react-icons/fa";
import { AiTwotoneContacts } from "react-icons/ai";
import { MdOutlineApartment } from "react-icons/md";
import { MdLocationCity } from "react-icons/md";


const Sidebar = ()=>{
    return(
        <div className='container'>
        <div className='sidebar-container'>
            <h1 className='heading'>MENU</h1>
            <div className='dashboard-container'>
            <MdHome className='home'/>
            <p className='dashboard'>Dashboard</p>
            </div>
            <div className='arrow-container'>
            <div className='dashboard-container'>
            <MdFilterAlt  className='home'/>
            <p className='dashboard'>Leads</p>
            </div>
            <MdKeyboardArrowDown className='arrow' />
            </div>

            <div className='arrow-container'>
            <div className='dashboard-container'>
            <MdFilterAlt className='home'style={{marginLeft:'15px'}}/>
            <p className='dashboard'>Leads</p>
            </div>
            <p style={{marginTop:'10px',fontSize:'20px'}} className='numbers'>30434</p>
            </div>

            <div className='arrow-container'>
            <div className='dashboard-container'>
            <FaMapMarkerAlt  style={{color:'#969696'}} className='home'/>
            <p className='dashboard'>Leads</p>
            </div>
            <MdKeyboardArrowRight style={{marginTop:'20px'}} className='arrow' />
            </div>

             <div className='dashboard-container'>
            <FaCloud style={{color:'#969696'}} className='home'/>
            <p className='dashboard'>Google Reviews</p>
            </div> 

            <div className='arrow-container'>
            <div className='dashboard-container'>
            <MdBorderOuter   className='home'/>
            <p className='dashboard'>Vouchers</p>
            </div>
            <MdKeyboardArrowRight className='arrow' />
            </div>

            <div className='arrow-container'>
            <div className='dashboard-container'>
            <IoCalculator    className='home'/>
            <p className='dashboard'>Accounts</p>
            </div>
            <MdKeyboardArrowRight className='arrow' />
            </div>
            
            <div className='arrow-container'>
            <div className='dashboard-container'>
            <BiSolidReport     className='home'/>
            <p className='dashboard'>Reports</p>
            </div>
            <MdKeyboardArrowRight className='arrow' />
            </div> 

            <div className='dashboard-container'>
            <MdOutlineHeadsetMic  className='home'/>
            <p className='dashboard'>Customer Support</p>
            </div>

        <div className='dashboard-container'>
            
            <p style={{marginLeft:'0px',fontSize:'15px'}} className='dashboard'>USER CONTROL</p>
            </div>

            <div className='arrow-container'>
            <div className='dashboard-container'>
            <CiSettings      className='home'/>
            <p className='dashboard'>User Settings</p>
            </div>
            <MdKeyboardArrowRight className='arrow' />
            </div> 

            <div className='arrow-container'>
            <div className='dashboard-container'>
            <GoShareAndroid      className='home'/>
            <p className='dashboard'>Masters Settings</p>
            </div>
            <MdKeyboardArrowRight className='arrow' />
            </div> 

            <div className='arrow-container'>
            <div className='dashboard-container'>
            <RiContactsBook2Fill      className='home'/>
            <p className='dashboard'>HRM</p>
            </div>
            <MdKeyboardArrowRight className='arrow' />
            </div> 
            <div className='arrow-container'>
            <div className='dashboard-container'>
            <FaIntercom       className='home'/>
            <p className='dashboard'>Assets Management</p>
            </div>
            <MdKeyboardArrowRight className='arrow' />
            </div> 
            <div className='dashboard-container'>
            
            <p style={{marginLeft:'0px',fontSize:'15px'}} className='dashboard'>PARTICIPANTS</p>
            </div>

            <div className='dashboard-container'>
            <AiTwotoneContacts className='home'/>
            <p className='dashboard'>Itineray Customers</p>
            </div> 

            <div className='dashboard-container'>
            <MdOutlineApartment   className='home'/>
            <p className='dashboard'>Partners</p>
            </div>

            <div className='arrow-container'>
            <div className='dashboard-container'>
            <MdLocationCity        className='home'/>
            <p className='dashboard'>Suppliers</p>
            </div>
            <MdKeyboardArrowRight className='arrow' />
            </div> 

            <div className='dashboard-container'>
            
            <p style={{marginLeft:'0px',fontSize:'15px'}} className='dashboard'>MISCELLANEOUS</p>
            </div>

        </div> 
        <PakageTaps/>
        </div>
    )
}
export default Sidebar