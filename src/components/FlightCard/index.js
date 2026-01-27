import './index.css'
import { FaBagShopping } from "react-icons/fa6"
import { MdOutlineShoppingCartCheckout } from "react-icons/md"
import { RiMoneyRupeeCircleFill } from "react-icons/ri"
import { MdRuleFolder } from "react-icons/md"

const FlightCard = ({ flight }) => {
  if (!flight) return null

  const { image, departureTime, duration, arrivalTime, bgColor } = flight

  return (
    <div className='flight-card-container' style={{ backgroundColor: bgColor }}>

      <div className='flight-card'>
        <img src={image} alt="air-india" className='image' />

        <div>
          <p className='heading' style={{ fontSize: "15px" }}>Air India Express</p>
          <p className='flight-name'>IX 2879 TC</p>
        </div>

        <div className='time'>
          <p className='heading' style={{ fontSize: "15px" }}>{departureTime}</p>
          <p className='flight-name'>HYD</p>
        </div>

        <div className='duration'>
          <p className='heading' style={{ fontSize: "15px" }}>{duration}</p>
        </div>

        <div className='arrival'>
          <p className='heading' style={{ fontSize: "15px" }}>{arrivalTime}</p>
          <p className='flight-name'>GOI</p>
        </div>
      </div>

      <hr />

      <div className='amount-conatiner'>
        <div className='label-container'>
          <input type="checkbox" checked disabled />
          <p className='amount'>₹ 13,300.00</p>
          <button className='button'>SME</button>
        </div>

        <div className='label-container'>
          <input type="checkbox" disabled />
          <p className='amount'>₹ 105,300.00</p>
          <button className='button' style={{ backgroundColor: '#cef2ce' }}>
            Publish
          </button>
        </div>
      </div>

      <hr />

      <div className='bag-container'>
        <div className='bags-card'>
          <FaBagShopping />
          <p className='flight-name'>Hand Baggage - 7 Kg</p>
        </div>

        <div className='verticle'></div>

        <div className='bags-card'>
          <MdOutlineShoppingCartCheckout />
          <p className='flight-name'>Check-In Baggage</p>
        </div>

        <div className='verticle'></div>

        <div className='bags-card'>
          <RiMoneyRupeeCircleFill />
          <p className='flight-name'>Refundable</p>
        </div>

        <div className='verticle'></div>

        <div className='bags-card'>
          <MdRuleFolder />
          <p className='flight-name'>Rules</p>
        </div>
      </div>

    </div>
  )
}

export default FlightCard
