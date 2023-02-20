import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const newButtonColor = buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  return (
    <div>
      <button
        style={{ backgroundColor: buttonDisabled ? 'Gray' : buttonColor, color: 'White' }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={buttonDisabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
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
