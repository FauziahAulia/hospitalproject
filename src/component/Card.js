import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DetailButton from "./Button";
import jamesrobinson from "../img/jamesrobinson.jpeg";
import Button from "@mui/material/Button";
import WarningButton from "./WarningButton";

export default function MediaControlCard() {
  return (
    <Card
      sx={{
        display: "flex",
        width: "474px",
        borderRadius: "1.25rem",
        boxShadow: " 0px 2px 4px grey",
      }}
      //   style={{ padding: "0.813rem 0.875rem" }}
    >
      <Box sx={{ pt: 1, pl: 1, pb: 1 }}>
        <CardMedia
          component="img"
          sx={{
            width: "12rem",
            height: "8.75rem",
            left: "0.813rem",
            top: "0.625rem",
            borderRadius: "0.625rem",
            align: "center",
          }}
          style={{ margin: "0.5rem 0.625rem" }}
          image={jamesrobinson}
          alt="Landing page"
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          style={{
            alignItems: "right",
            fontFamily: ["Gilroy-Light", "sans-serif"].join(","),
          }}
          sx={{ pl: 22, pt: 2 }}
        >
          <WarningButton />
        </Box>
        <CardContent sx={{ mt: -5 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontSize: "1rem", color: "000", pt: "0.056rem" }}
            style={{ fontWeight: "bold", lineHeight: "1.188rem" }}
          >
            James Robinson
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "0.75rem", fontStyle: "italic", pt: "0.056rem" }}
          >
            25 Years Old
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.75rem",
              color: "#3D5A80",
              fontWeight: "bold",
              pt: "0.056rem",
            }}
          >
            Cancer
          </Typography>
        </CardContent>

        <Box sx={{ display: "flex", alignItems: "center", pl: 2, pt: 2 }}>
          <DetailButton />
        </Box>
      </Box>
    </Card>
  );
}
