import { render, screen } from "@testing-library/react";
import ResturantCard, { withPromotedLabel } from "../ResturantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"
describe("Resturant Card Component ", () => {

    it("Should render resturant card component with props", () => {
        render(<ResturantCard resData={MOCK_DATA} />);
        const name = screen.getByText("Hotel Malligai");
        // console.log(name);
        expect(name).toBeInTheDocument();
    });

    it("Should render resturant card component with promoted label", () => {
        const ResuturantPromotedCard = withPromotedLabel(ResturantCard);
        render(<ResuturantPromotedCard resData={MOCK_DATA} />);
        const promotedText = screen.getByText("Promoted");
        // console.log(promotedText);
        expect(promotedText).toBeInTheDocument();

    });


})