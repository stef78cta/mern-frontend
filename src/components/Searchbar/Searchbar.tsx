import React from "react";
import { InputBase } from "@mui/material";
import { Search } from "lucide-react";
import "./Searchbar.scss";

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <div className="search-icon-wrapper">
        <Search size={20} className="search-icon" />
      </div>
      <InputBase
        placeholder="Caută..."
        classes={{
          root: "input-root",
          input: "input-input",
        }}
      />
    </div>
  );
};

export default SearchBar;
