import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 August to 30 August · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined"> Cancellation Flexibility</Button>
        <Button variant="outlined"> Type of place</Button>
        <Button variant="outlined"> Pricce</Button>
        <Button variant="outlined"> Rooms and beds</Button>
        <Button variant="outlined"> More filters</Button>
      </div>

      <SearchResult
        img="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        location="Private room in the center of London"
        title="Stay at home, Be Safe"
        description="1 guest | 1 bedroom | 1 bed | Wifi | Kitchen | Frige | Aircon"
        star="4.5"
        price={30}
        total="117"
      />
      <SearchResult
        img="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        location="Private room in the center of London"
        title="Stay at home, Be Safe"
        description="1 guest | 1 bedroom | 1 bed | Wifi | Kitchen | Frige | Aircon"
        star="4.5"
        price={30}
        total="117"
      />
      <SearchResult
        img="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        location="Private room in the center of London"
        title="Stay at home, Be Safe"
        description="1 guest | 1 bedroom | 1 bed | Wifi | Kitchen | Frige | Aircon"
        star="4.5"
        price={30}
        total="117"
      />
      <SearchResult
        img="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        location="Private room in the center of London"
        title="Stay at home, Be Safe"
        description="1 guest | 1 bedroom | 1 bed | Wifi | Kitchen | Frige | Aircon"
        star="4.5"
        price={30}
        total="117"
      />
      <SearchResult
        img="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        location="Private room in the center of London"
        title="Stay at home, Be Safe"
        description="1 guest | 1 bedroom | 1 bed | Wifi | Kitchen | Frige | Aircon"
        star="4.5"
        price={30}
        total="117"
      />
    </div>
  );
};

export default SearchPage;
