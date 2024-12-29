import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Avatar, Box, Chip, Divider, Typography } from "@mui/material";
import PropTypes from "prop-types";
// import Test from "./Test";

export default function ContactList() {
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

      <div
        style={{
          width: "100%",
        }}
      >
        <ContactCard
          username="John Doe"
          message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero officiis dolores enim aperiam, nulla illum fugit est, id veniam nesciunt eius quos itaque fuga voluptatum labore libero repudiandae, dolor fugiat."
          time="12:45 PM"
          avatarUrl="https://i.pravatar.cc/300"
        />
      </div>
    </div>
  );
}

const ContactCard = ({ username, message, time }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          cursor: "pointer",
          transition: "all .25s",
          "&:hover": {
            backgroundColor: "var(--sidebar-background)",
          },
        }}
      >
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          {/* Avatar Section */}
          <Avatar
            src="male-avatar.svg"
            alt={username}
            sx={{
              width: "50px",
              height: "50px",
              marginRight: "12px",
            }}
          />

          <div style={{ flex: 1, minWidth: 0 }}>
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
              width: "70px",
              flexDirection: "column",
              alignItems: "end",
              whiteSpace: "nowrap",
              color: "var(--text-secondary)",
              gap: "2px",
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
                backgroundColor: "var(--primary-dark)",
                color: "var(--contactlist-background)",
              }}
              size="small"
            />
          </Box>
        </div>
      </Box>
      <Divider
        sx={{
          backgroundColor: "var(--sidebar-background-light)",
        }}
      />
    </>
  );
};

ContactCard.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
