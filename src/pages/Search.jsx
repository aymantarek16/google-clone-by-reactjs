import React, { useEffect, useRef, useState } from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hidebuttons }) => {
  const [{}, dispatch] = useStateValue();

  const inputRef = useRef();

  // local storage for term to keep search history
  const initialState = JSON.parse(localStorage.getItem("input"));
  const [input, setInput] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("input", JSON.stringify(input));
  }, [input]);

  // focus on input when page loads
  useEffect(() => {
    inputRef.current.focus();
  });

  let route = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    route("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="searchicon" />
        <input
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef}
        />
        <MicIcon />
      </div>

      {!hidebuttons ? (
        <div className="search__buttons">
          <Button type="submit" variant="outlined" onClick={handleSearch}>
            Google Search
          </Button>

          <Button type="submit" variant="outlined">
            I am feeling lucky
          </Button>
        </div>
      ) : (
        <div className="search__buttons" style={{ display: "none" }}>
          <Button type="submit" variant="outlined" onClick={handleSearch}>
            Google Search
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
