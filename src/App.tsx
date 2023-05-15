import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import { I18nProvider } from './i18n/i18nProvider'
import { LayoutSplashScreen } from './layout/MetronicSplashScreen'



const App = () => {

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
            <Outlet />
      </I18nProvider>
    </Suspense>
  )
}

export {App}
