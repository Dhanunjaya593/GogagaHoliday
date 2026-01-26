import FlighList from '../FlightList';
import './index.css'
import { FaArrowRightLong } from "react-icons/fa6";


const FareSummary = ()=>{
    return(
        <div className='page-container'>
        <div className='fareSummery'>
            <div className='summary'>
            <h6 className='air-india'>Departure . Air India</h6>
            <div className='air-india-time'>
            <p className='air-india'>11:30</p> 
            <FaArrowRightLong color='white'style={{margin:'8px'}} />
            <p className='air-india'>18:55</p>
            </div>
            </div>
            <p style={{marginTop:'20px',marginLeft:'20px',color:"white"}}>₹105,300.00</p>
            <div className='vertical'></div>
            <div className='summary'>
            <h6 className='air-india'>Return . Air India</h6>
            <div className='air-india-time'>
            <p className='air-india'>00:50</p> 
            <FaArrowRightLong color='white'style={{margin:'8px'}} />
            <p className='air-india'>01:55</p>
            </div>
            </div>
            <p style={{marginTop:'20px',marginLeft:'20px',color:"white"}}>₹105,300.00</p>
            <div className='vertical'></div>
            <div className='summary'>
            <h6 className='air-india' style={{textAlign:'end',marginLeft:'35px'}}>for 2 adult, 2 children</h6>
            <p style={{marginTop:'2px',marginLeft:'20px',color:"white"}}><span>Total Round fare</span> ₹210,600.00</p>
            </div>
        </div>
            <FlighList/>
            </div>
    )
}
export default FareSummary