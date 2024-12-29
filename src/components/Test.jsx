import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";
import {
  faMagnifyingGlass,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Avatar, Box, Chip, Divider, Typography } from "@mui/material";

const Test = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // search submit handler
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header text="Chats">
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "inherit",
            padding: "8px",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faUserPlus} size="lg" />
        </button>
      </Header>

      {/* search functionality */}
      <div style={{ marginBottom: "1rem" }}>
        <form onSubmit={submitHandler} style={{ position: "relative" }}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{
              color: "var(--sidebar-icon)",
              position: "absolute",
              left: "20px",
              top: "10px",
            }}
          />
          <input
            type="text"
            name="searchUser"
            id="searchUser"
            placeholder="Search Contact"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              height: "35px",
              outline: "none",
              border: "none",
              backgroundColor: "var(--sidebar-background)",
              borderRadius: "10px",
              padding: "0 35px 0 60px",
              color: "var(--sidebar-icon)",
            }}
          />
          {searchQuery && (
            <FontAwesomeIcon
              icon={faXmark}
              style={{
                color: "var(--sidebar-icon)",
                position: "absolute",
                right: "12px",
                top: "10px",
                cursor: "pointer",
              }}
              onClick={() => {
                setSearchQuery("");
              }}
            />
          )}
        </form>
      </div>

      <TestCard
        username="John Doe"
        message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero officiis dolores enim aperiam, nulla illum fugit est, id veniam nesciunt eius quos itaque fuga voluptatum labore libero repudiandae, dolor fugiat."
        time="12:45 PM"
        avatarUrl="https://i.pravatar.cc/300"
      />
    </div>
  );
};

export default Test;

const TestCard = ({ username, message, time }) => {
  return (
    <>
      <div
        className="flex-parent"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          margin: "2px",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "var(--sidebar-background-light)",
          },
        }}
      >
        <div className="flex-parent has-child">
          {/* Avatar Section */}
          <Avatar
            src="male-avatar.svg"
            alt={username}
            sx={{
              width: 50,
              height: 50,
              marginRight: 2,
            }}
          />

          <div className="flex-child long-and-truncated-with-child-corrected">
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {username}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "var(--text-secondary)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {message}
            </Typography>
          </div>

          {/* Time and Count */}
          <Box
            sx={{
              display: "flex",
              minWidth: 70,
              flexDirection: "column",
              alignItems: "end",
              whiteSpace: "nowrap",
              color: "var(--text-secondary)",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                width: "100%",
                textAlign: "right",
              }}
            >
              {time}
            </Typography>
            <Chip
              label="2"
              sx={{
                backgroundColor: "var(--container-background)",
                color: "inherit",
              }}
              size="small"
            />
          </Box>
        </div>
      </div>
      <Divider
        sx={{
          backgroundColor: "var(--sidebar-background-light)",
        }}
      />
    </>
  );
};
