import React from 'react'
import {OptionMetalColorContainer, OptionMetalColorDetails} from './MetalColor.elements'

function MetalColor({setCurrentRingColor}) {

  const handleRingColor = (ringColor) =>{
    setCurrentRingColor({color: ringColor})
  }

  return (
    <OptionMetalColorContainer>
      <h2>Metal Color Options</h2>
      <OptionMetalColorDetails>
        <h4 onClick={()=>handleRingColor('#DAA520')}>Gold</h4>
        <h4 onClick={()=>handleRingColor('#ffffff')}>Silver</h4>
        <h4 onClick={()=>handleRingColor('#887333')}>Copper</h4>
      </OptionMetalColorDetails>
    </OptionMetalColorContainer>
  )
}

export default MetalColor