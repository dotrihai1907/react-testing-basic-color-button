import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div>
      <button
        style={{ backgroundColor: buttonDisabled ? 'gray' : buttonColor, color: 'white' }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={buttonDisabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        id='disable-button'
        type='checkbox'
        defaultChecked={buttonDisabled}
        onChange={e => setButtonDisabled(e.target.checked)}
      />
      <label for="disable-button">Disable button</label>
    </div>
  );
}

export default App;
