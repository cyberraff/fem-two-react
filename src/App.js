import sedans from './images/icon-sedans.svg';
import suvs from './images/icon-suvs.svg';
import luxury from './images/icon-luxury.svg';
import './App.css';

function App() {
  return (
    <div className='main'>
      <div className='sedans , sections'>
        <img src={sedans} alt='sedans' />
        <h1>Sedans</h1>

        <p>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>

        <button className='btn'>Learn More</button>
      </div>

      <div className='suvs , sections'>
        <img src={suvs} alt='suvs' />

        <h1>SUVs</h1>
        <p>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>

        <button className='btn'>Learn More</button>
      </div>

      <div className='luxury , sections'>
        <img src={luxury} alt='luxury' />
        <h1>Luxury</h1>
        <p>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>

        <button className='btn'>Learn More</button>
      </div>
    </div>
  )
}

export default App
