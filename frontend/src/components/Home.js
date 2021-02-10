import React from 'react'
import './Home.css'
import Product from './Product'
const Home = () => {
  return (
    <div className='home'>
      <img
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
        className='home__image'
      />
      <div className='home__row'>
        <Product
          id='1'
          title='The Lean Startup'
          price={11.56}
          rating={5}
          image='https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg'
        />
        <Product
          id='2'
          title='Alexa -  Product developed by R&D at amazon'
          price={9.56}
          rating={4}
          image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24'
        />
      </div>
      <div className='home__row'>
        <Product
          id='3'
          title='The Lean Startup'
          price={11.56}
          rating={5}
          image='https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg'
        />

        <Product
          id='4'
          title='Alexa -  Product developed by R&D at amazon'
          price={9.56}
          rating={4}
          image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24'
        />
        <Product
          id='5'
          title='The Amazon Watch'
          price={21.36}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='6'
          title='The lean Startup-ultimate versiom'
          price={30}
          rating={5}
          image='https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg'
        />
      </div>
    </div>
  )
}

export default Home
