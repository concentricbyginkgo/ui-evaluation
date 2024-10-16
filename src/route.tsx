import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { Mui } from './mui/mui'
import { Shadcn } from './shadcn/shadcn'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/mui',
    element: <Mui />,
  },
  {
    path: '/shadcn',
    element: <Shadcn />,
  },
])

export { router }
