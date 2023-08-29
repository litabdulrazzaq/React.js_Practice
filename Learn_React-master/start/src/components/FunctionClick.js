import React from 'react'

function FunctionClick() {

   const clickHandling = () => {
        console.log("Clicked")
    }

  return (
    <div>
      <button onClick={clickHandling}>Click The Button</button>
    </div>
  )
}

export default FunctionClick
