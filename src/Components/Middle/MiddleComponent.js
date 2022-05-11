import React from 'react'
import './MiddleComponent.scss'
import UMIcon from '../../UshiManiaAssets/UMIcon.png'

const MiddleComponent = () => {
  return (
    <div className = "middle-wrapper">
      <div className = "h14-wrapper">
        <h1>legendary beef from Japan</h1>
        <h4>Created by Ushinoya Samayotsu in 2918 BC, this beef was cherished by ancient Engytion Pharaohs</h4>
        <img src = {UMIcon} className = "logo1"/>
      </div>
      <div className = "middle-img"></div>
      {/* <div className = "logo-wrapper">
        
      </div> */}
    </div>
  )
}

export default MiddleComponent