import RouteInfo from '../RouteInfo';
import './index.css'
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";




const SearchFilters = ()=>{
    return(
        <>
        <div className='search-container'>
        <div className='destination'>
            <p className='desination-style'>Destination <br/><p>City</p>
            </p>
            </div>
            <div className='trip-start-date'>
            <p className='desination-style'>Trip start date <br/><p style={{color:'black',fontWeight:'bold'}}>Tue,Mar 12</p>
            </p>
            </div>
            <div className='Passengers'>
            <div className='arrow'>
            <p className='desination-style'>No.of Passengers<p style={{color:'black',fontWeight:'bold'}}>2 Adults, 2 Children</p>
            </p>
            <FaAngleDown style={{marginRight:'5px'}}/>
            </div>
            </div>
            <div className='search'>
            <button className='search-icon'><IoSearchOutline  /> </button>       
            </div>
        </div>
        <div className='hotal-container'>
            <div className='hotal-card'>
            <h5 style={{font:'20px'}}>Hotel Standard</h5>
            <div className='stars-contains'>
            <p style={{color:'black',textAlign:'center',fontFamily:'roboto'}}>3</p>
            <CiStar />
    
            </div>
            <div className='stars-contains'>
            <p style={{color:'black',textAlign:'center',fontFamily:'roboto'}}>4</p>
            <CiStar />
            </div>
            <div className='stars-contains' style={{backgroundColor:'black'}}>
            <p style={{color:'white',textAlign:'center',fontFamily:'roboto'}}>5</p>
            <CiStar style={{color:'white'}} />
            </div>
            </div>
            <div className='food-container'>
                <div className='food-card'>
                <h5>Add Lunch</h5>
                <label className='label-checkbox'>
                    <input className='input' type="checkbox" checked disabled ></input>
                </label>
            </div>
            <div className='food-container'>
                <h5>Add Dinner</h5>
                <label className='label-checkbox'>
                    <input type="checkbox">
                    </input>
                </label>
                <CiCircleInfo />

            </div>
            </div>
        </div>
        <RouteInfo/>
        </>
        
        
    )
}

export default SearchFilters