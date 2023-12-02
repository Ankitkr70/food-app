import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../__mocks__/RestauraantItemMock.json";
import RestaurantItem from "../components/RestaurantItem";
import "@testing-library/jest-dom";

test("should render Restaurant item with data", () => {
  render(<RestaurantItem resData={MOCK_DATA} />);

  const nameEl = screen.getByText("Pizza Hut");

  expect(nameEl).toBeInTheDocument();
});
