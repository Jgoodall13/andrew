import React from 'react'
import Cat from '../../images/featured.jpg'

const Featured = () => (
  <div>
    <h2 style={{color: '#31393f', textAlign: 'center', marginTop: '30px', fontSize: '48px'}}>Proving New Technology Works in Products</h2>
    <h2 style={{color: '#31393f', textAlign: 'center', margin: '60px 0px', fontSize: '32px'}}>FEATURED WORK</h2>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="featured-box">
            <img src={Cat} alt="" style={{height: '300px'}}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat libero earum laborum expedita error corrupti quae iusto amet, culpa beatae accusantium sunt id repellat pariatur, assumenda molestias sapiente vero adipisci.</p>
            <p><a href="" style={{color: '#2e9dba'}}>Read More</a></p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="featured-box">
          <img src={Cat} alt="" style={{height: '300px'}}/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta culpa quos reprehenderit voluptas totam sunt quisquam consequuntur, facere quasi quas! Omnis repellat suscipit explicabo consequatur enim amet quam non!</p>
          <p><a href="" style={{color: '#2e9dba'}}>Read More</a></p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="featured-box">
            <img src={Cat} alt="" style={{height: '300px'}}/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit perspiciatis velit maxime, reprehenderit assumenda beatae nostrum saepe nihil, dolore numquam iusto voluptatibus eaque omnis sunt aliquam, distinctio sequi asperiores? Fugiat.</p>
            <p><a href="" style={{color: '#2e9dba'}}>Read More</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Featured;