import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

const Test2 = ({ name, message, time, avatarUrl }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid #e0e0e0",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#f9f9f9",
        },
      }}
    >
      {/* Avatar Section */}
      <Avatar
        src={avatarUrl}
        alt={name}
        sx={{
          width: 50,
          height: 50,
          marginRight: 2,
        }}
      />

      {/* Contact Details */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Contact Name */}
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </Typography>

        {/* Last Message */}
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {message}
        </Typography>
      </Box>

      {/* Time */}
      <Typography
        variant="caption"
        sx={{
          color: "text.secondary",
          marginLeft: "auto",
        }}
      >
        {time}
      </Typography>
    </Box>
  );
};

export default Test2;
