
import { Route, Routes, Navigate } from 'react-router-dom'
import { MasterLayout } from '../layout/MasterLayout'
import { Landing } from '../pages/landing'

import { DubbingAlbum } from '../pages/dubbingAlbum'
const PrivateRoutes = () => {
  return (
    <Routes>
   
        <Route element={<MasterLayout />}>
          
          <Route path='dubbing-album' element={<DubbingAlbum />} />
          <Route path='/' element={<Landing />} />
        </Route>
      {/* <Route path='*' element={<Navigate to='/error/404' />} /> */}
    </Routes>
  )
}



export { PrivateRoutes }
