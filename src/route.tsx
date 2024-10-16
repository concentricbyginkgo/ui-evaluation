import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { Mui } from './mui/mui'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/mui',
    element: <Mui />,
  },
])

export { router }
