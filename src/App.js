import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor, color: 'white' }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={buttonDisabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type='checkbox'
        defaultChecked={buttonDisabled}
        onChange={e => setButtonDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
