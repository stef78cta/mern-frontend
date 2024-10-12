import React from "react";
import { IconButton, Badge } from "@mui/material";
import { Bell } from "lucide-react";
import "./Notifications.scss";

const Notifications: React.FC = () => {
  return (
    <IconButton color="inherit" className="notifications-icon">
      <Badge badgeContent={4} color="error">
        <Bell className="bell-icon" />
      </Badge>
    </IconButton>
  );
};

export default Notifications;
