import FlightCards from '../FlightCards'
import './index.css' 


const FlighList = ()=>{
    return(
        <div className='Flight-list-container'>
        <div className='flights'>
        <div className='flight-details'>
            <span className='outbound'>Outbound:Hyderabad(HYD)</span>
           <span className='outbound'>Departure</span>
           <span className='outbound'>Duration</span>
           <span className='outbound'>Arrival</span>
        </div>
        <FlightCards/>
        </div>

        <div className='flights'>
        <div className='flight-details' style={{width:'430px'}}>
            <span className='outbound'>Outbound:Hyderabad(HYD)</span>
           <span className='outbound'>Departure</span>
           <span className='outbound'>Duration</span>
           <span className='outbound'>Arrival</span>
        </div>
        <FlightCards/>
        </div>
        
        </div>
    )
}
export default FlighList