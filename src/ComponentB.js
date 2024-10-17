import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = () => {
  return (
    <div>
       <div className="box">

        <h1>
          <ComponentC/>
        </h1>
        
      </div>
    </div>
  )
}

export default ComponentB
