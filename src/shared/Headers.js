import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import companyLogo from './resource/PingSpaceLogo.png';
import { padding } from '@mui/system';
import { left } from '@popperjs/core';

const pages = ["Micro-fulfillment", "Robotics Warehouse", "About Us", "Let's Talk"];
const subpages = ["Grocery", "E-Commerce"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Headers = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 40px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#234CE9',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
      color: 'white',
  },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  
  class Menu extends React.Component {
    state = {
      isOpen: false
    };
  
    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  
    render() {
      const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
      return (
        <div>
          <link rel="stylesheet" href= "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
          <div className="navbar-nav justify-content-space-between">
            <div className="dropdown" onClick={this.toggleOpen} style={{paddingRight: 60}}>
              <li class="nav-item dropdown nav-link active">
                <a class="nav-link dropdown-toggle" href="#" id="MF-DD" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <b>{pages[0]}</b>
                </a>
                <div className={menuClass} aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="Grocery">{subpages[0]}</a>
                  <a className="dropdown-item" href="ECommerce">{subpages[1]}</a>
                </div>
              </li>
            </div>
            <div className="nav-item" style={{paddingRight: 60}}>
              <li class="nav-item nav-link active">
                <a class="nav-link" href="RoboticWarehouse" id="RW-Link">
                  <b>{pages[1]}</b>
                </a>
              </li>
            </div>
            <div className="nav-item" style={{paddingRight: 60}}>
              <li class="nav-item nav-link active">
                <a class="nav-link" href="AboutUs" id="AU-Link">
                  <b>{pages[2]}</b>
                </a>
              </li>
            </div>
            <BootstrapButton variant="contained" href="LetsTalk">
              <b>{pages[3]}</b>
            </BootstrapButton>
          </div>
        </div>
      );
    }
  } 
 
  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
        <Grid container spacing={2} style={{paddingLeft: 150, paddingTop: 30}}>
          <Grid item xs={4}>
                <Link className="navbar-brand" to="/" role="heading" aria-level="1">
                  <a href="/">
                    <img src={companyLogo} alt="PingSpaceLogo" width="200" height="60" />
                  </a>
                </Link>
          </Grid>
          <Grid item xs={8} style={{paddingTop: 20}}>
            <Menu></Menu>
          </Grid>
        </Grid>      
      </nav>
    </React.Fragment>
  );
}

export default Headers;