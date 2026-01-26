import SearchFilters from '../SearchFillters'
import './index.css'


const PakageTaps = ()=>{
    return(
        <div className='pakage-hearder-container'>
            <div className='package-background'>
                <div className='item-cards'>
                <button className='button-style'>Indian Holidays</button>
                <button className='button-style' style={{backgroundColor:'transparent',color:'black',fontWeight:'bold'}}>International Holidays</button>
                </div>
                <div className='pakage-flights'>
                    <div>
                    <h5 className='pakage-line'>Package with Flights</h5>
                    <hr className='line' style={{color:'red'}}/>
                    </div>
                    <h5 style={{marginLeft:'5px'}}>Package without Flights</h5>
                </div>
                <SearchFilters/>
            </div>
        </div>
    )
}
export default PakageTaps