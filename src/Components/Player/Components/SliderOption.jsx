import React from 'react'
import './SliderOption.css'

function SliderOption({title,Icon}) {
    const style = {
        fontSize: 'small',
        color: '#8d8d8d',
        height: "38vh"
        
    }
    return (
        <div className='SliderOption'>
            {Icon && <Icon className="SliderOption__icon"/>}
            {Icon?<h5>{title}</h5>:<p style={style}>{title}</p>}
        </div>
    )
}

export default SliderOption
