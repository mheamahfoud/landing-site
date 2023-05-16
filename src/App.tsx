// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import { I18nProvider } from './i18n/i18nProvider'
import { LayoutSplashScreen } from './layout/MetronicSplashScreen'
import ScrollToTop from './routing/ScrollToTop'


const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <ScrollToTop/>
      <I18nProvider>
            <Outlet />
      </I18nProvider>
    </Suspense>
  )
}

export {App}
