
import { Route, Routes, Navigate } from 'react-router-dom'
import { MasterLayout } from '../layout/MasterLayout'
import { Landing } from '../pages/landing'
const PrivateRoutes = () => {
  return (
    <Routes>
   
        <Route element={<MasterLayout />}>
          <Route index element={<Navigate to='/landing' />} />
          <Route path='landing' element={<Landing />} />
        </Route>


   
      <Route path='*' element={<Navigate to='/error/404' />} />
    </Routes>
  )
}



export { PrivateRoutes }
