import React from 'react'
import {PropertiesContainer, PropertiesWrapper} from './Properties.elements'
import Gem from './Options/Gem/Gem'
import MetalColor from './Options/MetalColor/MetalColor'
import RingTexture from './Options/RingTexture/RingTexture'

function Properties({setCurrentGem, setCurrentRingColor, setCurrentRingTextures}) {
  return (
    <PropertiesContainer>
      <PropertiesWrapper>
        <h1>Custom Rings</h1>
        <Gem setCurrentGem={setCurrentGem}/>
        <MetalColor setCurrentRingColor={setCurrentRingColor}/>
        <RingTexture setCurrentRingTextures={setCurrentRingTextures}/>
      </PropertiesWrapper>
    </PropertiesContainer>
  )
}

export default Properties