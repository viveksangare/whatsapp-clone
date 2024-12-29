import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  // faPenToSquare,
  faUser,
  // faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

export default function Navbar({ activeElement, setActiveElement }) {
  return (
    <Box
      sx={{
        backgroundColor: "var(--sidebar-background)",
        display: "flex",
        width: { xs: "100%", sm: "60px" },
        height: { xs: "60px", sm: "100%" },
        flexDirection: { xs: "row", sm: "column" },
        justifyContent: "space-between",
        // padding: { xs: "0 10px", sm: "10px 0" },
        // position: "fixed",
        // top: { xs: 0, sm: "auto" },
        // bottom: { xs: 0, sm: "auto" },
        // left: { xs: "auto", sm: 0 },
        // right: { xs: "auto", sm: 0 },
      }}
      className="navbar"
    >
      <Box
        style={{
          display: "flex",
          gap: "8px",
          flexDirection: { xs: "row", sm: "column" },
        }}
      >
        <button
          className={activeElement === "contactList" ? "active-navbar-ele" : ""}
          onClick={() => setActiveElement("contactList")}
        >
          <FontAwesomeIcon
            icon={faMessage}
            size="2x"
            style={{ color: "var(--sidebar-icon)" }}
          />
        </button>
        {/* <button>
          <FontAwesomeIcon
            icon={faPenToSquare}
            size="2x"
            style={{ color: "var(--sidebar-icon)" }}
          />
        </button> */}
      </Box>
      <Box>
        {/* <button>
          <FontAwesomeIcon
            icon={faGear}
            size="2x"
            style={{ color: "var(--sidebar-icon)" }}
          />
        </button> */}
        <button
          className={activeElement === "profile" ? "active-navbar-ele" : ""}
          onClick={() => setActiveElement("profile")}
        >
          <FontAwesomeIcon
            icon={faUser}
            size="2x"
            style={{ color: "var(--sidebar-icon)" }}
          />
        </button>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  activeElement: PropTypes.string.isRequired,
  setActiveElement: PropTypes.func.isRequired,
};
