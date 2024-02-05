import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const pages = ['Equipment', 'About Us', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="relative" sx={{ backgroundColor: 'transparent', boxShadow: 'none', width: '100%' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Left section */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              fontFamily= 'Gilroy-Bold, Helvetica'
              sx={{ display: { md: 'none' },fontFamily:'Gilroy-Bold, Helvetica', flexGrow: 0 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                flexGrow: 1,
                fontFamily: "Chronicle Display-Semibold",
                fontSize: '32px',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
                marginLeft: { xs: 0, md: 'unset' }, // No margin on small screens, unset on larger screens
              }}
            >
              MNTN
            </Typography>
          </Box>

          {/* Middle section */}
          <Box fontFamily='Gilroy-Bold' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button 
  
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' , fontFamily: 'Gilroy-Bold, Helvetica'}}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Right section */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 0, marginLeft: 'auto' }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'white' }}>
              <AccountCircleIcon  fontSize="17px"  /> 
              <Typography fontFamily= 'Gilroy-Bold, Helvetica' fontSize="small" >  Account</Typography>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>

        {/* Collapsed menu for small screens */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography font-size="18px" fontFamily= 'Gilroy-Bold, Helvetica' textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
