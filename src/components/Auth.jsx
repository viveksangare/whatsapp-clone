import { useState } from "react";
import db from "../../backend/db";
import Home from "./Home";
import PropTypes from "prop-types";
import { Box, Button, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import CustomLoadingSubmitButton from "./CustomLoadingSubmitButton";
import HeaderWithLogo from "./HeaderWithLogo";

export default function Auth() {
  const { isLoading, user, error } = db.useAuth();
  if (isLoading) {
    return (
      <div
        style={{
          backgroundColor: "#fcf5eb",
          height: "100%",
        }}
      >
        <div
          className="container"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          <HeaderWithLogo />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            Loading...
          </div>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div
        style={{
          backgroundColor: "#fcf5eb",
          height: "100%",
        }}
      >
        <div
          className="container"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          <HeaderWithLogo />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            Uh oh! {error.message}
          </div>
        </div>
      </div>
    );
  }
  if (user) {
    return <Home />;
  }
  return <Login />;
}

export function Login() {
  const [sentEmail, setSentEmail] = useState("");

  return (
    <div
      style={{
        backgroundColor: "#fcf5eb",
        height: "100%",
      }}
    >
      <div
        className="container"
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <HeaderWithLogo />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              border: "solid 1px #000",
              borderRadius: "25px",
              maxWidth: "840px",
              backgroundColor: "#fff",
              padding: { xs: "20px", sm: "40px", md: "60px" },
            }}
          >
            {!sentEmail ? (
              <Email setSentEmail={setSentEmail} />
            ) : (
              <MagicCode sentEmail={sentEmail} setSentEmail={setSentEmail} />
            )}
          </Box>
        </div>
      </div>
    </div>
  );
}

// Add email component
function Email({ setSentEmail }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email) return;
    db.auth
      .sendMagicCode({ email })
      .then(() => {
        setSentEmail(email);
        enqueueSnackbar("OTP sent! Check your mailbox.", {
          variant: "success",
        });
      })
      .catch((err) => {
        enqueueSnackbar(`Uh oh : ${err.body?.message}`, {
          variant: "error",
        });
        setSentEmail("");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h2 style={{ marginBottom: "1rem", fontWeight: 500 }}>
        Log into WhatsApp Web
      </h2>
      <p style={{ marginBottom: "2rem" }}>
        Message privately with friends and family using WhatsApp on your
        browser.
      </p>
      <TextField
        required
        id="outlined-required"
        label="Enter your email"
        size="small"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          marginBottom: "1rem",
          color: "red",
          "& .MuiInputLabel-root": {
            color: "gray",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "var(--primary)",
          },

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "var(--primary)",
            },
            "&:hover fieldset": {
              borderColor: "var(--primary)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--primary)",
            },
          },
        }}
      />
      <CustomLoadingSubmitButton loading={loading} text="Send Code" />
    </form>
  );
}

//Add OTP component
function MagicCode({ sentEmail, setSentEmail }) {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    db.auth
      .signInWithMagicCode({ email: sentEmail, code })
      .then(() => {
        enqueueSnackbar("Logged in!", {
          variant: "success",
        });
      })
      .catch((err) => {
        enqueueSnackbar(`Uh oh : ${err.body?.message}`, {
          variant: "error",
        });
        setCode("");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h2 style={{ marginBottom: "1rem", fontWeight: 500 }}>Enter the OTP</h2>
      <p style={{ marginBottom: "2rem" }}>
        We sent you an email! What was the code?
      </p>
      <TextField
        required
        id="outlined-required"
        label="OTP"
        size="small"
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        sx={{
          marginBottom: "1rem",
          color: "red",
          "& .MuiInputLabel-root": {
            color: "gray",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "var(--primary)",
          },

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "var(--primary)",
            },
            "&:hover fieldset": {
              borderColor: "var(--primary)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--primary)",
            },
          },
        }}
      />
      <CustomLoadingSubmitButton loading={loading} text="Verify" />

      <Button
        variant="text"
        size="small"
        sx={{
          color: "var(--primary)",
          "&:hover": { color: "var(--primary-dark)" },
          marginTop: "1rem",
        }}
        onClick={() => {
          setSentEmail("");
        }}
      >
        Change E-mail address?
      </Button>
    </form>
  );
}

// Define PropTypes
Email.propTypes = {
  setSentEmail: PropTypes.func.isRequired,
};
MagicCode.propTypes = {
  sentEmail: PropTypes.string.isRequired,
  setSentEmail: PropTypes.func.isRequired,
};
