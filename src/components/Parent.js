import React,{useState} from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

const Parent = () => {

    const [selectedOption,setSelectedOption] = useState("");

  return (
    <div className='parent'>
        <h1>Parent Component</h1>
        <Child1
        setSelectedOption = {setSelectedOption}
        />
        <Child2
         setSelectedOption = {setSelectedOption}
        />
        <button>Selected Option: {selectedOption}</button>
        
    </div>
  )
}

export default Parent