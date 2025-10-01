import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react";
import  RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../mocks/mockResListData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appstore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch =jest.fn(() => 
     Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA_NAME),
    })
);

it("should Load Restaurant Menu Component" , async () => {

    await act(async () => render(
    <BrowserRouter>
    <Provider store ={appStore}> 
        <Header />
        <RestaurantMenu />
        <Cart />
    </Provider>
    </BrowserRouter>    
    

));

   const accordianHeader = screen.getByText((content) =>
  content.includes("WEDNESDAY KFC EPIC DEALS")
);

    

    expect(screen.getAllByTestId("foodItems").length).toBe(6);

    expect(screen.getByText("Cart 🛒 (0)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", {name: "Add +"});
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart 🛒 (1)")).toBeInTheDocument();
    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart 🛒 (2)")).toBeInTheDocument();
     fireEvent.click(addBtns[2]);

     expect(screen.getAllByTestId("foodItems").length).toBe(9);
     fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

     expect(screen.getByText("foodItems")).toBe(3);

     expect(
        screen.getByText("Cart is empty . Add Items to the Cart !")
    ).toBeInTheDocument();







});