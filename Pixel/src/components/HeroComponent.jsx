import React from 'react'
import './HeroComponent.css'

const HeroComponent = () => {
  return (
    <div className='HeroContainer'>
        <div className='HeroHeading'>
            <h1 className='herotitle'>Research</h1>
            <h1 className='herotitle'>Conference</h1>
            <h1 className='herotitle'>2023</h1>
            <br></br>
            <p className='heropara'>This conference is for the open AI and Data community, and provides a forum to drive open source innovation in the AI, ML, DL, and Data domains by enabling collaboration and learning amongst the community.</p>
        </div>
        <div className='HeroPhoto'>
            <img src='HeroPhoto1.png' />
        </div>
    </div>
  )
}

export default HeroComponent