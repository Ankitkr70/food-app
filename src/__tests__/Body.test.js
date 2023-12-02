import {
  fireEvent,
  getAllByTestId,
  render,
  screen,
} from "@testing-library/react";
import MOCK_DATA from "../__mocks__/restaurantDataMock.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import Body from "../components/Body";
import "@testing-library/jest-dom";

//Mock fetch function that will simulate the fetch fucntion of browser
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
test("should search all the restaurants with pizza", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const resBeforeSearch = screen.getAllByTestId("res-item");
  expect(resBeforeSearch.length).toBe(20);

  const searchInput = screen.getByTestId("search-input");
  const searchBtn = screen.getByRole("button", { name: "Search" });
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);
  const resAfterSearch = screen.getAllByTestId("res-item");
  expect(resAfterSearch.length).toBe(2);
});

test("should display all the top rated restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const resBeforeSearch = screen.getAllByTestId("res-item");
  expect(resBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(searchBtn);
  const resAfterSearch = screen.getAllByTestId("res-item");
  expect(resAfterSearch.length).toBe(13);
});
