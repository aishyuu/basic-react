import { useState } from 'react'

function App() {
  const [array, setArray] = useState(['Hello', 'Element'])
  const [textValue, setTextValue] = useState("");

  function allLists(props) {
    return(
      props.map(element => 
        <p>{element}</p>
      )
    )
  }

  function handleClick() {
    setArray([...array, textValue]);
    setTextValue("");
  }

  return (
    <div>
      <input type="text" name="item" id="item" value={textValue} onChange={e => setTextValue(e.target.value)}/>
      <button onClick={handleClick}>Add to Array</button>
      <ul>
        {array.map(element => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
