import { Box, IconButton } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useTheme } from "@mui/material/styles";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  const renderAuthButtons = () => {
    if (authUser && authUser.email) {
      const avatarText = authUser.email.charAt(0).toUpperCase();
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: "#4CAF50",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "8px",
            }}
          >
            <span style={{ color: "#fff", fontWeight: "bold" }}>
              {avatarText}
            </span>
          </div>
          <button
            style={{
              backgroundColor: "#4CAF50",
              color: "#fff",
              fontWeight: "bold",
              padding: "8px 16px",
              borderRadius: "4px",
              marginLeft: "16px",
            }}
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <>
          <Link to="/login">
            <button
              style={{
                backgroundColor: "#4CAF50",
                color: "#fff",
                fontWeight: "bold",
                padding: "8px 16px",
                borderRadius: "4px",
              }}
            >
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button
              style={{
                backgroundColor: "#4CAF50",
                color: "#fff",
                fontWeight: "bold",
                padding: "8px 16px",
                borderRadius: "4px",
                marginLeft: "16px",
              }}
            >
              Sign Up
            </button>
          </Link>
        </>
      );
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
      </Box>

      {/* AUTH BUTTONS */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {renderAuthButtons()}
      </div>
    </Box>
  );
};

export default Topbar;
