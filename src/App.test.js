import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color, and update when clicked", () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})

  // expect the background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent('Change to red');
});

test('initial conditions', () => {
  render(<App />)

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toBeEnabled();

  // check that the button starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('checkbox disables button on first click and enables on second click', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  const disableCheckbox = screen.getByRole('checkbox', {name: 'Disable button'});
  
  // first click
  fireEvent.click(disableCheckbox);
  expect(colorButton).toBeDisabled();

  // second click
  fireEvent.click(disableCheckbox);
  expect(colorButton).not.toBeDisabled();
})

test('disabled button has gray background and reverts to red', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  const disableCheckbox = screen.getByRole('checkbox', {name: 'Disable button'});

  // disable button
  fireEvent.click(disableCheckbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});

  // re-enable button
  fireEvent.click(disableCheckbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});

})

test('disabled button has gray background and reverts to blue', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  const disableCheckbox = screen.getByRole('checkbox', {name: 'Disable button'});

  // change button to blue
  fireEvent.click(colorButton);

  // disable button
  fireEvent.click(disableCheckbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});

  // re-enable button
  fireEvent.click(disableCheckbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
})
