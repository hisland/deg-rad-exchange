import { useState } from 'react'
import './App.css'

// 角度转弧度
function DegToRad(degrees) {
  return degrees * (Math.PI / 180)
}

// 弧度转角度
function RadToDeg(radians) {
  return radians * (180 / Math.PI)
}
function utilCalc(width, height) {
  const tan_value = height / width
  const tan_rad = Math.atan(tan_value)
  const tan_deg = RadToDeg(tan_rad)
  return { tan_value, tan_rad, tan_deg }
}

function App() {
  const [obj, setObj] = useState(() => {
    const width = 280
    const height = 170
    return {
      height,
      width,
      ...utilCalc(width, height),
    }
  })
  function setWidth(ee) {
    const value = ee.target.value - 0
    if (value) {
      setObj({
        ...obj,
        width: value,
        ...utilCalc(value, obj.height),
      })
    }
  }
  function setHeight(ee) {
    const value = ee.target.value - 0
    if (value) {
      setObj({
        ...obj,
        height: value,
        ...utilCalc(obj.width, value),
      })
    }
  }

  return (
    <div>
      <div>
        <span>宽:</span>
        <input type="text" value={obj.width} onChange={setWidth} />
      </div>
      <div>
        <span>高:</span>
        <input type="text" value={obj.height} onChange={setHeight} />
      </div>
      <div>tan_value: {obj.tan_value}</div>
      <div>tan_rad: {obj.tan_rad}</div>
      <div>tan_deg: {obj.tan_deg}</div>
    </div>
  )
}

export default App
