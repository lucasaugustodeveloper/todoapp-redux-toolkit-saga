import { createBrowserRouter } from 'react-router-dom'

import App from '../Pages/App'

const routes = [
  {
    path: '/',
    element: <App />
  }
]

const router = createBrowserRouter(routes)

export default router

