import { useState } from "react";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const InlineEditableTextField = ({ value, setValue }) => {
  const [isEditing, setIsEditing] = useState(false);

  // Exit edit mode on blur
  const handleBlur = () => {
    setIsEditing(false);
  };

  // Exit edit mode on Enter key
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {isEditing ? (
        <TextField
          variant="standard"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          fullWidth
          sx={{
            "& .MuiInputBase-input": {
              color: "var(--text-primary)",
            },
          }}
        />
      ) : (
        <span
          style={{
            cursor: "pointer",
            fontSize: "16px",
            display: "inline-block",
            lineHeight: "32px",
          }}
        >
          {value}
        </span>
      )}
      <div>
        <FontAwesomeIcon
          icon={faPen}
          size="xs"
          onClick={() => setIsEditing(true)}
        />
      </div>
    </div>
  );
};

InlineEditableTextField.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default InlineEditableTextField;
