import VideoLabelIcon from '@mui/icons-material/VideoLabel'
import BeachAccessIcon from '@mui/icons-material/BeachAccess'
import ApartmentIcon from '@mui/icons-material/Apartment'
import GroupIcon from '@mui/icons-material/Group'
import PersonIcon from '@mui/icons-material/Person'

type Menu = {
  label: string
  link: string
  icon?: React.ReactElement
}

const navMenus: Menu[] = [
  {
    label: 'Pooled Sample',
    link: '/',
    icon: <VideoLabelIcon />,
  },
  {
    label: 'Umbrella Organizations',
    link: '/',
    icon: <BeachAccessIcon />,
  },
  {
    label: 'Organizations',
    link: '/',
    icon: <ApartmentIcon />,
  },
  {
    label: 'Team',
    link: '/',
    icon: <GroupIcon />,
  },
  {
    label: 'Test Takers',
    link: '/',
    icon: <PersonIcon />,
  },
]

const profileMenus: Menu[] = [
  {
    label: 'Champion View',
    link: '#',
  },
  {
    label: 'Dashboard View',
    link: '#',
  },
  {
    label: 'Super Admin View',
    link: '#',
  },
  {
    label: 'Supervisor View',
    link: '#',
  },
]

export { navMenus, profileMenus }
