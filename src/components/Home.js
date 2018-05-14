import React from 'react'
import Carousel from './home/Carousel'
import Featured from './home/Featured'
import ImageBox from './home/ImageBox'
import CountUp from './home/CountUp'
import GetInTouch from './home/GetInTouch'

const Home = () => (
  <div>
    <Carousel />
    <Featured />
    <ImageBox />
    <CountUp />
    <GetInTouch />
  </div>
)

export default Home