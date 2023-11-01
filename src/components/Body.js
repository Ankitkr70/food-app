import RestaurantItem from "./RestaurantItem";
import { resData } from "../data";
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="res-container">
        {resData.map((res) => (
          <RestaurantItem resData={res?.info} key={res?.info?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
