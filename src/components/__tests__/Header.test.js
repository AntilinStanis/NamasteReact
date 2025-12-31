import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

describe("Header component", () => {

    test("Should load header component with login button", () => {
        render(<BrowserRouter><Provider store={appStore}><Header /></Provider></BrowserRouter>);

        // let button = screen.getByRole("button");
        let button = screen.getByRole("button", { name: "Login" });

        expect(button).toBeInTheDocument();

    });


    it("Should change the login button to logout on click", () => {
        render(<BrowserRouter><Provider store={appStore}><Header /></Provider></BrowserRouter>);

        const loginButton = screen.getByRole("button", { name: "Login" });
        fireEvent.click(loginButton);
        const logOutButton = screen.getByRole("button", { name: "Logout" });
        expect(logOutButton).toBeInTheDocument();

    });
})
