import { Drawer, IconButton, Box, TextField } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useState } from 'react'
import { User } from '../common/types'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const MuiDrawer = ({ open, setOpen, user, setUser }: Props) => {
  const [internalUser, setInternalUser] = useState<Record<string, any>>(user || {})

  const onSave = () => {
    if (internalUser) {
      setUser((prev) => ({ ...prev, ...internalUser }) as User)
    }
  }

  const renderByValueType = (key: string, value: unknown) => {
    if (typeof value === 'string') {
      return (
        <TextField
          label={key}
          variant='outlined'
          value={value}
          onChange={(e) => setInternalUser((prev) => ({ ...prev, [key]: e.target.value }))}
          sx={{
            width: '100%',
            marginBottom: '15px',
          }}
        />
      )
    } else if (typeof value === 'number') {
      return (
        <TextField
          label={key}
          variant='outlined'
          value={value}
          type='number'
          onChange={(e) => setInternalUser((prev) => ({ ...prev, [key]: e.target.value }))}
          sx={{
            width: '100%',
            marginBottom: '15px',
          }}
        />
      )
    }

    return undefined
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='persistent'
      PaperProps={{ style: { paddingTop: '70px', width: '40%' } }}
      sx={{ zIndex: 1000 }}>
      <IconButton onClick={() => setOpen(false)} sx={{ display: 'flex', justifyContent: 'left' }}>
        <ChevronRightIcon />
      </IconButton>
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0 10px' }}>
        {user &&
          Object.entries(user).map(([key, val], index) => (
            <Box key={index}>{renderByValueType(key, val)}</Box>
          ))}
      </Box>
    </Drawer>
  )
}

export { MuiDrawer }
