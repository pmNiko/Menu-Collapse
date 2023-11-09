import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MenuIcon from "@mui/icons-material/Menu";

import "./Menu.css";
import { CustomMenu } from "..";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box
          className="headerMenu"
          p={1}
          width="300px"
          textAlign="end"
          role="presentation"
        >
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={() => setIsOpen(false)}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        </Box>
        <CustomMenu />
      </Drawer>
    </>
  );
};
