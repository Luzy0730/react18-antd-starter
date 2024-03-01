import React, { memo, useEffect, useState } from 'react'
import { useLocation, useRoutes } from 'react-router-dom';
import routes, { blankPages } from '../router/index'
const LayoutWrapper = memo(() => {
  const location = useLocation()
  const [isBlank, setIsBlank] = useState(false)
  
  useEffect(() => {
    setIsBlank(blankPages.includes(location.pathname))
  }, [location.pathname])
  
  return (
    <div>
      {!isBlank && <div className='header'>header</div>}
      <div className='main'>{useRoutes(routes)}</div>
      {!isBlank && <div className='footer'>footer</div>}
    </div >
  )
})

export default LayoutWrapper