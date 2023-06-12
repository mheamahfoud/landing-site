// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { I18nProvider } from './i18n/i18nProvider'
import { LayoutSplashScreen } from './layout/MetronicSplashScreen'
import ScrollToTop from './routing/ScrollToTop'
import { useLang } from './i18n/Metronici18n'
// import { ToastProvider } from 'react-toast-notifications'


const App = () => {
  const lang =useLang();
  useEffect(() => {

    if (lang === 'ar') {
      document.body.style.fontFamily = 'Arial, Helvetica Neue, Helvetica, sans-serif';
      document.documentElement.setAttribute("dir", "rtl");
      document.body.style.direction = 'rtl';
    } else {
      document.body.style.fontFamily = 'roboto, sans-serif'; // Default font for other languages
      document.body.style.direction = 'ltr';
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, []);
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      {/* <ToastProvider autoDismiss={true}> */}
        <ScrollToTop />
        <I18nProvider>
          <Outlet />
        </I18nProvider>
      {/* </ToastProvider> */}
    </Suspense>
  )
}

export { App }
