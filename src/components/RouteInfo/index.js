import FareSummary from '../FareSummary';
import './index.css'
import { PiArrowsLeftRightBold } from "react-icons/pi";


const RouteInfo =()=>{
    return(
        <>
        <div className='route-container'>
            <div className='route-items'>
                <div>
            <h6>From</h6>
            <p className='from'>Rajiv Gandhi Internatinal Airport(HYD),Hyderabad,India</p>
            </div>
            <div className='verticale'>
            </div>
            <div style={{marginLeft:'10px'}}>
            <h6>Departure Date</h6>
            <p className='from'>Tue, Mar 12,2025</p>
            </div>
            </div>
            <div className='button-container'>
            <button className='button'><PiArrowsLeftRightBold />
        </button>
        
        <div style={{marginLeft:'25px'}} className='return-container'>
            <div style={{marginLeft:'10px'}}>
            <h6 >To</h6>
            <p className='from'>Mopa Airport India (GOX),Goa,India</p>
            </div>
            <div className='verticale'>
            </div>
            <div style={{marginLeft:'10px'}}>
                <div style={{marginLeft:'20px'}}>
            <h6>Departure Date</h6>
            <p className='from'>Tue, Mar 12,2025</p>
            </div>
            </div>
        </div>
            </div>

        </div>
        <div className='flight-summery'>
        <FareSummary/>
        </div>
        </>
    )
}

export default RouteInfo