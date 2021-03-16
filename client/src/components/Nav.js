import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import valhalla from '../components/images/valhalla.png'
import block from '../components/images/block.jpg'
import vrgaming from '../components/images/vrgaming.jpg'
import vrvr from '../components/images/vrvr.jpg'
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
function Nav() {
    return (
        <div className='car'>
          <div className='navnav'>
              <LoginModal />
              <RegisterModal /></div>
<Carousel >

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={vrvr}
      alt="First slide"
    />
    <Carousel.Caption >
    <img className='val'
      src={valhalla}
      alt=""
    />
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={block}
      alt="Second slide"
    />

    <Carousel.Caption>
    <img className='val'
      src={valhalla}
      alt=""
    />
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={vrgaming}
      alt="Third slide"
    />

    <Carousel.Caption>
    <img className='val'
      src={valhalla}
      alt=""
    />
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    )
}

export default Nav
