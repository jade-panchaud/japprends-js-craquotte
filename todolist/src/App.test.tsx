import React from 'react';
import { getByText, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import userEvent from "@testing-library/user-event";

test('shouldnt be able to click on add button',  () => {
  const { getByText } = render(<App/>)
  expect(getByText('Ajouter un TODO')).toBeDisabled()
})

test('should be able to click on add button',  () => {
  const { getByText, getByRole } = render(<App/>)
  userEvent.type(getByRole("textbox"), "Manger");
  expect(getByText('Ajouter un TODO')).not.toBeDisabled()
})