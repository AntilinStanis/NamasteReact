import { act, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_RES_LIST from "../mocks/resListMock.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_RES_LIST);
        }
    })
});

describe("Search functionality Integration Tests", () => {

    it("Should load the body component", async () => {
        await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));
        const searchButton = screen.getByRole("button", { name: "Search" });
        expect(searchButton).toBeInTheDocument();
    })

});