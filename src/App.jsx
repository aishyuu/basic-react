import { useState } from 'react'

function App() {
  const [array, setArray] = useState(['Hello', 'Element'])

  function allLists(props) {
    return(
      props.map(element => 
        <p>{element}</p>
      )
    )
  }

  function handleClick() {
    //Figure this out
  }

  return (
    <div>
      <input type="text" name="item" id="item" />
      <button onClick={handleClick}>Add to Array</button>
      {allLists(array)}
    </div>
  )
}

export default App
