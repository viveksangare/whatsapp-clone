import { useState } from "react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import InlineEditableTextField from "./InlineEditableTextField";
import { Avatar, Divider } from "@mui/material";

export default function Profile() {
  const [value, setValue] = useState("USername");

  return (
    <div>
      <Header text="Profile" />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            display: "inline-block",
            position: "relative",
            padding: "0px 10px",
          }}
        >
          <Avatar
            alt="Profile Image"
            src="male-avatar.svg"
            sx={{
              width: "140px",
              height: "140px",
              backgroundColor: "var(--sidebar-background )",
            }}
          />
          <button
            style={{
              padding: "6px",
              borderRadius: "50%",
              backgroundColor: "var(--sidebar-background-light)",
              position: "absolute",
              bottom: "0px",
              right: 0,
              cursor: "pointer",
              outline: "none",
              border: "none",
            }}
          >
            <FontAwesomeIcon icon={faPenToSquare} size="md" />
          </button>
        </div>
      </div>

      <Divider
        sx={{
          backgroundColor: "var(--sidebar-background-light)",
          marginBottom: "2rem",
        }}
      />

      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <div>
          <FontAwesomeIcon icon={faAddressCard} size="lg" />
        </div>
        <div style={{ flexGrow: 1 }}>
          <InlineEditableTextField value={value} setValue={setValue} />
        </div>
      </div>
    </div>
  );
}
