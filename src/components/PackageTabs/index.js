import SearchFilters from '../SearchFilters'
import './index.css'


const PackageTabs = ()=>{
    return(
        <>
                <div className='pakage-flights'>
                    <div>
                    <h5 className='pakage-line'>Package with Flights</h5>
                    <hr className='line' style={{color:'red'}}/>
                    </div>
                    <h5 style={{marginLeft:'5px'}}>Package without Flights</h5>
                </div>
                <SearchFilters/>
    
            </>
    )
}
export default PackageTabs