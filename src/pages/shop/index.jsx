import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

const Shop = memo(() => {
  return (
    <div>
      <h1>shop</h1>
      <Outlet />
    </div>
  )
})

export default Shop