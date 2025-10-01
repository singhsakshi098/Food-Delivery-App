import { render , screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
    // beforeAll(() => {
    //     console.log("Before All");
    // });

    // beforEach(() => {
    //     console.log("Before Each");
    // });

    //  afterAll(() => {
    //     console.log("after All");
    // });

    //  afterEach(() => {
    //     console.log("after Each");
    // });


test("Should load contact us Component" , () => {

    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();

});

});