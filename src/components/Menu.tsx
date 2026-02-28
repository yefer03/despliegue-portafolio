import { IconButton, Tooltip } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AppsIcon from "@mui/icons-material/Apps";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-scroll";

const Menu = () => {
  const navItems = [
    { to: "home", icon: <HomeIcon />, label: "Inicio" },
    { to: "about", icon: <PersonIcon />, label: "Sobre mí" },
    { to: "skills", icon: <CodeIcon />, label: "Skills" },
    { to: "projects", icon: <AppsIcon />, label: "Proyectos" },
    { to: "contact", icon: <EmailIcon />, label: "Contacto" },
  ];

  return (
    <nav className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="glass rounded-2xl py-3 px-4 sm:px-6 flex items-center gap-2 sm:gap-4 shadow-2xl shadow-black/50">
        {navItems.map(({ to, icon, label }) => (
          <Link key={to} to={to} smooth offset={-20}>
            <Tooltip title={label} placement="top" arrow>
              <IconButton
                className="group"
                sx={{
                  color: '#64748b',
                  '&:hover': {
                    color: '#06b6d4',
                    backgroundColor: 'rgba(6, 182, 212, 0.1)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                {icon}
              </IconButton>
            </Tooltip>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Menu;
