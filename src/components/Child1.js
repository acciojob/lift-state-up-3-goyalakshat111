import React from "react"

const Child1 = ({setSelectedOption}) => {

    function handleClick(){
        setSelectedOption("Option 1")
    }

  return (
    <div className="child1">
        <h1>Child Component 1</h1>
        <button onClick={handleClick}>Option 1</button>
    </div>
  )
}

export default Child1