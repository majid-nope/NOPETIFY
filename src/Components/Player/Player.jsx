import React from 'react'
import Body from './Components/Body'
import './Player.css'
import SliderBar from './Components/SliderBar'
import Footer from './Components/Footer'


function Player(details) {
    
    
    
    
    
    return (
        <div className='player'>
            <div className="player_body">
                <SliderBar/>
                <Body/>
            </div>
            <Footer/>
        </div>
    )
}

export default Player
