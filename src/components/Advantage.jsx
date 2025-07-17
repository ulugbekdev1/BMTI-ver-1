import React from 'react'
import border from '../image/Border.png';
import link2 from '../image/Container (1).png'
import link3 from '../image/Container (2).png'
import link4 from '../image/Container (3).png'
import link5 from '../image/Container (4).png'
import link6 from '../image/Container (5).png'

const Advantage = () => {
  return (
    <div className=''>
     
      <div className="flex w-full">
  <a href="/page1" className="transform transition-transform duration-300 hover:scale-110">
    <img className="w-[304px]  shadow-md" src={link2} alt="Image 1" />
  </a>
  <a href="/page2" className="transform transition-transform duration-300 hover:scale-110">
    <img className="w-[304px]  shadow-md" src={link3} alt="Image 2" />
  </a>
  <a href="/page3" className="transform transition-transform duration-300 hover:scale-110">
    <img className="w-[304px]  shadow-md" src={link4} alt="Image 3" />
  </a>
  <a href="/page4" className="transform transition-transform duration-300 hover:scale-110">
    <img className="w-[304px]  shadow-md" src={link5} alt="Image 4" />
  </a>
  <a href="/page5" className="transform transition-transform duration-300 hover:scale-110">
    <img className="w-[304px]  shadow-md" src={link6} alt="Image 5" />
  </a>
</div>

    </div>
  )
}

export default Advantage
