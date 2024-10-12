import React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "lucide-react";
import Logo from "../Logo/Logo";
import SearchBar from "../Searchbar/Searchbar";
import Notifications from "../Notifications/Notifications";
import UserMenu from "../UserMenu/UserMenu";
import "./Header.scss";

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <AppBar position="fixed" className="header">
      <Toolbar className="toolbar">
        <div className="left-section">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onToggleSidebar}
            className="menu-button"
          >
            <MenuIcon />
          </IconButton>
          <Logo />
        </div>
        <div className="center-section">
          <SearchBar />
        </div>
        <div className="right-section">
          <Notifications />
          <div className="spacer-small" />
          <UserMenu />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
