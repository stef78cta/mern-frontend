import React from "react";
import { IconButton } from "@mui/material";
import { User } from "lucide-react";
import "./UserMenu.scss";

const UserMenu: React.FC = () => {
  return (
    <IconButton color="inherit" className="user-menu-icon">
      <User className="user-icon" />
    </IconButton>
  );
};

export default UserMenu;
