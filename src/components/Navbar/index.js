import './index.css'
import { AiOutlineMenu } from "react-icons/ai";
import { BsGrid1X2 } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
const Navbar = ()=>{
    return(
        <nav className='nav-bar-container'>
            <div className='left-side-container'>
            <h1 className='logo'>
                <span className='green'>g</span>
                <span className='green'>o</span>
                <span className='yellow'>g</span>
                <span className='green'>a</span>
                <span className='yellow'>g</span>
                <span className='green'>a</span>
                </h1>
                <AiOutlineMenu className='lines' />
                <div className='vertical-line'></div>
                </div> 
                <div className='right-side-container'>
            
                    <BsGrid1X2 className='BsGrid' />
                    <div className='fixlter-box'>
                        <FaFilter color="green"className='filter' />
                    </div>
                    <div className='map-container'>
                        <FaMapMarkerAlt color='purple' fontSize="22px" />
                    </div>
                    <div className='notification'>
                        <GoBell className='bell' />
                    </div>
                     <div className='vertical-line'style={{height:'50px',marginLeft:'0px'}}></div>
                    <div className='profile'>
                        <img src="https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png" alt="profile" className='image'/>
                        <h2 style={{fontFamily:'sans-serif',fontSize:'20px',color:'#7d7c7c'}}>GrishKumar</h2> 
                        <FaAngleDown />
                    </div>
                    <div className='vertical-line' style={{height:"50px",marginRight:'15px',marginLeft:'0px'}}></div>
                </div>
        </nav>
    )
}
export default Navbar