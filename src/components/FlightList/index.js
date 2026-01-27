import FlightCard from '../FlightCard'
import './index.css'

const flights = [
  {
    id: 1,
    bgColor: '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5k6b_6aYg6rc2ikLX_76gijGx5HQO1_nf0g&s',
    departureTime: '12:05',
    duration: '01h 25m',
    arrivalTime: '13:30'
  },
  {
    id: 2,
    bgColor: '#c1e8f5',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ImLvFj7uGAEZ2xQ0cO6OgPVPdr6BLndTJg&s',
    departureTime: '11:30',
    duration: '13:25m',
    arrivalTime: '06:15'
  },
  {
    id: 3,
    bgColor: '',
    image: 'https://play-lh.googleusercontent.com/zG1e9Pdw27RYpUo_TpSZcD-zjCeShkN5pxwgy7L-e9hra170T_SpBzcUc5nsBu3gWQ',
    departureTime: '20:50',
    duration: '20:50',
    arrivalTime: '06:20'
  }
]

const FlightList = () => {
  return (
    <div className='Flight-list-container'>

      <div className='flights-wrapper'>

       
        <div className='flights'>
          <div className='flight-details'>
            <span className='outbound'>Outbound: Hyderabad (HYD)</span>
            <span className='outbound'>Departure</span>
            <span className='outbound'>Duration</span>
            <span className='outbound'>Arrival</span>
          </div>

          {flights.map(flight => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>

       
        <div className='flights'>
          <div className='flight-details'>
            <span className='outbound'>Outbound: Goa (GOI)</span>
            <span className='outbound'>Departure</span>
            <span className='outbound'>Duration</span>
            <span className='outbound'>Arrival</span>
          </div>

          {flights.map(flight => (
            <FlightCard key={`return-${flight.id}`} flight={flight} />
          ))}
        </div>

      </div>

    </div>
  )
}


export default FlightList
