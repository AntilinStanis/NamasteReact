import { render ,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("Should load Contact Us component",()=>{
   render(<Contact />);

   const heading = screen.getByRole("heading");
   console.log(heading);
   //Assertion
   expect(heading).toBeInTheDocument();
});