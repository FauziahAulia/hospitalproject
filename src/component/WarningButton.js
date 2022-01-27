import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Buttonwarning = styled(Button)({
  width: "3.5rem",
  height: "1.25rem",
  boxShadow: "none",
  textTransform: "none",
  fontSize: "0.5rem",
  padding: "0.375rem 0.75rem",
  border: "0.063rem solid",
  lineHeight: "0.563rem",
  backgroundColor: "#FF3A29",
  borderColor: "#FF3A29",
  borderRadius: "6.25rem",
  boxShadow: "0px 2px 4px #FF3A29",
  fontFamily: ["Gilroy-Light", "sans-serif"].join(","),

  "&:hover": {
    backgroundColor: "#000",
    borderColor: "#fff",
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf"
  },
  "&:focus": {
    boxShadow: "0 0 0 3rem rgba(0,123,255,.5)"
  }
});

export default function Buttonwutton() {
  return (
    <Buttonwarning variant="contained" disableRipple>
      High Risk
    </Buttonwarning>
  );
}
