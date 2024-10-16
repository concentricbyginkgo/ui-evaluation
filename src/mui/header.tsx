import { useState } from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import ginkgoLogo from '/biosecurity-logo-black.svg'
import { navMenus, profileMenus } from '../common/menu_items'
import { AppBar, Typography } from '@mui/material'

function MuiHeader() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position='fixed' sx={{ backgroundColor: 'white', zIndex: 1300 }}>
      <Toolbar
        variant='dense'
        disableGutters
        sx={{ minHeight: 60, height: 60, padding: '0 0 0 20px', display: 'flex' }}>
        <Box component='img' src={ginkgoLogo} width={220} sx={{ flex: 0 }} />
        <Box
          component='nav'
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'right',
            marginRight: '10px',
          }}>
          {navMenus.map((menu) => (
            <Button
              key={menu.label}
              onClick={() => {}}
              startIcon={menu.icon}
              sx={{ marginLeft: 2, textTransform: 'none', color: 'black' }}
              variant='text'>
              {menu.label}
            </Button>
          ))}
        </Box>
        <Button
          sx={{
            background: '#00122e',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            width: '200px',
            height: '100%',
          }}
          onClick={handleClick}>
          <Typography color='white' fontWeight={800}>
            Yao Mo
          </Typography>
        </Button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          slotProps={{
            paper: {
              style: {
                width: '200px',
                marginLeft: '16px',
              },
            },
          }}>
          {profileMenus.map((menu) => (
            <MenuItem onClick={handleClose}>{menu.label}</MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export { MuiHeader }
