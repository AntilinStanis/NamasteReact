import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("Should load Contact Us component", () => {
   render(<Contact />);

   const heading = screen.getByRole("heading");
   // console.log(heading);
   //Assertion
   expect(heading).toBeInTheDocument();
});

test("Should load the button with submit text", () => {
   render(<Contact />);

   const buttonText = screen.getByText("Submit");
   // console.log(buttonText);
   //Assertion
   expect(buttonText).toBeInTheDocument();
});

test('Should load 3 input boxes', () => {
   render(<Contact />);

   const inputBoxes = screen.getAllByRole("textbox");
   console.log(inputBoxes);
   expect(inputBoxes.length).toBe(3);

});