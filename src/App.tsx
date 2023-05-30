// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { I18nProvider } from './i18n/i18nProvider'
import { LayoutSplashScreen } from './layout/MetronicSplashScreen'
import ScrollToTop from './routing/ScrollToTop'
// import { ToastProvider } from 'react-toast-notifications'


const App = () => {
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
