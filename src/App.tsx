import { router } from './router'
import { Fragment } from 'react'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  )
}

export default App
