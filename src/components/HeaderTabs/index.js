import PackageTabs from '../PackageTabs'
import './index.css'

const HeaderTabs =()=>{
    return(
         <div className='pakage-hearder-container'>
            <div className='package-background'>
                <div className='item-cards'>
                <button className='button-style'>Indian Holidays</button>
                <button className='button-style' >International Holidays</button>
                </div>
                  <PackageTabs/>
            </div>
          
        </div>
    )
}

export default HeaderTabs