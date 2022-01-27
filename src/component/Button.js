import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Stack";

const ButtonKeren = styled(Button)({
  width: "110px",
  height: "2rem",
  boxShadow: "none",
  textTransform: "none",
  fontSize: "0.75rem",
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: "0.875rem",
  backgroundColor: "#3d5a80",
  borderColor: "#3d5a80",
  borderRadius: "100px",
  boxShadow: "0px 2px 4px #3d5a80",
  fontFamily: ["Gilroy-Light", "sans-serif"].join(","),

  "&:hover": {
    backgroundColor: "#000",
    borderColor: "#000",
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf"
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
  }
});

export default function CustomizedButtons() {
  return (
    <Box sx={{ ml: 14, pt: 3 }}>
      <ButtonKeren variant="contained" disableRipple>
        Details
      </ButtonKeren>
    </Box>
  );
}
