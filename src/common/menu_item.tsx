import { ImLab } from 'react-icons/im'
import { IoIosUmbrella } from 'react-icons/io'
import { FaBuilding } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { FaUserNurse } from 'react-icons/fa'

type Menu = {
  label: string
  link: string
  icon?: React.ReactElement
}

const navMenus: Menu[] = [
  {
    label: 'Pooled Sample',
    link: '#',
    icon: <ImLab />,
  },
  {
    label: 'Umbrella Organizations',
    link: '#',
    icon: <IoIosUmbrella />,
  },
  {
    label: 'Organizations',
    link: '#',
    icon: <FaBuilding />,
  },
  {
    label: 'Team',
    link: '#',
    icon: <FaUsers />,
  },
  {
    label: 'Test Takers',
    link: '#',
    icon: <FaUserNurse />,
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
