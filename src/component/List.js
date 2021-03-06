import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HistoryIcon from "@mui/icons-material/History";
import PieChartIcon from "@mui/icons-material/PieChart";
import logo from "../img/logo.png";

export default function BasicList() {
  return (
    <Box sx={{ width: "100%", maxWidth: 360 }} image={logo}>
      <List image={logo}>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ bgcolor: "rgba(61, 90, 128, 0.2)" }}
            style={{ borderLeft: "4px solid #3D5A80" }}
          >
            <ListItemIcon
              sx={{ width: "11.88px", height: "16.62px" }}
              style={{ color: "#3D5A80" }}
            >
              <PieChartIcon
                sx={{
                  color: "#3D5A80",
                  width: "13.88px",
                  height: "18.62px",
                  top: "0.106rem",
                }}
              />
            </ListItemIcon>
            <Typography
              sx={{
                width: "85px",
                height: "20px",
                fontSize: "1rem",
                color: "#3D5A80",
                fontFamily: "Gilroy-SemiBold",
                ml: "-1.5rem",
              }}
              style={{
                fontSize: "1rem",
                lineHeight: "1.2rem",
                fontWeight: "bold",
              }}
            >
              Dashboard
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HistoryIcon
                sx={{
                  color: "#000",
                  width: "13.88px",
                  height: "18n.62px",
                  top: "0.106rem",
                }}
              />
            </ListItemIcon>
            <Typography
              sx={{
                width: "85px",
                height: "20px",
                fontSize: "1rem",
                color: "#000",
                fontFamily: "Gilroy-SemiBold",
                ml: "-1.5rem",
              }}
              style={{
                fontSize: "1rem",
                lineHeight: "1.2rem",
                fontWeight: "bold",
              }}
            >
              History
            </Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
