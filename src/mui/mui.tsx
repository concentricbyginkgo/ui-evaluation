import { useEffect, useState } from 'react'
import { Box, CssBaseline } from '@mui/material'
import { MuiHeader } from './header'
import { MuiFooter } from './footer'
import { MuiMainContent } from './main'
import { MuiDrawer } from './drawer'
import { SnackBarProvider, useSnackBar } from './context'

import { User, Root } from '../common/types'

const USER_API_URL = 'https://dummyjson.com/users'

const Mui = () => {
  return (
    <SnackBarProvider>
      <MuiComponent />
    </SnackBarProvider>
  )
}

const MuiComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(true)
  const [users, setUsers] = useState<User[]>([])
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const { showSnackBar } = useSnackBar()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(USER_API_URL)
        const data = await resp.json()
        console.log(data)
        setUsers((data as Root).users)
      } catch (error) {
        showSnackBar({ message: 'Error fetching Users', color: 'error' })
      }
    }
    fetchData()
  }, [])

  return (
    <SnackBarProvider>
      <Box
        sx={{
          display: 'flex',
          width: '100vw',
          height: '100vh',
          flexDirection: 'column',
        }}>
        <CssBaseline />
        <MuiHeader />
        <MuiMainContent
          open={drawerOpen}
          setOpen={setDrawerOpen}
          users={users}
          setSelectedUser={setSelectedUser}
        />
        <MuiDrawer
          open={drawerOpen}
          setOpen={setDrawerOpen}
          user={selectedUser}
          setUser={setSelectedUser}
        />
        <MuiFooter />
      </Box>
    </SnackBarProvider>
  )
}

export { Mui }
