import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function MediaControlCard() {
  return (
    <Card
      sx={{
        display: "flex",
        width: "21.438rem",
        borderRadius: "0.429rem",
        bgcolor: "rgba(61, 90, 128, 0.5)",
        boxShadow: " 0px 2px 4px grey",
      }}
      style={{ padding: "1.609rem 1.609rem" }}
    >
      <Box sx={{ pt: 1, pl: 1, pb: 1 }}>
        <FolderIcon
          fontSize="large"
          sx={{
            color: "#3D5A80",
            width: "90px",
            height: "63.2px",
            left: "25.74px",
            top: "25.74px",
            borderRadius: "0.625rem",
            align: "center",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ mt: 5 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontSize: "20.59px", color: "000" }}
            style={{ fontWeight: "bold", lineHeight: "1.188rem" }}
          >
            Current Patient
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "15.44px",
              color: "#fff",
              fontWeight: "bold",
              pt: 3,
            }}
          >
            5 patient
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 22,
              fontSize: "15.44px",
              color: "#3D5A80",
              fontWeight: "bold",
              pt: -90,
            }}
          >
            5%
          </Typography>
          <h3>Arrow Up</h3>
          <ArrowDropUpIcon
            sx={{ color: "#000000", width: "10rem", height: "10rem" }}
          />
        </CardContent>
      </Box>
    </Card>
  );
}
