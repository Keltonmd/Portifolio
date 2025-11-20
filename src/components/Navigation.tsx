import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

const navItems: [string, string][] = [
  ["Skills", "skills"],
  ["História", "history"],
  ["Projetos", "projects"],
  ["Contato", "contact"],
];

interface NavigationProps {
  parentToChild: {
    mode: "light" | "dark";
  };
  modeChange: () => void;
}

function Navigation({ parentToChild, modeChange }: NavigationProps) {
  const { mode } = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        setScrolled(window.scrollY > navbar.clientHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <p className="mobile-menu-top">
        <ListIcon /> Menu
      </p>
      <Divider />

      <List>
        {navItems.map(([label, id]) => (
          <ListItem key={label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} onClick={() => scrollToSection(id)}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
      >
        <Toolbar
          className="navigation-bar"
          sx={{
            display: "flex !important",
            flexDirection: "row !important",
            alignItems: "center !important",
            width: "100% !important",
            justifyContent: "space-between !important",
            px: 2,
          }}
        >
          {/* ESQUERDA — menu mobile + nav desktop */}
          <Box
            sx={{
              display: "flex !important",
              alignItems: "center !important",
              justifyContent: "flex-start !important",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 1,
                display: { xs: "inline-flex", sm: "none" }
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* NAV DESKTOP */}
            <Box
              // Isso esconde os itens da navegação para menu
              sx={{
                display: { xs: "none", sm: "flex" },
                gap: 1
              }}
            >
              {navItems.map(([label, id]) => (
                <Button
                  key={label}
                  onClick={() => scrollToSection(id)}
                  sx={{ color: "#fff" }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          </Box>

          {/* DIREITA — ícone de tema */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {mode === "dark" ? (
              <LightModeIcon onClick={modeChange} sx={{ cursor: "pointer" }} />
            ) : (
              <DarkModeIcon onClick={modeChange} sx={{ cursor: "pointer" }} />
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer (mobile) */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
