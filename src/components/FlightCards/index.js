import './index.css'
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { MdRuleFolder } from "react-icons/md";


const FlightCards = ()=>{
    return(
        <>
        <div className='flight-card-container'>
            <div className='flight-card'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5k6b_6aYg6rc2ikLX_76gijGx5HQO1_nf0g&s" alt="air-india" className='image'/>   
            <div>
            <p className='heading' style={{fontSize:"15px"}}>Air India Express</p>
            <p className='flight-name'>IX 2879 TC</p>
            </div>
            
            <div className='time'>
                <p className='heading' style={{fontSize:"15px"}}>12:05</p>
                <p className='flight-name'>HYD</p>
            </div>
            <div className='duration'>
            <p className='heading' style={{fontSize:"15px"}}>01h 25m</p>
            </div>
            <div className='arrival'>
            <p className='heading' style={{fontSize:"15px"}}>13:30</p>
            <p className='flight-name'>GOI</p>
            </div>
            </div>
            <hr/>
            <div className='amount-conatiner'>
            <div className='label-container'>
            <label className='checkbox'>
                <input  type="checkbox" checked disabled/>
            </label>
            <p className='amount'>₹ 13,300.00</p>
            <button className='button'>SME</button>
            </div>
            <div className='label-container'>
            <label className='checkbox'>
                <input  type="checkbox"  disabled/>
            </label>
            <p className='amount'>₹ 105,300.00</p>
            <button className='button' style={{backgroundColor:'#cef2ce'}}>Publish</button>
            </div>
            </div>
            <hr/>
            <div className='bag-container'>
            <div className='bags-card'>
            <FaBagShopping />
            <p className='flight-name'>Hand Baggage - 7 Kg</p>
            </div>
            <div className='verticle'></div> 
            <div className='bags-card'>
            <MdOutlineShoppingCartCheckout />

            <p className='flight-name'>Chick-In Baggage</p>
            </div>
            <div className='verticle'></div>
            <div className='bags-card'>
            <RiMoneyRupeeCircleFill  />
            <p className='flight-name'>Refundable</p>
            </div>
            <div className='verticle'></div>
            <div className='bags-card'>
            <MdRuleFolder  />
            <p className='flight-name'>Rules</p>
            </div>
            
            </div>
            
            </div>
            <div className='flight-card-container' style={{backgroundColor:'#c1e8f5'}}>
            
            <div className='flight-card'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ImLvFj7uGAEZ2xQ0cO6OgPVPdr6BLndTJg&s" alt="air-india" className='image'/>   
            <div>
            <p className='heading' style={{fontSize:"15px"}}>Air India Express</p>
            <p className='flight-name'>IX 2879 TC</p>
            </div>
            
            <div className='time'>
                <p className='heading' style={{fontSize:"15px"}}>11:30</p>
                <p className='flight-name'>HYD</p>
            </div>
            <div className='duration'>
            <p className='heading' style={{fontSize:"15px"}}>13:25m</p>
            </div>
            <div className='arrival'>
            <p className='heading' style={{fontSize:"15px"}}>06:15</p>
            <p className='flight-name'>GOI</p>
            </div>
            </div>
            <hr/>
            <div className='amount-conatiner'>
            <div className='label-container'>
            <label className='checkbox'>
                <input  type="checkbox" checked disabled/>
            </label>
            <p className='amount'>₹ 13,300.00</p>
            <button className='button'>SME</button>
            </div>
            <div className='label-container'>
            <label className='checkbox'>
                <input  type="checkbox"  disabled/>
            </label>
            <p className='amount'>₹ 105,300.00</p>
            <button className='button' style={{backgroundColor:'#cef2ce'}}>Publish</button>
            </div>
            </div>
            <hr/>
            <div className='bag-container'>
            <div className='bags-card'>
            <FaBagShopping />
            <p className='flight-name'>Hand Baggage - 7 Kg</p>
            </div>
            <div className='verticle'></div> 
            <div className='bags-card'>
            <MdOutlineShoppingCartCheckout />

            <p className='flight-name'>Chick-In Baggage</p>
            </div>
            <div className='verticle'></div>
            <div className='bags-card'>
            <RiMoneyRupeeCircleFill  />
            <p className='flight-name'>Refundable</p>
            </div>
            <div className='verticle'></div>
            <div className='bags-card'>
            <MdRuleFolder  />
            <p className='flight-name'>Rules</p>
            </div>
            
            </div>
            
            </div>
            <div className='flight-card-container'>
            
            <div className='flight-card'>
            <img src="https://play-lh.googleusercontent.com/zG1e9Pdw27RYpUo_TpSZcD-zjCeShkN5pxwgy7L-e9hra170T_SpBzcUc5nsBu3gWQ" alt="air-india" className='image'/>   
            <div>
            <p className='heading' style={{fontSize:"15px"}}>Air India Express</p>
            <p className='flight-name'>IX 2879 TC</p>
            </div>
            
            <div className='time'>
                <p className='heading' style={{fontSize:"15px"}}>20:50</p>
                <p className='flight-name'>HYD</p>
            </div>
            <div className='duration'>
            <p className='heading' style={{fontSize:"15px"}}>20:50</p>
            </div>
            <div className='arrival'>
            <p className='heading' style={{fontSize:"15px"}}>0620</p>
            <p className='flight-name'>GOI</p>
            </div>
            </div>
            <hr/>
            <div className='amount-conatiner'>
            <div className='label-container'>
            <label className='checkbox'>
                <input  type="checkbox" checked disabled/>
            </label>
            <p className='amount'>₹ 13,300.00</p>
            <button className='button'>SME</button>
            </div>
            <div className='label-container'>
            <label className='checkbox'>
                <input  type="checkbox"  disabled/>
            </label>
            <p className='amount'>₹ 105,300.00</p>
            <button className='button' style={{backgroundColor:'#cef2ce'}}>Publish</button>
            </div>
            </div>
            <hr/>
            <div className='bag-container'>
            <div className='bags-card'>
            <FaBagShopping />
            <p className='flight-name'>Hand Baggage - 7 Kg</p>
            </div>
            <div className='verticle'></div> 
            <div className='bags-card'>
            <MdOutlineShoppingCartCheckout />

            <p className='flight-name'>Chick-In Baggage</p>
            </div>
            <div className='verticle'></div>
            <div className='bags-card'>
            <RiMoneyRupeeCircleFill  />
            <p className='flight-name'>Refundable</p>
            </div>
            <div className='verticle'></div>
            <div className='bags-card'>
            <MdRuleFolder  />
            <p className='flight-name'>Rules</p>
            </div>
            
            </div>
            
            </div>
            </>
    )
}

export default FlightCards