import React from "react"

const Child2 = ({setSelectedOption}) => {
    
    function handleClick(){
        setSelectedOption("Option 2")
    }

  return (
    <div className="child2">
        <h1>Child Component 2</h1>
        <button onClick={handleClick}>Option 2</button>
    </div>
  )
}

export default Child2;