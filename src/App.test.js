import { fireEvent, render, screen } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

test("button has correct initial color, and update when clicked", () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to MidnightBlue'
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'})

  // expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be MidnightBlue
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});

  // expect the button text to be 'Change to MediumVioletRed'
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />)

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  expect(colorButton).toBeEnabled();

  // check that the button starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('checkbox disables button on first click and enables on second click', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const disableCheckbox = screen.getByRole('checkbox', {name: 'Disable button'});
  
  // first click
  fireEvent.click(disableCheckbox);
  expect(colorButton).toBeDisabled();

  // second click
  fireEvent.click(disableCheckbox);
  expect(colorButton).toBeEnabled();
})

test('disabled button has gray background and reverts to MediumVioletRed', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const disableCheckbox = screen.getByRole('checkbox', {name: 'Disable button'});

  // disable button
  fireEvent.click(disableCheckbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'Gray'});

  // re-enable button
  fireEvent.click(disableCheckbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});

})

test('disabled button has gray background and reverts to MidnightBlue', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const disableCheckbox = screen.getByRole('checkbox', {name: 'Disable button'});

  // change button to MidnightBlue
  fireEvent.click(colorButton);

  // disable button
  fireEvent.click(disableCheckbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'Gray'});

  // re-enable button
  fireEvent.click(disableCheckbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});
})

describe('space before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letter', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
})
