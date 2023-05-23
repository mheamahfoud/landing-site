import {
  Route,
  Routes,
} from "react-router-dom";
import { MasterLayout } from "../layout/MasterLayout";
import { Landing } from "../pages/landing";

import { DubbingAlbum } from "../pages/dubbingAlbum";
import { VisitorInfo } from "../pages/visitors";
import { ContactInfoPage } from "../pages/contactInformation";
import { SpecialtyPage } from "../pages/specialty";
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path="dubbing-album" element={<DubbingAlbum />} />
        <Route path="visitor-info" element={<VisitorInfo />} />
        <Route path="contact-info" element={<ContactInfoPage />} />
        <Route path="nis-specialties" element={<SpecialtyPage />} />
        <Route path="/" element={<Landing />} />
      </Route>
      {/* <Route path='*' element={<Navigate to='/error/404' />} /> */}
    </Routes>
  );
};

export { PrivateRoutes };

// export  const PrivateRoutes1 = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<MasterLayout />}>
//       <Route path="dubbing-album" element={<DubbingAlbum  />}  loader={getDrama}/>
//       <Route path="visitor-info" element={<VisitorInfo />} />
//       <Route path="contact-info" element={<ContactInfoPage />} />
//       <Route path="nis-specialties" element={<SpecialtyPage />} />
//       <Route path="/" element={<Landing />} />
//     </Route>
//   )
// );
