import RouteInfo from '../RouteInfo'
import './index.css'

import { FaAngleDown } from "react-icons/fa6"
import { IoSearchOutline } from "react-icons/io5"
import { CiStar, CiCircleInfo } from "react-icons/ci"

const SearchFilters = () => {
  return (
    <>
      
      <div className='search-container'>

        <div className='destination'>
          <p className='desination-style'>Destination</p>
          <p   className='location'>City</p>
        </div>

        <div className='trip-start-date'>
          <p className='desination-style'>Trip start date</p>
          <p className='location'>Tue, Mar 12</p>
        </div>

        <div className='Passengers'>
          <div className='arrow'>
            <div className='arrow-item'>
              <p className='desination-style'>No.of Passengers</p>
              <p className='location'>
                2 Adults, 2 Children
              </p>
            </div>
            <FaAngleDown style={{ marginRight: '5px' }} />
          </div>
        </div>

        <div className='search'>
          <button className='search-icon'>
            <IoSearchOutline />
          </button>
        </div>

      </div>

     
      <div className='hotal-container'>

        <div className='hotal-card'>
          <h5>Hotel Standard</h5>

          <div className='stars-contains'>
            <p>3</p>
            <CiStar />
          </div>

          <div className='stars-contains'>
            <p>4</p>
            <CiStar />
          </div>

          <div className='stars-contains' style={{ backgroundColor: 'black' }}>
            <p style={{ color: 'white' }}>5</p>
            <CiStar style={{ color: 'white' }} />
          </div>
        </div>

        <div className='food-container'>

          <div className='food-card'>
            <h5>Add Lunch</h5>
            <label className='label-checkbox'>
              <input type="checkbox" defaultChecked />
            </label>
          </div>

          <div className='food-card'>
            <h5>Add Dinner</h5>
            <label className='label-checkbox'>
              <input type="checkbox" />
            </label>
            <CiCircleInfo />
          </div>

        </div>

      </div>

      <RouteInfo />
    </>
  )
}

export default SearchFilters
