import { LoadingButton } from "@mui/lab";
import React, { useState } from "react";

export default function CustomLoadingSubmitButton({ loading, text }) {
  return (
    <LoadingButton
      variant="contained"
      loading={loading}
      type="submit"
      sx={{
        backgroundColor: "var(--primary)",
        "&:hover": { backgroundColor: "var(--primary-dark)" },
      }}
    >
      {text}
    </LoadingButton>
  );
}
