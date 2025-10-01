import { render , screen , fireEvent} from "@testing-library/react";
import { act } from "react"; 
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);


it("Should search Res List for burger text input ", async() => {

   await act( async () => render(
   <BrowserRouter>
   <Body />
   </BrowserRouter>)
   );
     
     const cardsBeforeSearch = screen.getAllByTestId("resCard");

     expect(cardsBeforeSearch.length).toBe(20);


      const searchBtn = screen.getByRole("button", {name:"Search"});

      const searchInput = screen.getByTestId("searchInput");

      fireEvent.change(searchInput, { target: {value: "burger"} });

      fireEvent.click(searchBtn);

      const cardsAfterSearch  = screen.getAllByTestId("resCard");

      expect(cardsAfterSearch.length).toBe(1);
});


it("Should filter Top Rated Restauarnt ", async() => {

   await act( async () => render(
   <BrowserRouter>
   <Body />
   </BrowserRouter>)
   );
     
     const cardsBeforeFilter = screen.getAllByTestId("resCard");

     expect(cardsBeforeFilter.length).toBe(20);

     const topRatedBtn = screen.getByRole("button" , {name: "Top Rated Restaurant"});

     fireEvent.click(topRatedBtn);


     const cardsAfterFilter = screen.getAllByTestId("resCard");
     expect(cardsAfterFilter.length).toBe(7);

      
      
});