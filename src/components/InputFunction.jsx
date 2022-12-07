import React from 'react'

function InputFunction() {
    const [text, setText] = useState('none');

    const handleChange = (e) => {
        setText(e.target.value);
    }
  return (
    <div>
    <input id="custom-input" onChange={handleChange} />
    <p>Text: {text}</p>
  </div>
  )
}

export default InputFunction