import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';


const Nav = () => {
  return (
      <div>
          
              <AppBar position="static">
                  <Toolbar>
                      <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2 }}
                      >
                          <MenuIcon />
                      </IconButton>
                      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                          Flipkart
                      </Typography>
                      <Link to='/'>
                          <Button variant='contained'>View</Button>
                      </Link>
                      <Link to='/Add'>
                          <Button variant='contained'>Add</Button>
                      </Link>
                  </Toolbar>
              </AppBar>
        
    </div>
  )
}

export default Nav