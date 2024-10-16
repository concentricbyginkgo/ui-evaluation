import { Avatar, Box, Card, FormControlLabel, Link, Switch, Typography } from '@mui/material'
import { User } from '../common/types'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  users: User[]
  setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>
}

const UserCardContent = ({ user }: { user: User }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '120px',
        padding: '15px 10px',
        gap: '10px',
      }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Avatar alt={user.firstName} src={user.image} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '120px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          textWrap: 'nowrap',
        }}>
        <Typography fontWeight={700}>{user.birthDate}</Typography>
        <Typography>
          {user.firstName} {user.lastName}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography fontWeight={700}>{user.company.name}</Typography>
        <Typography>{user.company.address.address}</Typography>
        <Typography>{user.company.department}</Typography>
        <Typography>{user.company.title}</Typography>
      </Box>
    </Box>
  )
}

const MuiMainContent = ({ open, setOpen, users, setSelectedUser }: Props) => {
  const handleCardClick = (user: User) => {
    setSelectedUser(user)
    setOpen((prev) => !prev)
  }

  return (
    <Box
      component='main'
      sx={{ flex: 1, backgroundColor: '#f5f7f8', marginTop: '60px', paddingTop: '10px' }}>
      <Box
        component='section'
        sx={{
          width: '100%',
          height: '70px',
          display: 'flex',
          justifyContent: 'left',
          borderBottom: '1px grey solid',
          paddingLeft: '20px',
        }}>
        <FormControlLabel
          control={<Switch checked={open} onChange={() => setOpen((prev) => !prev)} />}
          label='Open Edit Panel'
        />
      </Box>
      <Box component='section'>
        {users?.map((user) => (
          <Card onClick={() => handleCardClick(user)} variant='outlined'>
            <UserCardContent user={user} />
          </Card>
        ))}
      </Box>
    </Box>
  )
}
export { MuiMainContent }
