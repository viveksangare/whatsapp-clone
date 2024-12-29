import { useState } from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import { Box } from "@mui/material";
import ContactList from "./ContactList";

export default function Home() {
  const [activeElement, setActiveElement] = useState("profile");
  return (
    <div
      style={{ height: "100%", backgroundColor: "var(--container-background)" }}
    >
      <Box
        className="container"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row-reverse" },
          position: "relative",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            backgroundColor: "var(--contactlist-background)",
            color: "var(--text-primary)",
            padding: "1.2rem",
            height: { xs: "calc(100% - 60px)", sm: "100%" },
            width: { xs: "100%", sm: "calc(100% - 60px)" },
          }}
        >
          {activeElement === "contactList" && <ContactList />}
          {activeElement === "profile" && <Profile />}
        </Box>

        <Navbar
          activeElement={activeElement}
          setActiveElement={setActiveElement}
        />
      </Box>
    </div>
  );
}
