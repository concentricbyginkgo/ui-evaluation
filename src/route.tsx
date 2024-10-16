import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { Shadcn } from './shadcn/shadcn'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/shadcn',
    element: <Shadcn />,
  },
])

export { router }
