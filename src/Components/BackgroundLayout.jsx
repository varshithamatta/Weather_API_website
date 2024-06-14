import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'

import Clear from '../assets/background/clear.jpeg'
import Snow from '../assets/background/snow.jpeg'
import Fog from '../assets/background/foggy.webp'
import Storm from '../assets/background/stormy.jpg'
import Cloud from '../assets/background/cloudy.jpg'
import Rain from '../assets/background/rainy.jpg'
import Sun from '../assets/background/sunny.jpeg'

const BackgroundLayout = () => {

    const { weather } = useStateContext()
    const [image, setImage] = useState(Clear)
  
    useEffect(() => {
      if (weather.conditions) {
        let imageString = weather.conditions
        if (imageString.toLowerCase().includes('clear')) {
          setImage(Clear)
        } else if (imageString.toLowerCase().includes('cloud')) {
          setImage(Cloud)
        } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
          setImage(Rain)
        } else if (imageString.toLowerCase().includes('snow')) {
          setImage(Snow)
        } else if (imageString.toLowerCase().includes('fog')) {
          setImage(Fog)
        } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
          setImage(Storm)
        }
      }
    }, [weather])
  
    return (
      <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
    )
  }
  
  export default BackgroundLayout