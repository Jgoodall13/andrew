import React from 'react'
import Carousel from './home/Carousel'
import Featured from './home/Featured'
import ImageBox from './home/ImageBox'
import Count from './home/Count'
import GetInTouch from './home/GetInTouch'

const Home = () => (
  <div>
    <Carousel />
    <Featured />
    <ImageBox />
    <Count />
    <GetInTouch />
  </div>
)

export default Home