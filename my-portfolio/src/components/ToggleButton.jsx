import React from 'react'
import '../components/components-css/ToggleButton.css'

const ToggleButton = ({onClick}) => {
  return (
    <div className="toggle-wrapper">
  <div className="toggle transparent">
    <input id="transparent" type="checkbox" onChange={onClick}/>
    <label className="toggle-item" for="transparent"></label>
  </div>
</div>
  )
}

export default ToggleButton